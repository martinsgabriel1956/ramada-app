package usecase

import (
	"api/model"
	"api/repository"
)

type ListProductsUseCase struct {
	repository repository.ProductRepository
}

func NewListProductsUseCase(repository repository.ProductRepository) *ListProductsUseCase {
	return &ListProductsUseCase{
		repository: repository,
	}
}

func (pu *ListProductsUseCase) Handle() ([]model.Product, error) {
	return pu.repository.ListProducts()
}