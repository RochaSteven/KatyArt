<?php

namespace App\Http\Controllers;

use App\Models\articule;
use App\Http\Resources\ArticuleResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ArticuleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $articule=Articule::all();
        return $articule;
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
        $file=$request->file('archivo');
        $ruta=$file->storeAs('img', $file->getClientOriginalName(),'public');
        $dataArticule=json_decode($request->articule,true);
        $articule = new Articule();
        $articule->code = $dataArticule['code'];
        $articule->name = $dataArticule['name'];
        $articule->salePrice = $dataArticule['salePrice'];
        $articule->codePostal = $dataArticule['codePostal'];
        $articule->stock = $dataArticule['stock'];
        $articule->description = $dataArticule['description'];
        $articule->img = $ruta;
        $articule->save();
        return response()->json([
            'data'=> $articule,
            'msg' =>[
                'summary'=>'Se creo correctamente',
                'detail'=> 'esta bien'
            ]
            ],201);
    }

    public function get($id){
        $data = Articule::find($id);
        return response()->json($data, 200);
      }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\articule  $articule
     * @return \Illuminate\Http\Response
     */
    public function show(Articule $id)
    {
        return $id;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\articule  $articule
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $articule = Articule::find($id);
      return $articule;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\articule  $articule
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        $articule=Articule::findOrFail($id);
        $dataArticule=json_decode($request->articule,true);
        if($articule->img != $dataArticule['img']){
          Storage::delete($articule->img); 
          $file=$request->file('archivo');
          $ruta=$file->storeAs('img', $file->getClientOriginalName(),'public'); 
          $articule->img = $ruta;
        }
        $articule->code = $dataArticule['code'];
        $articule->name = $dataArticule['name'];
        $articule->salePrice = $dataArticule['salePrice'];
        $articule->codePostal = $dataArticule['codePostal'];
        $articule->stock = $dataArticule['stock'];
        $articule->description = $dataArticule['description'];
        if($articule->save()){
            return new ArticuleResource($articule);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\articule  $articule
     * @return \Illuminate\Http\Response
     */
    public function destroy(Articule $articules, $id)
    {
        $articule = Articule::findOrFail($id);
        Storage::delete($articule->img);
        if($articule->delete()){
            return new ArticuleResource($articule);
        }
    }
}
