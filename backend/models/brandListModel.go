package models

import (
	"gorm.io/gorm"
)

type BrandList struct {
	BrandId   uint   `gorm:"primarykey"`
	BrandName string `gorm:"type:varchar(255);not null"`
	BrandCode string `gorm:"type:varchar(50);not null"`
	gorm.Model
}
