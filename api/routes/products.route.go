package routes

import (
	controller "api/controller/config"
	"net/http"

	"github.com/gin-gonic/gin"
)

func ProductRoutes(server *gin.Engine) {
	server.GET("/products", controller.InitializedProductController().ListProducts)
	server.GET("/products/:id", controller.InitializedProductController().ListProductById)
	server.POST("/product", controller.InitializedProductController().CreateProduct)
	server.PUT("/products/:id", controller.InitializedProductController().UpdateProduct)
	
	server.DELETE("/products/:id", func(ctx *gin.Context) {
		ctx.JSON(http.StatusOK, gin.H{
			"message": "ok",
		})
	})
}