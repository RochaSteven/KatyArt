<?php

namespace Database\Factories;

use App\Models\articule;
use Illuminate\Database\Eloquent\Factories\Factory;

class ArticuleFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = articule::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
           'code'=>$this->faker->name,
            'name'=>$this->faker->name,
            'salePrice'=>$this->faker->name,
            'codePostal'=>$this->faker->name,
            'stock'=>$this->faker->name,
            'description'=>$this->faker->name,
            'img'=>$this->faker->name,
        ];
    }
}
