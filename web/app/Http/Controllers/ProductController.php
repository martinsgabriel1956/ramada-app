<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;

class ProductController extends Controller {
	public function index() {
		$response = Http::get("http://localhost:8080/products");

		return response()->json($response->json());
	}

	public function delete(string $id) {
		echo $id;

		$response = Http::delete("http://localhost:8080/products/{$id}");
		return response()->json($response->json());
	}
}
