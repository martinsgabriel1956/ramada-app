package config

import (
	"api/controller"
	"api/database"
	"api/repository"
	usecase "api/usecase/product"
)

func InitializedProductController() *controller.ProductController {
	productRepository := repository.NewProductRepository(database.ConnectDB())
	createProductUseCase := usecase.NewCreateProductUseCase(*productRepository)
	listProductsUseCase := usecase.NewListProductsUseCase(*productRepository)
	listProductUseCase := usecase.NewListProductUseCase(*productRepository)
	updateProductUseCase := usecase.NewUpdateProductUseCase(*productRepository)
	deleteProductUseCase := usecase.NewDeleteProductUseCase(*productRepository)
	productController := controller.NewProductController(*createProductUseCase, *listProductsUseCase, *listProductUseCase, *updateProductUseCase, *deleteProductUseCase)

	return productController
}
