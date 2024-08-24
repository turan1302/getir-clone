<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class BannerModel extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = "banners";
    protected $primaryKey  = "bn_id";
    protected $guarded = [];
    public const CREATED_AT = "bn_created_at";
    public const UPDATED_AT = "bn_updated_at";
}
