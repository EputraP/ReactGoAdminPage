package models

import (
	"gorm.io/gorm"
)

type ProductList struct {
	ProductId    uint   `gorm:"primarykey"`
	BrandId      uint   `gorm:"not null"`
	CategoryId   uint   `gorm:"not null"`
	ProductCode  string `gorm:"type:varchar(50);not null"`
	ProductName  string `gorm:"type:varchar(255);not null"`
	Description  string
	Price        int  `gorm:"not null"`
	Availability bool `gorm:"not null"`
	gorm.Model
}
