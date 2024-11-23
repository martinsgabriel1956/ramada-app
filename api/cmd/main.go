package main

import (
	"api/database"
	"api/lib"
	"log"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
    log.Fatal("Error loading .env file")
  }

	database.ConnectDB()
	server := lib.Server()
	server.Run(":8080")
}