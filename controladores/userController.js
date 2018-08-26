var controler={}
var bcrtpt=require("bcryptjs");

var mysql= require ("mysql");


module.exports = {

    getnewuser : function(req, res, next){
        return res.render("public/newuser");
    },
    postnewuser: function(req, res, next){
        console.log(req.body());
        var salt= bcrypt.genSaltSync(10);
        var password= bcrtpt.hashSync(req.body.contrasena, salt);

        var user={
            correo: req.body.correo,
            nombre: req.body.nombre,
            contrasena: contrasena
        }

        var config= require("../database/config");

        var db= mysql.createConnection(config);
        db.connect();
        db.query("INSERT INTO usuario SET ?", user, function(err, rows, fileds){
            
            if (err) throw err;

            db.end();
        });
        req.flash("informacion","Se ha registrado correctamente, puede iniciar sesiòn")
        return res.redirect("/login");
    },

    getlogin: function(req,res,next){
        return res.render("public/login", {messages: req.flash("informacion"), authmessage :req.flash("authmessage")});

    },

logout: function(req, res, next){
    req.logout();
    res.redirect("/homeeditor");
},

getperfil :  function( req, res, next){
    res.render("perfil", {
        isAutenticated: req.isAutenticated(),
        usuario: req.user
    });
}


}