<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class products extends Model
{
    public function articules(){
        return $this->belongsTo('App/Models/articule');
    }
    protected $fillable=[
        'name',
        'purshePrice',
        'salePrice',
        'expirationDate',
        'weight',
        'fragility',
        'length',
        'broad',
        'amount'
        ];
}
