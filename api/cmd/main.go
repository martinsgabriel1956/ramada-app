package main

import (
	"api/database"
	"api/pkg"
	"api/routes"
	"log"

	"github.com/gin-contrib/cors"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
    log.Fatal("Error loading .env file")
  }

	corsConfig := cors.Config{
		AllowOrigins: []string{"http://localhost:5173"},
		AllowMethods: []string{"GET", "POST", "PUT", "DELETE"},
		AllowHeaders: []string{"Content-Type"},
		AllowCredentials: true,
	}

	database.ConnectDB()
	server := pkg.Server()
	server.Use(cors.New(corsConfig))
	routes.Route(server);
	server.Run(":8080")
}