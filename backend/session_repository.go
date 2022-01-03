package main

import (
	"log"

	"github.com/google/uuid"
)

type Session struct {
	Id string `json:"id" db:"id"`
}

func GetSession(id string) (*Session, error) {
	session := Session{}
	err := db.Get(&session, "SELECT * FROM session WHERE id = ?", id)
	if err != nil {
		return nil, err
	}
	return &session, nil
}

func SaveSession() (string, error) {
	db.Begin()
	u, err := uuid.NewRandom()
	if err != nil {
		log.Fatal((err))
	}
	db.Exec("INSERT INTO session (id) VALUES(?)", u.String())
	if err != nil {
		log.Fatal((err))
	}
	return u.String(), nil
}
