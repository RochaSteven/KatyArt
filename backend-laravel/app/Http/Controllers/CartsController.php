<?php

namespace App\Http\Controllers;

use App\Models\carts;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use DB;

class CartsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $cart=cart::all();
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
        $carts = new Cart();
        //dd($request->code);
        $carts->TotalPayment = $request->TotalPayment;
        $carts->save();
        //dd($request->code);
        return response()->json([
            'data' => $carts,
            'msg' => [
                'summary' => 'success',
                'detail' => '',
                'code' => '201'
            ]], 201);
    }

    public function get($id){
        $data = Cart::find($id);
        return response()->json($data, 200);
      }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\carts  $carts
     * @return \Illuminate\Http\Response
     */
    public function show(carts $carts)
    {
        return $id;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\carts  $carts
     * @return \Illuminate\Http\Response
     */
    public function edit(carts $carts)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\carts  $carts
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, carts $carts)
    {
        $carts=Cart::find($id);
        $carts->TotalPayment=$request->get("TotalPayment");
        return $carts;
        if($carts){
            echo "valor total";
        }
        else{
          echo "nel pastel";
        }


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function destroy(Cart $carts, $id)
    {
        $carts=Cart::find($id);
        $carts->delete();
        return "eliminado con exito";
    }
}
