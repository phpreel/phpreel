<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Episode;
use App\Models\Seasons;
use App\Models\Video;
use App\Models\Series;
use Illuminate\Support\Facades\Storage;
use App\Helpers\Content\EpisodeBuilder;
use App\Helpers\Theme\Asset;
use Theme;

class EpisodeController extends Controller
{
    public function indexDashboard()
    {
        $episodes = Episode::orderByDesc('id')
            ->with('season')
            ->simplePaginate(10);

        return view('episodes.index', [
            'episodes' => $episodes, 
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $seasons = Seasons::orderBy('seasons.id', 'desc')
            ->join('series', 'seasons.series_id', '=', 'series.id')
            ->get(['seasons.id', 'seasons.title', 'series.title as series_title']);

        return view('episodes.create', [
            'seasons' => $seasons,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $builder = new EpisodeBuilder();

        $builder->setRequest($request)->validate()->store();

        return redirect()->route('episodeDashboard');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $response = [];

        $currentEpisode = Episode::where([
            ['episodes.id', '=', $id],
            ['episodes.public', '=', 1]
        ])
        ->with('videos')
        ->with('images')
        ->first();

        if($currentEpisode == null)
        {
            return response()->json(['error' => 'Episode not found.'], 404);
        }

        $video = [
            'href' => Asset::video($currentEpisode->videos->name, $currentEpisode->videos->storage),
            'rel' => 'episodes',
            'type' => 'GET'
        ];
 
        if($currentEpisode->images == null)
        {
            $image = null;
        }
        else
        {
            $image = [
                'href' => Asset::image($currentEpisode->images->name, $currentEpisode->images->storage),
                'rel' => 'episodes',
                'type' => 'GET'
            ];
        }

        $response['data'] = $currentEpisode;

        $response['links'] = [
            'video' => $video,
            'image' => $image
        ];

        // If it's a single episode (a standalone video that is not linked to any season or series)
        if($currentEpisode->season_id == null)
        {
            return response()->json($response, 200);
        }

        //Get the next episode
        $nextEpisode = Episode::where([
            ['order', '>', $currentEpisode->order],
            ['season_id', '=', $currentEpisode->season_id]
        ])
        ->orderBy('order', 'asc')
        ->limit(1)
        ->select('id')
        ->first();

        //Get the previous episode
        $prevEpisode = Episode::where([
            ['order', '<', $currentEpisode->order],
            ['season_id', '=', $currentEpisode->season_id]
        ])
        ->orderBy('order', 'desc')
        ->limit(1)
        ->select('id')
        ->first();

        if($nextEpisode == null)
        {
            $next = null;
        }
        else
        {
            $next = [
                'href' => route('episodeShow:api', ['id' => $nextEpisode->id]),
                'rel' => 'episodes',
                'type' => 'GET'
            ];
        }

        if($prevEpisode == null)
        {
            $previous = null;
        }
        else
        {
            $previous = [
                'href' => route('episodeShow:api', ['id' => $prevEpisode->id]),
                'rel' => 'episodes',
                'type' => 'GET'
            ];
        }

        $response['links'] = [
            'video' => $video,
            'next' => $next,
            'previous' => $previous
        ];

        return response()->json($response, 200);

        dd($currentEpisode);
        //Get the current episode
        $currentEpisode = Episode::where([
            ['episodes.id', '=', $id],
            ['episodes.public', '=', 1]
        ])
            ->join('seasons', 'seasons.id', '=', 'episodes.season_id')
            ->join('series', 'series.id', '=', 'seasons.series_id')
            ->join('videos', 'videos.id', '=', 'episodes.video')
            ->first([
                'episodes.title', 
                'episodes.description', 
                'episodes.video', 
                'episodes.order', 
                'episodes.season_id',
                'seasons.series_id',
                'seasons.order as season_order',
                'videos.name as video_name',
                'videos.storage as video_storage',
            ]);

        //Check if that episode exists
        if($currentEpisode == null)
            return abort(404);

        //Set order of the current episode
        $currentEpisodeOrder = $currentEpisode['order'];

        //Set current season id
        $currentSeasonId = $currentEpisode['season_id'];

        //Get the next episode
        $nextEpisode = Episode::where([
            ['order', '>', $currentEpisodeOrder],
            ['season_id', '=', $currentSeasonId]
        ])
            ->orderBy('order', 'asc')
            ->limit(1)
            ->select('id')
            ->first();

        //Get the previous episode
        $prevEpisode = Episode::where([
            ['order', '<', $currentEpisodeOrder],
            ['season_id', '=', $currentSeasonId]
        ])
            ->orderBy('order', 'desc')
            ->limit(1)
            ->select('id')
            ->first();
    
        //Create an array with all the prev, next, current
        $episodes = [];

        $episodes['previous'] = $prevEpisode;
        $episodes['current'] = $currentEpisode;
        $episodes['next'] = $nextEpisode;

        $categoriesJson = Series::find($currentEpisode->series_id)->first("categories")["categories"];

        $categories = json_decode($categoriesJson, true);

        return Theme::view('episodes.show', [
            'previousItem' => $prevEpisode,
            'nextItem' => $nextEpisode,
            'item' => $currentEpisode,
            'categories' => $categories
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $episode = Episode::find($id);
       
        if($episode != null)
            $content = $episode;
        else
            abort();

        $seasons = Seasons::orderBy('id', 'desc')
            ->get(['id', 'title']);

        $video = Video::where('id', '=', $episode['video'])->first(['name', 'storage']);

        return view('episodes.edit', [
            'content' => $content,
            'id' => $id,
            'seasons' => $seasons,
            'video' => $video
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $builder = new EpisodeBuilder();

        $builder->setRequest($request)->validate()->update($id);

        return redirect()->route('episodeDashboard');
    }

    /**
     * Display a list of episodes.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $response = [];

        $episodes = Episode::orderBy('order')
            ->with('videos')
            ->where('season_id', '=', $request->season)
            ->get();

        if(empty($episodes->toArray()))
        {
            return response()->json(['error' => 'Episodes not found.'], 404);
        }

        for($i=0;$i<count($episodes);$i++)
        {
            $response[$i]  = [
                'data' => $episodes[$i],
                'links' => [
                    'episode' => [
                        'href' => route('episodeShow:api', ['id' => $episodes[$i]->id]),
                        'rel' => 'episodes',
                        'type' => 'GET'
                    ],
                    'video' => [
                        'href' => Asset::video($episodes[$i]->videos->name, $episodes[$i]->videos->storage),
                        'rel' => 'episodes',
                        'type' => 'GET'
                    ]
                ]
            ];
        }
        
        return response()->json($response, 200);
    }
}
