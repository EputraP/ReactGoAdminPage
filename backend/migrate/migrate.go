package main

import (
	"github.com/EputraP/GoCRUD/initializers"
	"github.com/EputraP/GoCRUD/models"
)

// create postgres table
func init() {
	initializers.LoadENVVariables()
	initializers.ConnectToDB()
}

func main() {
	initializers.DB.AutoMigrate(&models.Post{})
	initializers.DB.AutoMigrate(&models.UserList{})
	initializers.DB.AutoMigrate(&models.CategoryList{})
	initializers.DB.AutoMigrate(&models.BrandList{})
	initializers.DB.AutoMigrate(&models.ProductList{})
	// initializers.DB.Create(&models.CategoryList{CategoryName: "test"})
	// initializers.DB.Create(&models.UserList{Username: "D42", Password: "D42"})
	// initializers.DB.Create(&models.UserList{Username: "D43", Password: "D43"})
}
