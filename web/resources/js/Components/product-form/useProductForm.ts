import { useErrors } from "@/hooks/useErrors";
import {
	type ChangeEvent,
	type FormEvent,
	useImperativeHandle,
	useState,
} from "react";

type Product = {
	name: string;
	price: number;
	description: string;
	category: string;
};

type useProductFormProps = {
	onSubmit: (product: Product) => Promise<void>;
	ref: React.ForwardedRef<ProductFormRef>;
};

type ProductFormRef = {
	setFieldsValues: (product: Product) => void;
};

export function useProductForm({ onSubmit, ref }: useProductFormProps) {
	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("");

	const { getErrorMessageByFieldName, setError, removeError } = useErrors();

	useImperativeHandle<ProductFormRef, ProductFormRef>(ref, () => ({
		setFieldsValues: (product: Product) => {
			setName(product.name ?? "");
			setPrice(product.price ?? 0);
			setDescription(product.description ?? "");
			setCategory(product.category ?? "");
		},
		resetFields: () => {
			setName("");
			setPrice(0);
			setDescription("");
			setCategory("");
		},
	}));

	function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
		setName(event.target.value);

		const nameIsNotExists = !event.target.value;

		if (nameIsNotExists) {
			setError({
				field: "name",
				message: "Nome é obrigatório.",
			});
		} else {
			removeError("name");
		}
	}

	function handlePriceChange(event: ChangeEvent<HTMLInputElement>) {
		setPrice(Number(event.target.value));
		const priceIsNotExists = !event.target.value;

		if (priceIsNotExists) {
			setError({
				field: "price",
				message: "Preço é obrigatório.",
			});
		} else {
			removeError("price");
		}
	}

	function handleDescriptionChange(event: ChangeEvent<HTMLTextAreaElement>) {
		setDescription(event.currentTarget.value);
	}

	function handleCategoryChange(event: ChangeEvent<HTMLInputElement>) {
		setCategory(event.currentTarget.value);

		const categoryIsNotExists = !event.target.value;

		if (categoryIsNotExists) {
			setError({
				field: "category",
				message: "Categoria é obrigatório.",
			});
		} else {
			removeError("category");
		}
	}

	async function handleCreateProduct(event: FormEvent) {
		event?.preventDefault();

		await onSubmit({
			name,
			price,
			description,
			category,
		});
	}

	return {
		handleCreateProduct,
		handleNameChange,
		handlePriceChange,
		handleDescriptionChange,
		handleCategoryChange,
		getErrorMessageByFieldName,
		name,
		price,
		description,
		category,
	};
}
