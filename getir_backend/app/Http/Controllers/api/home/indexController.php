<?php

namespace App\Http\Controllers\api\home;

use App\Http\Controllers\api\BaseController;
use App\Http\Controllers\Controller;
use App\Models\BannerModel;
use App\Models\CategoriesModel;
use Illuminate\Http\Request;

class indexController extends BaseController
{
    public function index(Request $request)
    {
        $banners = BannerModel::all();
        $categories = CategoriesModel::all();

        return parent::success("Anasayfa Bilgileri Getirildi",[
            "banners" => $banners,
            "categories" => $categories
        ]);
    }
}
