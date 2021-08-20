<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class articule extends Model
{

    use SoftDeletes;

    public function subcategories(){
        return $this->belongsTo('App/Models/subCategorie');
    }
    public function products(){
        return $this->hasMany('App/Models/products'); 
     }
     protected $fillable=[
        'code',
        'name',
        'salePrice',
        'codePostal',
        'stock',
        'description',
        'img'
        ];
}
