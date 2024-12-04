import { router } from "@inertiajs/react";
import axios from "axios";
import { useRef } from "react";

type ProductBody = {
	name: string;
	description: string;
	price: number;
	category: string;
};

export function useCreateProduct() {
	const productFormRef = useRef(null);

	async function handleSubmit(product: ProductBody) {
		try {
			await axios.post("/api/product", {
				body: product,
			});

			router.visit("/");
		} catch (err) {
			console.log({ err });
		}
	}

	return {
		handleSubmit,
		productFormRef,
	};
}
