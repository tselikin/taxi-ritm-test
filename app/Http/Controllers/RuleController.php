<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rule;

class RuleController extends Controller
{
    public function index()
    {
        $rules = Rule::all();
        return view('rules.index', ['rules' => $rules]);
    }


    public function indexForApi()
    {
        $rules = Rule::all();
        return response()->json(['rules' => $rules]);
    }

    public function store(Request $request)
    {
        $newRule = new Rule();
        $newRule->paragraph = $request->paragraph;
        $newRule->description = $request->description;
        $newRule->punishment = $request->punishment;

        $newRule->save();

        return redirect()->back();
        // dd($request->all());
    }


    public function delete(Request $request)
    {
        $ruleToDelete = Rule::find($request->rule_id);
        $ruleToDelete->delete();


        return redirect()->back();
    }


    public function edit(Rule $rule)
    {
        return view('rules.editRulePage', ['rule' => $rule]);
    }


    public function put(Request $request)
    {
        // dd($request);

        $rule = Rule::find($request->id);
        $rule->fill($request->all());
        $rule->save();

        return redirect()->route('rules');
        // return view('rules.editRulePage', ['rule' => $rule]);
    }
}
