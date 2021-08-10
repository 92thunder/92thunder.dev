package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func getPosts(c echo.Context) error {
	return c.JSON(http.StatusOK, GetPosts())
}

func savePost(c echo.Context) error {
	p := new(Post)
	if err := c.Bind(p); err != nil {
		return err
	}
	SavePost(p)
	return c.JSON(http.StatusOK, p)
}

func main() {
	InitDB()

	// Echo instance
	e := echo.New()

	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	// Routes
	e.GET("/posts", getPosts)
	e.POST("/posts", savePost)

	// Start server
	e.Logger.Fatal(e.Start(":1323"))
}
