<?php
namespace App\Helpers\Categories; 

use Illuminate\Http\Request;
use App\Models\Movie;
use App\Models\Series;

class CategoriesHandler
{
    /**
     * Return movies that correspond to a certain value of a certain category
     *
     * @param string $category in what category to search
     * @param string $param what to search in that specific category
     * 
     */
    public static function getMovieByCategory(string $category, string $param)
    {
        $movies = Movie::orderByDesc('id')
            ->where('public', '=', '1')
            ->whereJsonContains("categories->$category", $param)
            ->join('images', 'images.id', '=', 'movies.thumbnail')
            ->select(
                'movies.id as id',
                'movies.title as title',
                'movies.description as description',
                'movies.length as length',
                'images.name as image_name',
                'images.storage as image_storage',
            )->get();
        
        return $movies;
    }

    /**
     * Return series that correspond to a certain value of a certain category
     *
     * @param string $category in what category to search
     * @param string $param what to search in that specific category
     * 
     */
    public static function getSeriesByCategory(string $category, string $param)
    {
        $series = Series::orderByDesc('id')
            ->where('public', '=', '1')
            ->whereJsonContains("categories->$category", $param)
            ->join('images', 'images.id', '=', 'series.thumbnail')
            ->select(
                'series.id as id',
                'series.title as title',
                'series.description as description',
                'series.year as year',
                'series.cast as cast',
                'series.genre as genre',
                'images.name as image_name',
                'images.storage as image_storage',
            )->get();

        return $series;
    }
}