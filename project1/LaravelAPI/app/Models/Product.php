<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use SoftDeletes;

    protected $table="product";

    protected $fillable = [
        'categoryid',
        'subcategoryid',
        'companyid',
        'name',
        'price',
        'description',
        'image',
    ];
    
    public function Category()
    {
        return $this->belongsTo(Category::class, 'categoryid');
    }

    public function SubCategory()
    {
        return $this->belongsTo(SubCategory::class, 'subcategoryid');
    }

    public function Company()
    {
        return $this->belongsTo(Company::class, 'companyid');
    }
}

