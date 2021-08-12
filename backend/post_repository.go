package main

import (
	"fmt"
	"log"

	_ "github.com/go-sql-driver/mysql"
	"github.com/jmoiron/sqlx"
)

type Post struct {
	Id          int    `json:"id" db:"id"`
	Title       string `json:"title" db:"title"`
	Body        string `json:"body" db:"body"`
	Published   bool   `json:"published" db:"published"`
	PublishedAt string `json:"published_at" db:"published_at"`
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
	err := db.Select(&posts, "SELECT * FROM post")
	if err != nil {
		fmt.Println(err)
	}
	return posts
}

func GetPost(id string) Post {
	post := Post{}
	err := db.Get(&post, "SELECT * FROM post WHERE id = ?", id)
	if err != nil {
		fmt.Println(err)
	}
	return post
}

func SavePost(post *Post) {
	tx, _ := db.Begin()
	_, err := tx.Exec("INSERT INTO post (id, title, body, published, published_at) VALUES(?,?,?,?,?)", post.Id, post.Title, post.Body, post.Published, post.PublishedAt)
	if err != nil {
		fmt.Println(err)
	}
	if err := tx.Commit(); err != nil {
		fmt.Println("failed to commit tx: %v", err)
	}
}
