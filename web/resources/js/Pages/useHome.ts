import axios from "axios";
import { useCallback, useEffect, useState } from "react";

type Product = {
	ID: string;
	name: string;
	description: string;
	price: number;
	category: string;
};

export function useHome() {
	const [products, setProducts] = useState<Product[]>([]);
	const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

	const getProductsRequest = useCallback(async () => {
		const productsRequest = await axios.get("/api/products");
		const productsData = productsRequest.data;
		setProducts(productsData);
	}, []);

	function handleCloseDeleteProductModal() {
		setIsOpenDeleteModal(!isOpenDeleteModal);
	}

	useEffect(() => {
		getProductsRequest();
	}, []);

	return {
		products,
		handleCloseDeleteProductModal,
		isOpenDeleteModal,
	};
}
