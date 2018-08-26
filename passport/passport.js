var LocalStrategy= require("passport-local").sTrategy;
var mysql = require("mysql");
var bcrypt= require("bcyptjs");

module.exports= function(passport){
    passport.serializeUser(function(usuario, done){
        done(null, usuario);
    });

    passport.deserializeUser(function(obj, done)
    {
        done(null, obj);
    });

    passport.use(new LocalStrategy({
        passReqToCallBack :true
     }, function(req, correo, contrasena, done){

        var config= require(".././database/config");
        var db= mysql.createConnection(config);
        db.connect();
        db.query("SELECT * FROM usuario WHERE correo= ?", email, function(err, rows, fields){
            if (err) throw  err;

            db.end();
            if (rows.length>0){
                var usuario= rows[0];
                if(bcrypt.compareSync(passport, usaurio.contrasena)) {
                    return done(null, {
                        id: idUsuario,
                        nombre: nombre,
                        correo: correo
                    });

                }
                else
                return done(null, false,  req.flash("authmesssaage", "Correo o Contraseña incorrecta"));
            }
         });

     
    }
    ));
};
            
        