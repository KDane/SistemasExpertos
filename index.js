var express = require("express");
var path = require("path");
var morgan = require("morgan");
var mysql = require("mysql");
var bodyParser= require("body-parser");
var logger=require("morgan");
var cookieParser = require("cookie-parser");
var flash= require("connect-flash");
var session= require("express-session");
var passport= require("passport");
require("./passport/passport")(passport);


//var myConnection= require("express-myconnection");


var app= express();

app.use(cookieParser());




//Se importan las rutas
var customerRoutes= require("./rutas/usuario");


app.use(express.static("public"));

app.listen(3000);
console.log("Servidor iniciado");

//app.set("public", path.join(__dirname, "public"));

//Midlewares
app.use(passport.initialize());
app.use(passport.session());
app.use(session({
    secret: "secret",
    resaeave: false,
    saveUninitialized:false
}));
app.use(flash());
app.use(logger("dev"));
app.use(morgan ("dev"));
app.use(myConnection(mysql , {
    host: "localhost",
    user: "root",
    password:"",
    port: 3306,
    database: "bd_proyecto"
}, "single"
));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//Routes

app.use("/", customerRoutes);



//Estatico

app.use(express.static(path.join(__dirname, "public")));



app.use(function(req, res, next){
    var err= new Error("Not Found");
    err.satatus= 404;
    next(err);
});