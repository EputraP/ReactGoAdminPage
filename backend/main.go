package main

import (
	"github.com/EputraP/GoCRUD/controllers"
	"github.com/EputraP/GoCRUD/initializers"
	"github.com/gin-gonic/gin"
)

func init() {
	initializers.LoadENVVariables()
	initializers.ConnectToDB()
}

func main() {
	r := gin.Default()
	r.POST("/post", controllers.PostsCreate)
	r.PUT("/post/:id", controllers.PostsUpdate)
	r.GET("/post", controllers.PostsIndex)
	r.GET("/post/:id", controllers.PostsShow)
	r.DELETE("/post/:id", controllers.PostsDelete)
	r.GET("brand", controllers.BrandCreate)
	r.Run()
}
