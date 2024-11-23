package config

import (
	"api/controller"
	"api/database"
	"api/repository"
	usecase "api/usecase/product"
)

func InitializedCreateProductController() *controller.ProductController {
	productRepository := repository.NewProductRepository(database.ConnectDB())
	createProductUseCase := usecase.NewCreateProductUseCase(*productRepository)
	productController := controller.NewProductController(*createProductUseCase)

	return productController
}