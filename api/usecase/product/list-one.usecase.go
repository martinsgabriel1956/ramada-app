package usecase

import (
	"api/model"
	"api/repository"
)

type ListProductUseCase struct {
	repository repository.ProductRepository
}

func NewListProductUseCase(repository repository.ProductRepository) *ListProductUseCase {
	return &ListProductUseCase{
		repository: repository,
	}
}

func (pu *ListProductUseCase) Handle(productId string) (model.Product, error) {
	return pu.repository.ListProduct(productId)
}