<?php

namespace App\Http\Controllers;

use App\Models\subCategorie;
use Illuminate\Http\Request;

class SubCategorieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $subCategorie= subCategorie::all();
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
        $subCategorie=subCategorie::create($request->all());
        return $subCategorie;
        if($subCategorie){
            echo "creado con exito"; 
           }else{
            echo "nel pastel error";   
           }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\subCategorie  $subCategorie
     * @return \Illuminate\Http\Response
     */
    public function show(subCategorie $id)
    {
        return $id;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\subCategorie  $subCategorie
     * @return \Illuminate\Http\Response
     */
    public function edit(subCategorie $subCategorie)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\subCategorie  $subCategorie
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, subCategorie $subCategorie,$id)
    {
        $subCategorie=subCategorie::find($id);
        $subCategorie->name=$request->get("name");
        $subCategorie->save();
        return $subCategorie;
        if($subCategorie){
            echo "editar con exito"; 
         }
         else{
           echo "nel pastel";
         }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\subCategorie  $subCategorie
     * @return \Illuminate\Http\Response
     */
    public function destroy(subCategorie $subCategorie ,$id)
    { 
        $subCategorie=subCategorie::find($id);
        $subCategorie->delete();
        return "eliminado con exito";
    }
}
