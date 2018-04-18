<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Validator;

/**
* 
*/
class LoginController extends Controller
{
	
	public function index(Request $request)
	{
		$validator = Validator::make($request->all(), [
	      'email' => 'required',
	      'password' => 'required'
	    ]);
	    if ($validator->fails()) {
	    	return response()->json([
	    		'message' => 'error',
	    		'data' => $validator->errors()
	    	], 406);
	    }

	    $request->session()->put('token', 'algbelb124oioboaw13sdgs/./et23t');
	    $request->session()->put('email',$request->email);
	}

	public function checkAuth(Request $request)
	{
		if ($request->session()->has('token')) {
			return response()->json([
				'message' => 'success',
				'data' => $request->session()->get('email')
			], 200);
		}
		return response()->json([
			'message' => 'unauthorized',
			'data' => 'no_user'
		], 200);
	}
}

?>