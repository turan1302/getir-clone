<?php

namespace App\Http\Controllers\api\cart;

use App\Http\Controllers\api\BaseController;
use App\Http\Controllers\Controller;
use App\Models\ProductModel;
use Illuminate\Http\Request;

class indexController extends BaseController
{
    public function index(Request $request)
    {
        $data = $request->except("_token");

        $products = ProductModel::all();

        return parent::success("Ürünler Getirildi",[
            "related" => $products
        ]);
    }
}
