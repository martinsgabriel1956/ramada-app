import { useSafeAsyncAction } from "@/hooks/useSafeAsyncAction";
import { router, usePage } from "@inertiajs/react";
import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";

type Product = {
	name: string;
	price: number;
	description?: string;
	category: string;
};

type ProductFormRef = {
	setFieldsValues: (values: Product) => void;
};

export function useUpdateProduct() {
	const { props } = usePage();
	const [contactName, setContactName] = useState("");
	const productId = props.id;
	const safeAsyncAction = useSafeAsyncAction();
	const productFormRef = useRef<ProductFormRef>(null);

	const loadProduct = useCallback(async () => {
		try {
			const productRequest = await axios.get(`/api/product/${productId}`);
			const productData = productRequest.data;
			safeAsyncAction(() => {
				productFormRef.current?.setFieldsValues(productData);
				setContactName(productData.name);
			});
		} catch (error) {}
	}, [productId, safeAsyncAction]);

	async function handleSubmit(data: Product) {
		try {
			await axios.put(`/api/product/${productId}`, data);
			router.visit("/");
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		loadProduct();
	}, [loadProduct]);

	return {
		contactName,
		handleSubmit,
		productFormRef,
	};
}
