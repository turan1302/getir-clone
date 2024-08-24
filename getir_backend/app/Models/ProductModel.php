<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProductModel extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = "products";
    protected $primaryKey  = "prd_id";
    protected $guarded = [];
    public const CREATED_AT = "prd_created_at";
    public const UPDATED_AT = "prd_updated_at";
}
