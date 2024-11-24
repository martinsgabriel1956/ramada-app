package usecase

import (
	"api/model"
	"api/repository"

	"github.com/go-playground/validator/v10"
)

type UpdateProductUseCase struct {
	repository repository.ProductRepository
	validator    *validator.Validate
}

func NewUpdateProductUseCase(repository repository.ProductRepository) *UpdateProductUseCase {
	return &UpdateProductUseCase{
		repository: repository,
		validator: validator.New(),
	}
}

func (pu *UpdateProductUseCase) Handle(productId string, product model.Product) (model.Product, error) {
	return pu.repository.UpdateProduct(productId, product)
}