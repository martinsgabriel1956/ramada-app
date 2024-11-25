import axios from "axios";
import { useCallback, useEffect, useState } from "react";

type Product = {
	id: string;
	name: string;
	description: string;
	price: number;
	category: string;
};

export function useHome() {
	const [products, setProducts] = useState<Product[]>([]);

	const getProductsRequest = useCallback(async () => {
		const productsRequest = await axios.get("/api/products");

		const productsData = productsRequest.data;

		setProducts(productsData);
	}, []);

	useEffect(() => {
		getProductsRequest();
	}, []);

	return {
		products,
	};
}
