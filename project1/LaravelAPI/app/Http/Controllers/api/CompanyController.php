<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Company;
use AppConstants;
use Image;

class CompanyController extends Controller
{
    public function Index(Request $request)
    {
        $companies = Company::get();

        if (count($companies) == 0) {
            return response()->json(['companies' => $companies], 404);
        } elseif (count($companies) > 0) {
            return response()->json(['companies' => $companies], 200);
        } else {
            return response()->json(['Message' => 'Internal Server Error'], 500);
        }
    }
    public function Save(Request $request)
    {
        $obj = new Company();

        $image = $request->file('image');

        if ($image) {
            $image_name = hexdec(uniqid()) . '.' . $image->getClientOriginalExtension();
            $image_final_name = AppConstants::COMPANY . $image_name;
            $img = Image::make($image);
            $img->save($image_final_name);
        }

        $host = request()->getSchemeAndHttpHost();
        $apiImageUrl = $host . '/' . $image_final_name;
        $obj->image = $image_final_name;
        $obj->name = $request->name;
        if ($obj->save()) {
            return response()->json(['status' => 200, 'message' => 'Company Created Successfully'], 200);
        } else {
            return response()->json(['status' => 500, 'message' => 'Internal Server Error'], 500);
        }
    }
    public function Edit($id)
    {
        $company = Company::find($id);

        if (!empty($company)) {
            return response()->json(['company' => $company], 200);
        } elseif (empty($company)) {
            return response()->json(['company' => $company], 404);
        } else {
            return response()->json(['status' => 500, 'message' => 'Internal Server Error'], 500);
        }
    }
    public function Update(Request $request)
    {
        $id = $request->id;
        $obj = Company::find($id);

        $image_final_name = $obj->image;
        $old_image = $obj->image;
        $image = $request->file('image');

        if ($image) {
            $image_name = hexdec(uniqid()) . '.' . $image->getClientOriginalExtension();
            $image_final_name = AppConstants::COMPANY . $image_name;
            $img = Image::make($image);
            $img->save($image_final_name);
            if (!empty($old_image)) {
                unlink($old_image);
            }
        }

        $host = request()->getSchemeAndHttpHost();
        $apiImageUrl = $host . '/' . $image_final_name;
        $obj->image = $image_final_name;
        $obj->name = $request->name;
        if ($obj->save()) {
            return response()->json(['status' => 200, 'message' => 'Company Updated Successfully'], 200);
        } else {
            return response()->json(['status' => 500, 'message' => 'Internal Server Error'], 500);
        }
    }
    public function ForceDelete($id)
    {
        $obj = Company::find($id);

        $image = $obj->image;

        if ($delete = $obj->forceDelete()) {
            unlink($image);
            return response()->json(['status' => 200, 'message' => 'Company Deleted Successfully'], 200);
        } else {
            return response()->json(['status' => 500, 'message' => 'Internal Server Error'], 500);
        }
    }
}
