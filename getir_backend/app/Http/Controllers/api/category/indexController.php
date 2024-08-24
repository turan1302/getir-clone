<?php

namespace App\Http\Controllers\api\category;

use App\Http\Controllers\api\BaseController;
use App\Http\Controllers\Controller;
use App\Models\CategoriesModel;
use App\Models\ProductModel;
use Illuminate\Http\Request;

class indexController extends BaseController
{
    public function detail(Request $request,$id)
    {
        $data = $request->except("_token");

        $category = CategoriesModel::where("ct_id",$id)->first();

        if ($category){
            $categories = CategoriesModel::all();
            $products = ProductModel::all();

            return parent::success("Kategori getirildi",[
                "category" => $category,
                "categories" => $categories,
                "products" => $products
            ]);
        }else{
            return parent::error("Kategori bulunamadı",[],404);
        }
    }
}
