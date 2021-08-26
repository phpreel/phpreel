<?php

namespace Database\Factories;

use App\Models\Movie;
use Illuminate\Database\Eloquent\Factories\Factory;

class MovieFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Movie::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->sentence(3),
            'description' => $this->faker->text(100),
            'categories' => $this->faker->text(100),
            'length' => $this->faker->numberBetween(1, 72000),
            'thumbnail' => function () {
                return \App\Models\Image::factory()->create()->id;
            },
            'video' => function () {
                return \App\Models\Video::factory()->create()->id;
            },
            'public' => $this->faker->numberBetween(0, 1),
            'trailer' => function () {
                return \App\Models\Video::factory()->create()->id;
            },
            'premium' => $this->faker->numberBetween(0, 1),
            'auth' => $this->faker->numberBetween(0, 1)
        ];
    }
}
