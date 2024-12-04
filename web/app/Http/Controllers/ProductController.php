<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller {
	public function index() {
		$response = Http::get("http://localhost:8080/products");

		return response()->json($response->json());
	}

	public function create(Request $request) {
		$product = $request->json()->all()['body'];

		$validated = Validator::make($product, [
			'name' => 'required|string|max:255',
			'price' => 'required|numeric|min:0',
			'description' => 'nullable|string',
			'category' => 'required|string|max:255',
		]);

		if ($validated->fails()) {
			return response()->json($validated->errors(), 400);
		}

		$formattedBody = [
			'Name' => $product['name'],
			'Price' => $product['price'],
			'Description' => $product['description'],
			'Category' => $product['category'],
		];

		$response = Http::post("http://localhost:8080/product", $formattedBody);

		return response()->json($response->json());
	}

	public function delete(string $id) {
		$response = Http::delete("http://localhost:8080/products/{$id}");
		return response()->json($response->json());
	}

	public function createProduct(): Response {
		return Inertia::render('CreateProduct/index');
	}
}
