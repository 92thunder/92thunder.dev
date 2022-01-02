package main

import (
	"errors"
	"log"

	_ "github.com/go-sql-driver/mysql"
)

type Secret struct {
	Secret string `json:"secret" db:"secret"`
	Name   string `json:"name" db:"name"`
	Url    string `json:"url" db:"url"`
}

func GetSecret() (string, error) {
	secret := Secret{}
	err := db.Get(&secret, "SELECT * FROM secret")
	if err != nil {
		return "", err
	}
	if len(secret.Secret) == 0 {
		return "", errors.New("error")
	}
	return secret.Secret, nil
}

func SaveSecret(secret string, name string, url string) {
	db.Begin()
	_, err := db.Exec("INSERT INTO secret (secret, name, url) VALUES(?,?,?)", secret, name, url)
	if err != nil {
		log.Fatal((err))
	}
}
