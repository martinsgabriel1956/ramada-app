package routes

import (
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
	
	server.POST("/products", func(ctx *gin.Context) {
		ctx.JSON(http.StatusOK, gin.H{
			"message": "ok",
		})
	})
	
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