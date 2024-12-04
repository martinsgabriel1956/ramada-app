import { Head, Link } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";
import { ProductForm } from "./components/product-form";
import { useCreateProduct } from "./useCreateProduct";

export default function CreateProduct() {
	const { handleSubmit } = useCreateProduct();

	return (
		<>
			<Head title="Criar Produto" />
			<div className="relative sm:flex sm:justify-center sm:items-center flex-col min-h-screen bg-dots-darker bg-center bg-gray-900 dark:bg-dots-lighter dark:bg-gray-900 px-72">
				<div className="relative w-full flex items-center justify-center">
					<Link href="/" className="absolute left-0 top-0 text-sky-50">
						<ArrowLeft
							size={48}
						/>
					</Link>
					<h1 className="text-sky-100 font-bold text-6xl mb-12">Criar produto</h1>
				</div>

				<ProductForm
					onSubmit={handleSubmit}
				/>
			</div>
		</>
	)
}
