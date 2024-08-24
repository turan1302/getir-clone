<?php

namespace App\Http\Controllers\api\product;

use App\Http\Controllers\api\BaseController;
use App\Http\Controllers\Controller;
use App\Models\ProductImagesModel;
use App\Models\ProductModel;
use Illuminate\Http\Request;

class indexController extends BaseController
{
    public function detail(Request $request,$id)
    {
        $data = $request->except("_token");

        $product = ProductModel::where("prd_id",$id)->first();

        if ($product){
            $images = ProductImagesModel::where("pi_product",$product->prd_id)->get();
            return parent::success("Ürün Getirildi",[
                "product" => $product,
                "images" => $images
            ]);
        }else{
            return parent::error("Ürün Bulunamadı",[],404);
        }
    }
}
