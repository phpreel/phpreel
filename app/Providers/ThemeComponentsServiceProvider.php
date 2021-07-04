<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Blade;

class ThemeComponentsServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $filenames = glob(app_path('Helpers/Theme/Components/*.php'));

        if ($filenames !== false && is_iterable($filenames)) 
            foreach ($filenames as $filename) 
                require_once $filename;
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //Custom if directives
        /**
         * Display vimeo content only
         * 
         * @param string $expression Storage medium used for the resource
         */
        Blade::if('vimeo', function ($expression) {
            return $expression === "vimeo";
        });

        /**
         * Display html5 content only
         * 
         * @param string $expression Storage medium used for the resource
         */
        Blade::if('html5', function ($expression) {
            return (($expression === "local") || ($expression === "s3"));
        });

        /**
         * Display youtube content only
         * 
         * @param string $expression Storage medium used for the resource
         */
        Blade::if('youtube', function ($expression) {
            return $expression === "youtube";
        });

        //URL generation
        /**
         * Returns a URL for a movie or a series
         * 
         * @param movie/series $item Movie or series object
         * @param int $itemId Id of movie or series
         */
        Blade::directive('itemUrl', function ($expression) {
            //Get the variables from the expression
            $params = explode(',', $expression);
            $item = $params[0];
            $itemId = $params[1];
            
            return "<?php
                if(with($item)->getTable() == 'movies')
                    echo route('movieShow', ['id' => $itemId]);
                else if(with($item)->getTable() == 'series')
                    echo route('seriesShow', ['id' => $itemId]); 
            ?>";
        });

        /**
         * Returns a URL for any type of images (theme images, resource images, url images)
         * Theme images are images stored in the theme folder
         * Resource images are those stored using a form
         * URL images are external images provided by an URL
         * 
         * @param string $imageName Name of the image resource 
         * @param string $imageStorage Storage medium of the image resource
         */
        Blade::directive('imageUrl', function ($expression) {
            //Get the variables from the expression
            $params = explode(',', $expression);
            $imageName = $params[0];
            $imageStorage = $params[1];

            if(strtolower($imageStorage) == 'url')
                $php = "<?php echo $imageName; ?>";
            else if(strtolower($imageStorage) == 'theme')
                $php = "<?php echo route('imageAsset', ['imageName' => $imageName]); ?>";
            else
                $php = "<?php echo route('fileResourceImage', ['fileName' => $imageName, 'storage' => $imageStorage]); ?>";
        
            return $php;
        });

        /**
         * Returns the element that will contain all the credit card information
         * 
         */
        Blade::directive('card', function () {
            return '<?php echo ("<div id=\"card\"></div>")?>';
        });

        /**
         * Displays the credit card errors
         * 
         */
        Blade::directive('cardError', function () {
            return '<?php echo ("<div id=\"cardError\" role=\"alert\"></div>")?>';
        });

        /**
         * Form containing the card holder name
         * 
         */
        Blade::directive('cardName', function () {
            return '<?php echo ("
                <input id=\"cardName\" name=\"cardHolderName\" placeholder=\"Card holder name\" required>
            ")?>';
        });

        /**
         * Button that submits the information
         * @param string $buttonText text to display inside the button
         */
        Blade::directive('cardSubmit', function ($buttonText) {
            //Remove quotes
            $buttonText = substr($buttonText, 1, strlen($buttonText)-2);
           // dd($buttonText);
            return '<?php echo ("
                <input id=\"cardSubmit\" type=\"submit\" class=\"btn ne-btn pay\" value=\"' . $buttonText . '\">
            ")?>';
        });

        /**
         * Hidden inputs to make payments work
         * 
         * @param string $imageName Name of the plan
         */
        Blade::directive('cardInfo', function ($name) {
            return '<?php echo ("
                <input type=\"hidden\" name=\"payment_method\" class=\"payment-method\">
                <input type=\"hidden\" value=\"$name\" name=\"plan\">
            ")?>';
        });
    }
}
