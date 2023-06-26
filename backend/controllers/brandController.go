package controllers

import (
	"github.com/gin-gonic/gin"
)

func BrandCreate(c *gin.Context) {

	var body struct {
		Name string
	}

	c.JSON(200, gin.H{
		"message": "gets",
	})
}
