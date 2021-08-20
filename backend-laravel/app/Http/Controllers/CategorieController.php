<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategorieResource; 
use App\Models\Categorie;
use Illuminate\Http\Request;

class CategorieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
<<<<<<< HEAD
    public function index(Request $request)
    {
        //here I show all the inserted categories
    
        $categories=Categorie::paginate(10);
        return CategorieResource::collection($categories);
        
=======
    public function index()
    {  
        return $categorie=categorie:: all();
>>>>>>> 9deea4702a54a4601004c2912afe074f91add8a5
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $categorie=categorie::create($request->all());
        return $categorie;
        if($categorie){
            echo "creado con exito"; 
           }else{
            echo "nel pastel error";   
           }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\categorie  $categorie
     * @return \Illuminate\Http\Response
     */
    public function show(categorie $id)
    {
          return $id; 
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\categorie  $categorie
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request)
    {
        //
        $categories = Categorie::where('name', $request->name)->get();
        return $categories;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\categorie  $categorie
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, categorie $categorie,$id)
    {
        $categorie=categorie::find($id);
        $categorie->name=$request->get("name");
        $categorie->condition=$request->get("condition");
        $categorie->save();
        return $categorie;
        if($categorie){
            echo "editar con exito"; 
         }
         else{
           echo "nel pastel";
         }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\categorie  $categorie
     * @return \Illuminate\Http\Response
     */
    public function destroy(categorie $categorie,$id)
    {
        $categorie=categorie::find($id);
        $categorie->delete();
        return "eliminado con exito";
    }
}