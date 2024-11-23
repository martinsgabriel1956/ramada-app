package model

import (
	"gorm.io/gorm"
)

type Product struct {
	gorm.Model
	Name      	string 	`json:"name" validate:"required"`
	Description string	`json:"description"`
	Price     	float64	`json:"price" validate:"required"`
	Category   	string 	`json:"category" validate:"required"`
}
