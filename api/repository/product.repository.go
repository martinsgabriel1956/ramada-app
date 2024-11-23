package repository

import (
	"api/model"
	"fmt"

	"gorm.io/gorm"
)

type ProductRepository struct {
	db *gorm.DB
}

func NewProductRepository(db *gorm.DB) *ProductRepository {
	return &ProductRepository{
		db: db,
	}
}

func (p *ProductRepository) CreateProduct(product model.Product) (model.Product, error) {
	err := p.db.Create(&product).Error

	if err != nil {
		fmt.Println(err)
		return model.Product{}, err
	}

	return product, nil
}

func (p *ProductRepository) ListProducts() ([]model.Product, error) {
	var products []model.Product

	err := p.db.Find(&products).Error

	if err != nil {
		fmt.Println(err)
		return []model.Product{}, err
	}

	return products, nil
}

func (p *ProductRepository) ListProduct(productId string) ([]model.Product, error) {
	var products []model.Product

	err := p.db.First(&products, "id = ?", productId).Error

	if err != nil {
		fmt.Println(err)
		return []model.Product{}, err
	}
	return products, nil
}