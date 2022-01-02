package main

import (
	"log"
	"net/http"
	"time"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"

	"github.com/pquerna/otp/totp"
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
	// auth
	cookie, err := c.Cookie("session_id")
	if err != nil {
		log.Println(err)
		return c.JSON(http.StatusUnauthorized, err)
	}
	log.Println(cookie.Value)
	_, err2 := GetSession(cookie.Value)
	if err2 != nil {
		log.Println(err2)
		return c.JSON(http.StatusUnauthorized, err2)
	}

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

type SignInRequest struct {
	Passcode string `json:"passcode"`
}

func signIn(c echo.Context) error {
	req := new(SignInRequest)
	if err := c.Bind(req); err != nil {
		return err
	}

	secret, err := GetSecret()
	valid := totp.Validate(req.Passcode, secret)
	if valid {
		u, err := SaveSession()
		if err != nil {
			log.Fatal((err))
		}
		cookie := new(http.Cookie)
		cookie.Name = "session_id"
		cookie.Value = u
		cookie.Path = "/"
		cookie.Expires = time.Now().Add(24 * time.Hour)
		c.SetCookie(cookie)
		return c.JSON(http.StatusOK, u)
	} else {
		return c.JSON(http.StatusBadRequest, err)
	}
}

func main() {
	InitDB()
	defer db.Close()

	// Secretが無ければ生成する
	_, err := GetSecret()
	if err != nil {
		log.Println(err)
		key, err := totp.Generate(totp.GenerateOpts{
			Issuer:      "92thunder.dev",
			AccountName: "r.kunisada661@gmail.com",
		})
		if err != nil {
			log.Fatal(err)
		}
		SaveSecret(key.Secret(), key.AccountName(), key.URL())
	}

	// Echo instance
	e := echo.New()

	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	// Routes
	e.GET("/posts", getPosts)
	e.GET("/posts/:id", getPost)
	e.POST("/posts", savePost)

	e.POST("/sign_in", signIn)

	// Start server
	e.Logger.Fatal(e.Start(":1323"))
}
