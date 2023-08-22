<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use SoftDeletes;

    protected $table="company";

    protected $fillable = [
        'name',
        'image',
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

