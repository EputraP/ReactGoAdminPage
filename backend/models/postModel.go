package models

import "gorm.io/gorm"

type Post struct {
	ID uint `gorm:"primarykey"`
	gorm.Model
	Title string
	Body  string
}
