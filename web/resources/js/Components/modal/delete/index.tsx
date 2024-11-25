import { Trash2 } from "lucide-react";
import { Button } from "../../ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../ui/dialog";
import { useDeleteProductModal } from "./useDeleteProductModal";

interface DeleteProductModalProps {
	productId: string;
	isOpen: boolean;
	onClose: () => void;
}

export function DeleteProductModal({
	productId,
	isOpen,
	onClose
}: DeleteProductModalProps) {
	const { handleDeleteProduct } = useDeleteProductModal({
		productId, onClose
	})

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogTrigger asChild>
				<Button variant="outline" size="icon" className='bg-transparent text-white border-none' >
					<Trash2 />
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className="text-xl mb-8">Tem certeza que deseja deletar o produto?</DialogTitle>
					<DialogFooter className="flex items-center justify-end">
						<Button onClick={handleDeleteProduct} variant="destructive" className="mr-2">Sim</Button>
						<DialogClose>
							<Button variant="outline">Não</Button>
						</DialogClose>
					</DialogFooter>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}
