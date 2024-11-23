package pkg

import (
	"fmt"
	"os"
)

var envKeys = [5]string{
	"API_PORT",
	"MYSQL_DATABASE",
	"MYSQL_PASSWORD",
	"HOSTNAME",
	"MYSQL_ROOT_PASSWORD",
}

func debugEnv() {
	for _, key := range envKeys {
		fmt.Printf("%s: %s\n", key, os.Getenv(key))
	}
}