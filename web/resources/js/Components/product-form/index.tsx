import { FormField } from "@/Components/form-field";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { type Ref, forwardRef } from "react";
import { useProductForm } from "./useProductForm";

type Product = {
	name: string;
	price: number;
	description: string;
	category: string;
};

type ProductFormRef = {
	setFieldsValues: (product: Product) => void;
};

type ProductFormProps = {
	onSubmit: (product: {
		name: string;
		price: number;
		description: string;
		category: string;
	}) => Promise<void>;
	submitText?: string;
};

export const ProductForm = forwardRef<ProductFormRef, ProductFormProps>(
	({ onSubmit, submitText }, ref) => {
		const {
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
		} = useProductForm({
			onSubmit,
			ref,
		});

		return (
			<div className="w-full">
				<form
					className="flex items-center flex-col gap-6"
					onSubmit={handleCreateProduct}
				>
					<FormField
						field={{
							label: "Nome",
							type: "name",
						}}
						error={getErrorMessageByFieldName("name")}
					>
						<Input
							className="w-full bg-slate-800 border-none shadow-md text-lg  mt-2 text-sky-50"
							placeholder="Digite seu nome"
							id="name"
							onChange={handleNameChange}
							value={name}
						/>
					</FormField>
					<FormField
						field={{
							label: "Preço",
							type: "price",
						}}
						error={getErrorMessageByFieldName("price")}
					>
						<Input
							id="price"
							min={0}
							className="w-full bg-slate-800 border-none shadow-md text-lg  mt-2 text-sky-50"
							type="number"
							placeholder="Digite o preço"
							onChange={handlePriceChange}
							value={price}
						/>
					</FormField>

					<FormField
						field={{
							label: "Descrição",
							type: "description",
						}}
					>
						<Textarea
							id="description"
							onChange={handleDescriptionChange}
							className="bg-slate-800 border-none shadow-md text-lg mt-2 text-gray-400 h-40 resize-none"
							placeholder="Digite uma descrição"
							value={description}
						/>
					</FormField>

					<FormField
						field={{
							label: "Categoria",
							type: "category",
						}}
						error={getErrorMessageByFieldName("category")}
					>
						<Input
							id="category"
							className="bg-slate-800 border-none shadow-md text-lg mt-2 text-gray-400"
							placeholder="Digite uma categoria"
							onChange={handleCategoryChange}
							value={category}
						/>
					</FormField>

					<Button
						type="submit"
						className="bg-sky-600 w-full py-8 text-lg font-bold mt-6 hover:bg-sky-700 transition-all delay-50 ease-in-out"
					>
						{submitText}
					</Button>
				</form>
			</div>
		);
	},
);
