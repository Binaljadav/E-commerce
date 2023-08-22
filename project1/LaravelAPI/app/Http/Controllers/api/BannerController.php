<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Banner;
use AppConstants;
use Image;

class BannerController extends Controller
{
    public function Index(Request $request)
    {
        $banners = Banner::get();

        if (count($banners) == 0) {
            return response()->json(['banners' => $banners], 404);
        } elseif (count($banners) > 0) {
            return response()->json(['banners' => $banners], 200);
        } else {
            return response()->json(['Message' => 'Internal Server Error'], 500);
        }
    }
    public function Save(Request $request)
    {
        $obj = new Banner();
        $image = $request->file('image');
        if ($image) {
            $image_name = hexdec(uniqid()) . '.' . $image->getClientOriginalExtension();
            $image_final_name = AppConstants::BANNER . $image_name;
            $img = Image::make($image);
            $img->save($image_final_name);
        }

        $host = request()->getSchemeAndHttpHost();
        $apiImageUrl = $host . '/' . $image_final_name;
        $obj->image = $image_final_name;
        $obj->api_image = $apiImageUrl;
        if ($obj->save()) {
            return response()->json(['status' => 200, 'message' => 'Banner Created Successfully'], 200);
        } else {
            return response()->json(['status' => 500, 'message' => 'Internal Server Error'], 500);
        }
    }
    public function Edit($id)
    {
        $banner = Banner::find($id);

        if (!empty($banner)) {
            return response()->json(['banner' => $banner], 200);
        } elseif (empty($banner)) {
            return response()->json(['banner' => $banner], 404);
        } else {
            return response()->json(['status' => 500, 'message' => 'Internal Server Error'], 500);
        }
    }
    public function Update(Request $request)
    {
        $id = $request->id;
        $obj = Banner::find($id);

        $image_final_name = $obj->image;
        $old_image = $obj->image;
        $image = $request->file('image');

        if ($image) {
            $image_name = hexdec(uniqid()) . '.' . $image->getClientOriginalExtension();
            $image_final_name = AppConstants::BANNER . $image_name;
            $img = Image::make($image);
            $img->save($image_final_name);
            if (!empty($old_image)) {
                unlink($old_image);
            }
        }
        $host = request()->getSchemeAndHttpHost();
        $apiImageUrl = $host . '/' . $image_final_name;
        $obj->image = $image_final_name;
        $obj->api_image = $apiImageUrl;
        if ($obj->save()) {
            return response()->json(['status' => 200, 'message' => 'Banner Updated Successfully'], 200);
        } else {
            return response()->json(['status' => 500, 'message' => 'Internal Server Error'], 500);
        }
    }
    public function ForceDelete($id)
    {
        $obj = Banner::find($id);

        $image = $obj->image;

        if ($delete = $obj->forceDelete()) {
            unlink($image);
            return response()->json(['status' => 200, 'message' => 'Banner Deleted Successfully'], 200);
        } else {
            return response()->json(['status' => 500, 'message' => 'Internal Server Error'], 500);
        }
    }
}