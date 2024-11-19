package main

import (
	"api/lib"
	"log"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
    log.Fatal("Error loading .env file")
  }

	server := lib.Server()
	server.Run(":8080")
}