<?php

namespace App\Http\Controllers;

use App\Models\products;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $products=products::all();
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
        $products=products::create($request->all());
        return $products;
        if($products){
            echo "creado con exito"; 
           }else{
            echo "nel pastel error";   
           }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\products  $products
     * @return \Illuminate\Http\Response
     */
    public function show(products $id)
    {
        return $id; 
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\products  $products
     * @return \Illuminate\Http\Response
     */
    public function edit(products $products)
    {
         
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\products  $products
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, products $products,$id)
    {
        $products=products::find($id);
        $products->name=$request->get("name");
        $products->purshePrice=$request->get("purshePrice");
        $products->salePrice=$request->get("salePrice");
        $products->expirationDate=$request->get("expirationDate");
        $products->weight=$request->get("weight");
        $products->fragility=$request->get("fragility");
        $products->length=$request->get("length");
        $products->broad=$request->get("broad");
        $products->fragility=$request->get("amount");
        $products->save();
        return $products;
        if($products){
            echo "editar con exito"; 
         }
         else{
           echo "nel pastel";
         }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\products  $products
     * @return \Illuminate\Http\Response
     */
    public function destroy(products $products,$id)
    {
        $products=products::find($id);
        $products->delete();
        return "eliminado con exito";
    }
}
