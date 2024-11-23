package routes

import (
	controller "api/controller/config"
	"net/http"

	"github.com/gin-gonic/gin"
)

func ProductRoutes(server *gin.Engine) {
	server.GET("/products", func(ctx *gin.Context) {
		ctx.JSON(http.StatusOK, gin.H{
			"message": "ok",
		})
	})
	
	server.GET("/products/:id", func(ctx *gin.Context) {
		ctx.JSON(http.StatusOK, gin.H{
			"message": "ok",
		})
	})
	
	server.POST("/product", controller.InitializedCreateProductController().CreateProduct)
	
	server.PUT("/products/:id", func(ctx *gin.Context) {
		ctx.JSON(http.StatusOK, gin.H{
			"message": "ok",
		})
	})
	
	server.DELETE("/products/:id", func(ctx *gin.Context) {
		ctx.JSON(http.StatusOK, gin.H{
			"message": "ok",
		})
	})
}