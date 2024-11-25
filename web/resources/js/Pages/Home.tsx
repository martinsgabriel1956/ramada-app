import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table';
import { Button } from '@/Components/ui/button';
import { Head } from '@inertiajs/react';
import { useHome } from './useHome';
import { Edit } from 'lucide-react';
import { DeleteProductModal } from '@/Components/modal/delete';

export default function Home() {
	const { products, handleCloseDeleteProductModal, isOpenDeleteModal } = useHome();

	return (
		<>
			<Head title="Home" />
			<div className="relative sm:flex sm:justify-center sm:items-center flex-col min-h-screen bg-dots-darker bg-center bg-gray-900 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white px-72">
				<h1 className='text-sky-100 font-bold text-6xl mb-12'>Meus Produtos</h1>

				<Table>
					<TableHeader
						className='bg-sky-600 rounded'
					>
						<TableRow className=''>
							<TableHead className='text-white text-lg font-extrabold'>Nome</TableHead>
							<TableHead className='text-white text-lg font-extrabold'>Preço</TableHead>
							<TableHead className='text-white text-lg font-extrabold'>Categoria</TableHead>
							<TableHead className='text-white text-lg font-extrabold'>Descrição</TableHead>
							<TableHead />
						</TableRow>
					</TableHeader>
					<TableBody
						className='bg-gray-700'
					>
						{products.map(product => (
							<TableRow key={product.ID}>
								<TableCell className='text-white font-semibold text-base'>
									{product.name}
								</TableCell>
								<TableCell className='text-white font-semibold text-base'>
									{new Intl.NumberFormat('pt-BR', {
										style: "currency",
										currency: "BRL"
									}).format(product.price)}
								</TableCell>
								<TableCell className='text-white font-semibold text-base'>
									{product.category}
								</TableCell>
								<TableCell className='text-white font-semibold text-base'>
									{product.description !== "" ? product.description : "-"}
								</TableCell>
								<TableCell className=''>
									<Button variant="outline" size="icon" className='bg-transparent text-white border-none' >
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
			</div >
		</>
	);
}
