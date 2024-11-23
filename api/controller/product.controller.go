package controller

import (
	"api/model"
	usecase "api/usecase/product"
	"net/http"

	"github.com/gin-gonic/gin"
)

type ProductController struct {
	createProductUseCase usecase.CreateProductUseCase
	listProductsUseCase  usecase.ListProductsUseCase
}

func NewProductController(create usecase.CreateProductUseCase, listAll usecase.ListProductsUseCase) *ProductController {
	return &ProductController{
		createProductUseCase: create,
		listProductsUseCase:  listAll,
	}
}

func (p *ProductController) ListProducts(ctx *gin.Context) {
	listProducts, err := p.listProductsUseCase.Handle()

	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, listProducts)
}

func (p *ProductController) CreateProduct(ctx *gin.Context) {
	var product model.Product

	if err := ctx.BindJSON(&product); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	createProduct, err := p.createProductUseCase.Handle(product)

	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, createProduct)
}