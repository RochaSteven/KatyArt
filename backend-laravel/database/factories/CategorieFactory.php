<?php

namespace Database\Factories;

use App\Models\categorie;
use Illuminate\Database\Eloquent\Factories\Factory;

class CategorieFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = categorie::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
<<<<<<< HEAD
            'name'=>$this->faker->text(50),
            'condition'=>$this->faker->text(300)
=======
            //
            'name' => $this->faker->name,
            'condition' =>$this->faker->condition,
>>>>>>> 387c0b78c9a120d00d6210e878d00fa70d4415a5
        ];
    }
}
