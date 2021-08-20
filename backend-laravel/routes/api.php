<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ModuleProviders\RoleController;
use App\Http\Controllers\Api\ModuleProviders\UserController;
use App\Http\Controllers\Api\ModuleProviders\TypeIdentificacionController;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\ArticuleController;
use App\Http\Controllers\CartController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
// roles
Route::get('/roles', [RoleController::class, 'index']);
Route::post('/roles', [RoleController::class, 'store']);
Route::get('/roles/{id}', [RoleController::class, 'show']);
Route::put('/roles/{id}', [RoleController::class, 'update']);
Route::delete('/roles/{id}', [RoleController::class, 'destroy']);

// users
Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'store']);
Route::get('/users/{id}', [UserController::class, 'show']);
Route::put('/users/{id}', [UserController::class, 'update']);
Route::delete('/users/{id}', [UserController::class, 'destroy']);

//type Identifications
Route::get('/typeIdentificacions', [TypeIdentificacionController::class, 'index']);
Route::post('/typeIdentificacions', [TypeIdentificacionController::class, 'store']);
Route::get('/typeIdentificacions/{id}', [TypeIdentificacionController::class, 'show']);
Route::put('/typeIdentificacions/{id}', [TypeIdentificacionController::class, 'update']);
Route::delete('/typeIdentificacions/{id}', [TypeIdentificacionController::class, 'destroy']);

// product

// categories

Route::get('/categories',[CategorieController::class, 'index']);
Route::post('/categories',[CategorieController::class, 'store']);
Route::get('/categories/{id}',[CategorieController::class, 'show']);
Route::put('/categories/{id}',[CategorieController::class, 'update']);
Route::delete('/categories/{id}',[CategorieController::class, 'destroy']);
Route::get('/buscador/{name}', [CategorieController::class, 'buscador']);  

//articules
Route::get('/articules', [ArticuleController::class, 'index']);
Route::post('/articules/create', [ArticuleController::class, 'store']);
Route::get('/articules/edit/{id}', [ArticuleController::class, 'edit']);
Route::post('/articules/update/{id}', [ArticuleController::class, 'update']);
Route::delete('/articules/delete/{id}', [ArticuleController::class, 'destroy']);

//carts
Route::get('/carts', [CartController::class, 'index']);
Route::delete('/carts/delete/{id}', [CartController::class, 'destroy']);