package lib

import "github.com/gin-gonic/gin"

func Server() *gin.Engine {
	return gin.Default()
}