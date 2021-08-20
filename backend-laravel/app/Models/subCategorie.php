<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class subCategorie extends Model
{
    public function categories(){
        return $this->belongsTo('App/Models/categorie');
    }
    public function articles(){
        return $this->hasMany('App/Models/articule'); 
     }
     protected $fillable=[
        'name'];
}
