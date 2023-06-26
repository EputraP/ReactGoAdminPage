package controllers

import (
	"github.com/EputraP/GoCRUD/initializers"
	"github.com/EputraP/GoCRUD/models"
	"github.com/gin-gonic/gin"
)

func PostsCreate(c *gin.Context) {

	var body struct {
		ID    uint
		Body  string
		Title string
	}

	c.Bind(&body)

	post := models.Post{ID: body.ID, Title: body.Title, Body: body.Body}

	result := initializers.DB.Create(&post)

	if result.Error != nil {
		c.Status(400)
		return
	}

	c.JSON(200, gin.H{
		"post": post,
	})
}

func PostsIndex(c *gin.Context) {
	var posts []models.Post
	result := initializers.DB.Find(&posts)

	if result.Error != nil {
		c.Status(400)
		return
	}

	c.JSON(200, gin.H{
		"posts": posts,
	})
}

func PostsShow(c *gin.Context) {

	id := c.Param("id")

	var post models.Post
	result := initializers.DB.First(&post, id)

	if result.Error != nil {
		c.Status(400)
		return
	}

	c.JSON(200, gin.H{
		"post": post,
	})
}

func PostsUpdate(c *gin.Context) {

	id := c.Param("id")

	var body struct {
		ID    uint
		Body  string
		Title string
	}

	c.Bind(&body)

	var post models.Post
	initializers.DB.First(&post, id)

	result := initializers.DB.Model(&post).Updates(models.Post{
		ID:    body.ID,
		Title: body.Title,
		Body:  body.Body,
	})

	if result.Error != nil {
		c.Status(400)
		return
	}

	c.JSON(200, gin.H{
		"post": post,
	})
}

func PostsDelete(c *gin.Context) {

	id := c.Param("id")

	result := initializers.DB.Delete(&models.Post{}, id)

	if result.Error != nil {
		c.Status(400)
		return
	}

	c.Status(200)
}
