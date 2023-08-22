<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use SoftDeletes;

    protected $table="category";

    protected $fillable = [
        'name',
    ];
    
    public function SubCategorys()
    {
        return $this->hasMany(SubCategory::class);
    }

    public function Products()
    {
        return $this->hasMany(Product::class);
    }
}

