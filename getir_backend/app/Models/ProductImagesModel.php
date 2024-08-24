<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProductImagesModel extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = "product_images";
    protected $primaryKey  = "pi_id";
    protected $guarded = [];
    public const CREATED_AT = "pi_created_at";
    public const UPDATED_AT = "pi_updated_at";
}
