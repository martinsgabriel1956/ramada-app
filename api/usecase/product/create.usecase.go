package usecase

import (
	"api/model"
	"api/repository"

	"github.com/go-playground/validator/v10"
)

type CreateProductUseCase struct {
	repository repository.ProductRepository
	validator    *validator.Validate
}

func NewCreateProductUseCase(repository repository.ProductRepository) *CreateProductUseCase {
	return &CreateProductUseCase{
		repository: repository,
		validator: validator.New(),
	}
}

func (pu *CreateProductUseCase) Handle(product model.Product) (model.Product, error) {
	if err := pu.validator.Struct(product); err != nil {
		return model.Product{}, err
	}

	return pu.repository.CreateProduct(product)
}