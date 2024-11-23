package model

import (
	"time"

	"gorm.io/gorm"
)

type Product struct {
	gorm.Model
	Name      	string 	`json:"name" validate:"required"`
	Description string	
	Price     	float64	`json:"price" validate:"required"`
	Category   	string 	`json:"category" validate:"required"`
	CreatedAt time.Time
	UpdatedAt time.Time
}
