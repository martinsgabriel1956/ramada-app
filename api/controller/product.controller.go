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
	listProductUseCase  usecase.ListProductUseCase
	updateProductUseCase usecase.UpdateProductUseCase
	deleteProductUseCase usecase.DeleteProductUseCase
}

func NewProductController(create usecase.CreateProductUseCase, listAll usecase.ListProductsUseCase, listById usecase.ListProductUseCase, update usecase.UpdateProductUseCase, delete usecase.DeleteProductUseCase ) *ProductController {
	return &ProductController{
		createProductUseCase: create,
		listProductsUseCase:  listAll,
		listProductUseCase:  listById,
		updateProductUseCase: update,
		deleteProductUseCase: delete,
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

func (p *ProductController) ListProductById(ctx *gin.Context) {
	var productId = ctx.Param("id")

	product, err := p.listProductUseCase.Handle(productId)

	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, product)
}

func (p *ProductController) UpdateProduct(ctx *gin.Context) {
	var productId = ctx.Param("id")
	var product model.Product

	if err := ctx.BindJSON(&product); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	updateProduct, err := p.updateProductUseCase.Handle(productId, product)
	
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, updateProduct)
}

func (p *ProductController) DeleteProduct(ctx *gin.Context) {
	var productId = ctx.Param("id")
	err := p.deleteProductUseCase.Handle(productId)

	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"message": "Product deleted successfully"})
}