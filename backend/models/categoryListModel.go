package models

import (
	"gorm.io/gorm"
)

type CategoryList struct {
	CategoryId   uint   `gorm:"primarykey"`
	CategoryName string `gorm:"type:varchar(255);not null"`
	gorm.Model
}
