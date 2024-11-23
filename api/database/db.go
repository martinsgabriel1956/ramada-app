package database

import (
	"api/model"
	"fmt"
	"os"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func dsn() string {
	DB_NAME := os.Getenv("MYSQL_DATABASE")
	DB_HOST := os.Getenv("HOSTNAME")
	DB_USER := os.Getenv("MYSQL_USER")
	DB_PASS := os.Getenv("MYSQL_ROOT_PASSWORD")
	DB_PORT := os.Getenv("API_PORT")

	return fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8&parseTime=True&loc=Local", DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME)
}

func ConnectDB() *gorm.DB  {
	dsnConfig := dsn()

	db, err := gorm.Open(mysql.New(mysql.Config{
		DriverName: "mysql",
		DSN: dsnConfig,
	}), &gorm.Config{})
	
	if err != nil {
		panic("failed to connect database")
	}
	
	db.AutoMigrate(&model.Product{})

	return db
}

