package main

import (
	"fmt"
	"log"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	srv := gin.Default()
	err := godotenv.Load("../../.env")
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	port := os.Getenv("PORT")
	if err := srv.Run(fmt.Sprintf(":%s", port)); err != nil {
		log.Println("Error running gin server: ", err)
		log.Fatalln("Error running gin server: ", err)
	}

}
