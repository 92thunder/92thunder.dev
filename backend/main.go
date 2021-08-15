package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func getPosts(c echo.Context) error {
	return c.JSON(http.StatusOK, GetPosts())
}

func getPost(c echo.Context) error {
	p, err := GetPost(c.Param("id"))
	if err != nil {
		if err.Error() == "none" {
			return c.JSON(http.StatusNotFound, nil)
		}
	}
	return c.JSON(http.StatusOK, p)
}

func savePost(c echo.Context) error {
	p := new(SavePostRequest)
	if err := c.Bind(p); err != nil {
		return err
	}
	post, err := SavePost(p)
	if err != nil {
		return c.JSON(http.StatusBadRequest, err)
	}
	return c.JSON(http.StatusOK, post)
}

func main() {
	InitDB()
	defer db.Close()

	// Echo instance
	e := echo.New()

	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	// Routes
	e.GET("/posts", getPosts)
	e.GET("/posts/:id", getPost)
	// TODO: 認証する
	// e.POST("/posts", savePost)

	// Start server
	e.Logger.Fatal(e.Start(":1323"))
}
