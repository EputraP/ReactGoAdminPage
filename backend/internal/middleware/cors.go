package middleware

import (
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func CORS() gin.HandlerFunc {
	return cors.New(cors.Config{
		AllowOrigins:     []string{"*"},
		AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Access-Control-Allow-Headers", "access-control-allow-origin, access-control-allow-headers", "Content-Type", "X-XSRF-TOKEN", "Accept", "Origin", "X-Requested-With", "Authorization", "OtpToken", "Stepup"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	})
}

// allow origins = 	itu untuk domain siapa aja yang bisa akses server
// allow methods = 	itu menentukan HTTP method mana saja yang diperbolehkan masuk
// 					dianjurkan untuk selalu memasukkan method OPTIONS (dibutuhkan ketika preflight request)
// allow headers =	menentukan key header mana saja yang diperbolehkan di-dalam request
// 					- Content-Type header 	=	provides the client with the actual content type of the returned content
//					- accept 				=	The Accept request HTTP header indicates which content types, expressed as MIME types indicates the nature and format of a document, file, or assortment of bytes (images/png, application/javascript, audio/wav)),
//												the client is able to understand. The server uses content negotiation to select one of the proposals and informs the client of the choice with the Content-Type response header
//					- Authorization			= 	The HTTP Authorization request header can be used to provide credentials that authenticate a user agent with a server, allowing access to a protected resource.
// 					- OtpToken				=	OtpToken
//					- X-XSRF-TOKEN			=
// allow credential = The Access-Control-Allow-Credentials response header tells browsers whether to expose the response to the frontend JavaScript code when the request's credentials mode (Request.credentials) is include.
// max age		 = The Age header contains the time in seconds the object was in a proxy cache
