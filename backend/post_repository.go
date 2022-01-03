package main

import (
	"errors"
	"fmt"
	"log"

	_ "github.com/go-sql-driver/mysql"
	"github.com/jmoiron/sqlx"
)

type Post struct {
	Id          int64  `json:"id" db:"id"`
	Title       string `json:"title" db:"title"`
	Body        string `json:"body" db:"body"`
	Published   bool   `json:"published" db:"published"`
	PublishedAt string `json:"published_at" db:"published_at"`
}

var db *sqlx.DB

func InitDB() {
	var err error
	db, err = sqlx.Open("mysql", "root@/blog?parseTime=true")
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

func GetPost(id string) (*Post, error) {
	post := Post{}
	err := db.Get(&post, "SELECT * FROM post WHERE id = ?", id)
	if err != nil {
		return nil, errors.New("none")
	}
	return &post, nil
}

func SavePost(p *Post) (*Post, error) {
	db.Begin()
	_, err := GetPost(string(p.Id))
	if err != nil {

		result, err := db.Exec("INSERT INTO post (title, body, published, published_at) VALUES(?,?,?,?)", p.Title, p.Body, p.Published, p.PublishedAt)
		if err != nil {
			fmt.Println(err)
			return nil, err
		}
		var post = new(Post)
		post.Id, _ = result.LastInsertId()
		post.Title = p.Title
		post.Body = p.Body
		post.Published = p.Published
		post.PublishedAt = p.PublishedAt

		return post, nil
	} else {
		_, err := db.Exec("UPDATE post SET (title, body, published, published_at) = (?,?,?,?) WHERE id = ?", p.Title, p.Body, p.Published, p.PublishedAt, p.Id)
		if err != nil {
			fmt.Println(err)
			return nil, err
		}
		var post = new(Post)
		post.Id = p.Id
		post.Title = p.Title
		post.Body = p.Body
		post.Published = p.Published
		post.PublishedAt = p.PublishedAt

		return post, nil
	}
}
