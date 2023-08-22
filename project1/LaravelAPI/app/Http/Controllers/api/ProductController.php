<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use AppConstants;
use Image;


class ProductController extends Controller
{
    public function Index(Request $request)
    {
        $products = Product::get();

        if(count($products) == 0)
        {
            return response()->json(['products' => $products],404);
        }
        else if(count($products) > 0)
        {
            return response()->json(['products' => $products],200);
        }
        else
        {
            return response()->json(['Message' => 'Internal Server Error']);
        }
    }
    public function Save(Request $request)
    {
        $obj = new Product();

        $image=$request->file('image');

        if($image)
        {
            $image_name=hexdec(uniqid()).'.'.$image->getClientOriginalExtension();
            $image_final_name=AppConstants::PRODUCT.$image_name;
            $img = Image::make($image);
            $img->save($image_final_name);
        }

            $host = request()->getSchemeAndHttpHost();
            $apiImageUrl = $host . '/' . $image_final_name;
            $obj->image=$image_final_name;
            $obj->categoryid = $request->categoryid;
            $obj->subcategoryid = $request->subcategoryid;
            $obj->companyid = $request->companyid;
            $obj->name = $request->name;
            $obj->price = $request->price;
            $obj->description = $request->description;
 
            if($obj->save())
            {
                return response()->json(['status' => 200, 'message' => 'Product Created Successfully'],200);
            }
            else
            {
                return response()->json(['status' => 500, 'message' => 'Internal Server Error'],500);
            }
    }
    public function Edit($id)
    {
        $product = Product::find($id);

        if(!empty($product))
        {
            return response()->json(['product' => $product],200);
        }
        else if(empty($product))
        {
            return response()->json(['product' => $product],404);

        }
        else
        {
            return response()->json(['status' => 500, 'message' => 'Internal Server Error'],500);

        }
    }
    public function Update(Request $request)
    {
        $id = $request->id;
        $obj = Product::find($id);

        $image_final_name = $obj->image;
        $image=$request->file('image');

        if ($image) {
            $image_name = hexdec(uniqid()) . '.' . $image->getClientOriginalExtension();
            $image_final_name = AppConstants::PRODUCT . $image_name;
            $img = Image::make($image);
            $img->save($image_final_name);
            if (!empty($old_image)) {
                unlink($old_image);
            }
        }

        $host = request()->getSchemeAndHttpHost();
        $apiImageUrl = $host . '/' . $image_final_name;
        $obj->image=$image_final_name;
        $obj->categoryid = $request->categoryid;
        $obj->subcategoryid = $request->subcategoryid;
        $obj->companyid = $request->companyid;
        $obj->name = $request->name;
        $obj->price = $request->price;
        $obj->description = $request->description;
        if($obj->save())
        {
                return response()->json(['status' => 200, 'message' => 'Product Updated Successfully'],200);
        }
        else
        {
                return response()->json(['status' => 500, 'message' => 'Internal Server Error'],500);
        }

    }
    public function ForceDelete($id)
    {
        $obj = Product::find($id);

        $image=$obj->image;
        
        if($delete=$obj->forceDelete())
        {
            unlink($image);
            return response()->json(['status' => 200, 'message' => 'Product Deleted Successfully'],200);
        }
        else
        {
            return response()->json(['status' => 500, 'message' => 'Internal Server Error'],500);
        }
    }
}
