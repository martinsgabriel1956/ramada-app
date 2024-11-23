package main

import (
	"api/database"
	"api/pkg"
	"api/routes"
	"log"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
    log.Fatal("Error loading .env file")
  }

	database.ConnectDB()
	server := pkg.Server()
	routes.Route(server);
	server.Run(":8080")
}