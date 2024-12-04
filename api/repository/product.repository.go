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
	result := p.db.Find(&products)

	if result.Error != nil {
		return nil, result.Error
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

func (p *ProductRepository) UpdateProduct(productId string, productBody model.Product) (model.Product, error) {
	var product model.Product

	findProductErr := p.db.First(&product, "id = ?", productId).Error
	
	if findProductErr != nil {
		fmt.Println(findProductErr)
		return model.Product{}, findProductErr
	}

	updateProductErr := p.db.Model(product).Updates(productBody).Error

	if updateProductErr != nil {
		fmt.Println(updateProductErr)
		return model.Product{}, updateProductErr
	}

	return product, nil
}

func (p *ProductRepository) DeleteProduct(productId string) error {
	var product model.Product

	findProductErr := p.db.First(&product, "id = ?", productId).Error

	if findProductErr != nil {
		fmt.Println(findProductErr)
		return findProductErr
	}

	deleteProductErr := p.db.Unscoped().Delete(&product).Error

	if deleteProductErr != nil {
		fmt.Println(deleteProductErr)
		return deleteProductErr
	}

	return nil
}