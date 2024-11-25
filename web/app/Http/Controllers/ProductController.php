<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;

class ProductController extends Controller {
	public function index() {
		$response = Http::get("http://localhost:8080/products");

		return response()->json($response->json());
	}
}
