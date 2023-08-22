<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class SubCategory extends Model
{
    use SoftDeletes;

    protected $table="sub_category";

    protected $fillable = [
        'category_id',
        'name',
    ];
    
    public function Category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    public function Products()
    {
        return $this->hasMany(Product::class);
    }
}

