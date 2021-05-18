<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Violation;
use Illuminate\Support\Facades\Auth;

class ViolationController extends Controller
{
      public function postForApi(Request $request)
      {
          $newViolation = new Violation();

          $newViolation->badboy = $request->badboy;
          $newViolation->moderator = Auth::user()->name;
          $newViolation->server = "werner";
          $newViolation->broken_rule = $request->broken_rule;
          $newViolation->punishment_type = $request->punishment_type;
          $newViolation->duration = $request->duration_number." ".$request->duration_type;

          $newViolation->save();

          return response("New violation saved", 200);
      }

      public function index(Request $request)
      {
            return Violation::all();
      }
}
