package main

import (
	"log"

	_ "github.com/go-sql-driver/mysql"
	"github.com/jmoiron/sqlx"
)

type Post struct {
	Id    string `json:"id"`
	Title string `json:"title"`
	Body  string `json:"body"`
}

var db *sqlx.DB

func InitDB() {
	var err error
	db, err = sqlx.Open("mysql", "root@/blog")
	if err != nil {
		log.Fatal(err)
	}
}

func GetPosts() []Post {
	posts := []Post{}
	db.Select(&posts, "SELECT * FROM posts")
	return posts
}
