import axios from "axios";

interface UseDeleteProductModalProps {
	productId: string;
	onClose(): void;
}

export function useDeleteProductModal({
	productId,
	onClose,
}: UseDeleteProductModalProps) {
	async function handleDeleteProduct() {
		try {
			await axios.delete(`/api/products/${productId}`);
			onClose();
		} catch (error) {
			console.log(error);
		}
	}

	return {
		handleDeleteProduct,
	};
}
