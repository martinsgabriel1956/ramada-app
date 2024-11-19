package main

import "api/lib"

func main() {
	server := lib.Server()
	server.Run(":8080")
}