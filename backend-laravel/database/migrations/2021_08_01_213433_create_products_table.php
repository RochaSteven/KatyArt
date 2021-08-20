<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->decimal('purshePrice');
            $table->decimal('salePrice');
            $table->date('expirationDate');
            $table->decimal('weight');
            $table->decimal('fragility');
            $table->decimal('length');
            $table->decimal('broad');
            $table->decimal('amount');
            $table->unsignedBigInteger('id_artiules')->unsigned()->nullable();
            $table->foreign('id_artiules')->references('id')->on('articules')->onUpdate('cascade');
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
