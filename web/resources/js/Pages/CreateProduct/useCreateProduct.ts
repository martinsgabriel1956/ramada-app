import { router } from "@inertiajs/react";
import axios from "axios";

type ContactBody = {
	name: string;
	description: string;
	price: string;
	category: string;
};

export function useCreateProduct() {
	async function handleSubmit(product: ContactBody) {
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
	};
}
