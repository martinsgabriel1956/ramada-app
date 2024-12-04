import { DeleteProductModal } from "@/Components/modal/delete";
import { Button } from "@/Components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/Components/ui/table";
import { formatCurrency } from "@/utils/formatCurrency";
import { Head, Link } from "@inertiajs/react";
import { Edit } from "lucide-react";
import { useHome } from "./useHome";

export default function Home() {
	const {
		products,
		handleCloseDeleteProductModal,
		isOpenDeleteModal,
		handleUpdateProduct,
	} = useHome();

	return (
		<>
			<Head title="Home" />
			<div className="relative sm:flex sm:justify-center sm:items-center flex-col min-h-screen bg-dots-darker bg-center bg-gray-900 dark:bg-dots-lighter dark:bg-gray-900 px-72">
				<div className="relative w-full flex items-center justify-center">
					<h1 className="text-sky-100 font-bold text-6xl mb-12">
						Ramada Produtos
					</h1>
					<Link
						href="/create-product"
						className="text-white font-normal text-xl absolute right-0 top-4 border px-4 py-2 rounded-lg border-sky-500 hover:bg-sky-500 transition ease-in delay-50"
					>
						Criar produto
					</Link>
				</div>

				{products.length >= 1 && (
					<Table>
						<TableHeader className="bg-sky-600 rounded">
							<TableRow className="">
								<TableHead className="text-white text-lg font-extrabold">
									Nome
								</TableHead>
								<TableHead className="text-white text-lg font-extrabold">
									Preço
								</TableHead>
								<TableHead className="text-white text-lg font-extrabold">
									Categoria
								</TableHead>
								<TableHead className="text-white text-lg font-extrabold">
									Descrição
								</TableHead>
								<TableHead />
							</TableRow>
						</TableHeader>
						<TableBody className="bg-gray-700">
							{products.map((product) => (
								<TableRow key={product.ID}>
									<TableCell className="text-white font-semibold text-base">
										{product.name}
									</TableCell>
									<TableCell className="text-white font-semibold text-base">
										{formatCurrency({
											value: product.price,
										})}
									</TableCell>
									<TableCell className="text-white font-semibold text-base">
										{product.category}
									</TableCell>
									<TableCell className="text-white font-semibold text-base">
										{product.description !== "" ? product.description : "-"}
									</TableCell>
									<TableCell className="">
										<Button
											variant="outline"
											size="icon"
											className="bg-transparent text-white border-none"
											onClick={() => handleUpdateProduct(product.ID)}
										>
											<Edit />
										</Button>
										<DeleteProductModal
											isOpen={isOpenDeleteModal}
											onClose={handleCloseDeleteProductModal}
											productId={product.ID}
										/>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				)}

				{products.length <= 0 && (
					<div className="text-center">
						<h1 className="text-white text-2xl">
							Não existe produtos cadastrados
						</h1>
						<span className="text-xl text-white mt-2 inline-flex">
							Basta clicar no botão{" "}
							<strong className="ml-1 text-sky-500">criar produto</strong>.
						</span>
					</div>
				)}
			</div>
		</>
	);
}
