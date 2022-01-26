<?php

namespace App\Http\Middleware;

use Closure;
use Auth;
use Illuminate\Http\Request;
use App\Helpers\Content\ContentHandler;
use App\Helpers\User\UserHandler;
use App\Helpers\Resource\ResourceHandler;

class CheckAccessAvailability
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $routeName = $request->route()->getName();
        $id = $request->route()->parameter('id');
        $authorization = [];
        $authCheck = auth('sanctum')->check();

        //Get the validation data
        if($routeName == 'movieShow')
        {
            $authorization = ContentHandler::getAccessAvailabilityMovie($id);
        }
        else if($routeName == 'episodeShow')
        {
            $authorization = ContentHandler::getAccessAvailabilityEpisodes($id);
        }
        else if($routeName == 'videoResource')
        {
            $authorization = ResourceHandler::getAccessAvailabilityVideo($request->route()->parameter('fileName'));
        }
        else
        {
            return response()->json(['error' => 'Not found'], 404); 
        }

        //If it's free
        if($authorization['premium'] == 0)
        {
            //If auth is not required
            if($authorization['auth'] == 0)
            {
                return $next($request);
            }
            //If auth is required and the user is authenticated
            else if($authorization['auth'] == 1 && $authCheck)
            {
                return $next($request);
            }
            else
            {
                return redirect()->route('login:api');
            }
        }
        //If the content is not free but the user has a subscription (or is admin) and is authenticated
        else if($authorization['premium'] == 1 && $authCheck && (UserHandler::checkSubscription() || UserHandler::getUserRole() == 'admin'))
        {
            return $next($request);
        }
        else
        {
            $response = [];

            $response['links'] = [
                'subscribe' => [
                    'href' => route('subscribeStore'),
                    'rel' => 'subscribe',
                    'type' => 'POST'
                ]
            ];

            return response()->json($response, 200); 
        }
        
        return $next($request);
    }
}
