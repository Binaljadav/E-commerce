<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SubCategory;

class SubCategoryController extends Controller
{
    public function Index(Request $request)
    {
        $subCategories = SubCategory::get();

        if (count($subCategories) == 0) {
            return response()->json(['subCategories' => $subCategories], 404);
        } elseif (count($subCategories) > 0) {
            return response()->json(['subCategories' => $subCategories], 200);
        } else {
            return response()->json(['Message' => 'Internal Server Error'], 500);
        }
    }
    public function Save(Request $request)
    {
        $obj = new SubCategory();

        $obj->category_id = $request->category_id;
        $obj->name = $request->name;

        if ($obj->save()) {
            return response()->json(['status' => 200, 'message' => 'SubCategory Created Successfully'], 200);
        } else {
            return response()->json(['status' => 500, 'message' => 'Internal Server Error'], 500);
        }
    }
    public function Edit($id)
    {
        $subcategory = SubCategory::find($id);

        if (!empty($subcategory)) {
            return response()->json(['subcategory' => $subcategory], 200);
        } elseif (empty($subcategory)) {
            return response()->json(['subcategory' => $subcategory], 404);
        } else {
            return response()->json(['status' => 500, 'message' => 'Internal Server Error'], 500);
        }
    }
    public function ForceDelete($id)
    {
        $obj = SubCategory::find($id);

        if ($delete = $obj->forceDelete()) {
            return response()->json(['status' => 200, 'message' => 'SubCategory Deleted Successfully'], 200);
        } else {
            return response()->json(['status' => 500, 'message' => 'SubCategory Deleted Successfully'], 500);
        }
    }
    public function Update(Request $request)
    {
        $id = $request->id;
        $obj = SubCategory::find($id);

        $obj->category_id = $request->category_id;
        $obj->name = $request->name;
        if ($obj->save()) {
            return response()->json(['status' => 200, 'message' => 'SubCategory Updated Successfully'], 200);
        } else {
            return response()->json(['status' => 500, 'message' => 'Internal Server Error'], 500);
        }
    }
}