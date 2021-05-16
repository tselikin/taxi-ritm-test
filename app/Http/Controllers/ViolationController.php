<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ViolationController extends Controller
{
      public function postForApi(Request $request)
      {
          return response()->json($request->all());
      }
}
