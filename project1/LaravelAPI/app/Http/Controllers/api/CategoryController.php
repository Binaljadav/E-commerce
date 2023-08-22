<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    public function Index(Request $request)
    {
        $categories = Category::get();
        $count = Category::count();

        if (count($categories) == 0) {
            return response()->json(['categories' => $categories], 404);
        } elseif (count($categories) > 0) {
            return response()->json(['categories' => $categories], 200);
        } else {
            return response()->json(['Message' => 'Internal Server Error'], 500);
        }
    }
    public function Save(Request $request)
    {
        $obj = new Category();

        $obj->name = $request->name;

        if ($obj->save()) {
            return response()->json(['status' => 200, 'message' => 'Category Created Successfully'], 200);
        } else {
            return response()->json(['status' => 500, 'message' => 'Internal Server Error'], 500);
        }
    }
    public function Edit($id)
    {
        $category = Category::find($id);

        if (!empty($category)) {
            return response()->json(['category' => $category], 200);
        } elseif (empty($banner)) {
            return response()->json(['category' => $category], 404);
        } else {
            return response()->json(['status' => 500, 'message' => 'Internal Server Error'], 500);
        }
    }
    public function ForceDelete($id)
    {
        $obj = Category::find($id);
        if ($delete = $obj->forceDelete()) {
            return response()->json(['status' => 200, 'message' => 'Category Deleted Successfully'], 200);
        } else {
            return response()->json(['status' => 500, 'message' => 'Internal Server Error'], 500);
        }
    }
    public function Update(Request $request)
    {
        $id = $request->id;
        $obj = Category::find($id);

        $obj->name = $request->name;
        if ($obj->save()) {
            return response()->json(['status' => 200, 'message' => 'Category Updated Successfully'], 200);
        } else {
            return response()->json(['status' => 500, 'message' => 'Internal Server Error'], 500);
        }
    }
}