<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\api\BannerController;
use App\Http\Controllers\api\CategoryController;
use App\Http\Controllers\api\SubCategoryController;
use App\Http\Controllers\api\CompanyController;
use App\Http\Controllers\api\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/banner', [BannerController::class, 'Index'])->name('api.banner');
Route::post('/banner/save', [BannerController::class, 'Save'])->name('api.banner.save');
Route::get('/banner/edit/{id}', [BannerController::class, 'Edit'])->name('api.banner.edit');
Route::any('/banner/update', [BannerController::class, 'Update'])->name('api.banner.update');
Route::get('/banner/forcedelete/{id}', [BannerController::class, 'ForceDelete'])->name('api.banner.forcedelete');

Route::get('/category', [CategoryController::class, 'Index'])->name('api.category');
Route::post('/category/save', [CategoryController::class, 'Save'])->name('api.category.save');
Route::get('/category/edit/{id}', [CategoryController::class, 'Edit'])->name('api.category.edit');
Route::any('/category/update', [CategoryController::class, 'Update'])->name('api.category.update');
Route::get('/category/forcedelete/{id}', [CategoryController::class, 'ForceDelete'])->name('api.category.forcedelete');

Route::get('/subcategory', [SubCategoryController::class, 'Index'])->name('api.subcategory');
Route::post('/subcategory/save', [SubCategoryController::class, 'Save'])->name('api.subcategory.save');
Route::get('/subcategory/edit/{id}', [SubCategoryController::class, 'Edit'])->name('api.category.edit');
Route::any('/subcategory/update', [SubCategoryController::class, 'Update'])->name('api.subcategory.update');
Route::get('/subcategory/forcedelete/{id}', [SubCategoryController::class, 'ForceDelete'])->name('api.subcategory.forcedelete');

Route::get('/company', [CompanyController::class, 'Index'])->name('api.company');
Route::post('/company/save', [CompanyController::class, 'Save'])->name('api.company.save');
Route::get('/company/edit/{id}', [CompanyController::class, 'Edit'])->name('api.company.edit');
Route::any('/company/update', [CompanyController::class, 'Update'])->name('api.company.update');
Route::get('/company/forcedelete/{id}', [CompanyController::class, 'ForceDelete'])->name('api.company.forcedelete');

Route::get('/product', [ProductController::class, 'Index'])->name('api.product');
Route::post('/product/save', [ProductController::class, 'Save'])->name('api.product.save');
Route::get('/product/edit/{id}', [ProductController::class, 'Edit'])->name('api.product.edit');
Route::any('/product/update', [ProductController::class, 'Update'])->name('api.product.update');
Route::get('/product/forcedelete/{id}', [ProductController::class, 'ForceDelete'])->name('api.product.forcedelete');






