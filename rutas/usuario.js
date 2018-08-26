var express= require("express");
var router = express.Router();
var passport= require("passport");

var controler = require("../controladores/userController");

/* intentando registrar sin autenticar
router.get("/", controler.list);
router.post("/add", controler.guardar);
*/


router.get("/newuser", controler.userController.getnewuser);
router.post("/newuser", controler.userController.postnewuser);
router.post("/login", controler.userController.getlogin);
router.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
}));
router.get("/homeeditor", controler.userController.logout);
router.get("/perfil", controler.userController.getperfil);

/*
var controllers= require(".././controllers")
router.get("/index", controllers.homeControlle.index);
*/

module.exports = router;