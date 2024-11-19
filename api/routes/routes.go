package routes

import (
	"github.com/gin-gonic/gin"
)

func Route(server *gin.Engine) {
	ProductRoutes(server)

	server.GET("/health", func(ctx *gin.Context) {
		ctx.JSON(200, gin.H{
			"message": "ok",
		})
	})
}