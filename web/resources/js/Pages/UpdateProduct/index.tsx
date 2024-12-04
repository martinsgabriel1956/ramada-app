import { ProductForm } from "@/Components/product-form";
import { Head, Link } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";
import { useUpdateProduct } from "./useUpdateProduct";

export default function CreateProduct() {
	const { contactName, handleSubmit, productFormRef } = useUpdateProduct();

	return (
		<>
			<Head title="Atualizar Produto" />
			<div className="relative sm:flex sm:justify-center sm:items-center flex-col min-h-screen bg-dots-darker bg-center bg-gray-900 dark:bg-dots-lighter dark:bg-gray-900 px-72">
				<div className="relative w-full flex items-center justify-center">
					<Link href="/" className="absolute left-0 top-0 text-sky-50">
						<ArrowLeft size={48} />
					</Link>
					<h1 className="text-sky-100 font-bold text-6xl mb-12">
						Produto {contactName}
					</h1>
				</div>

				<ProductForm
					onSubmit={handleSubmit}
					ref={productFormRef}
					submitText="Atualizar"
				/>
			</div>
		</>
	);
}
