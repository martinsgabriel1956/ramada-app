package usecase

import "api/repository"

type DeleteProductUseCase struct {
	productRepository repository.ProductRepository
}

func NewDeleteProductUseCase(productRepository repository.ProductRepository) *DeleteProductUseCase {
	return &DeleteProductUseCase{
		productRepository: productRepository,
	}
}

func (pu *DeleteProductUseCase) Handle(productId string) error {
	return pu.productRepository.DeleteProduct(productId)
}