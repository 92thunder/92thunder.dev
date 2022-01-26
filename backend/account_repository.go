package main

import (
	"fmt"
	"log"
	"time"

	_ "github.com/go-sql-driver/mysql"
)

type Account struct {
	Secret      string `json:"secret" db:"secret"`
	Name        string `json:"name" db:"name"`
	Url         string `json:"url" db:"url"`
	FailedCount int    `json:"failedCount" db:"failed_count"`
	LockedAt    string `json:"lockedAt" db:"locked_at"`
}

func GetAccount(name string) (*Account, error) {
	account := Account{}
	err := db.Get(&account, "SELECT secret, name, url, failed_count, IFNULL(locked_at, '') as locked_at FROM account WHERE name = ?", name)
	if err != nil {
		return nil, err
	}
	return &account, nil
}

func SaveAccount(secret string, name string, url string) {
	db.Begin()
	_, err := db.Exec("INSERT INTO account (secret, name, url) VALUES(?,?,?)", secret, name, url)
	if err != nil {
		log.Fatal((err))
	}
}

func IncrementFailedCount(name string) (int, error) {
	account, getErr := GetAccount(name)
	if getErr != nil {
		return 0, getErr
	}

	_, err := db.Exec("UPDATE account SET failed_count=? WHERE name = ?", account.FailedCount+1, name)
	if err != nil {
		fmt.Println(err)
		return 0, err
	}

	return account.FailedCount + 1, nil
}

func Lock(name string) error {
	nowStr := time.Now().Format("2006-01-02 15:04:05")
	_, err := db.Exec("UPDATE account SET locked_at=?, failed_count=0 WHERE name = ?", nowStr, name)
	if err != nil {
		fmt.Println(err)
		return err
	}
	return nil
}

func UnLock(name string) error {
	_, err := db.Exec("UPDATE account SET locked_at=NULL WHERE name = ?", name)
	if err != nil {
		fmt.Println(err)
		return err
	}
	return nil
}
