module.exports= {

    index: function( req, res, next){
        res.render("home", {
            isAutenticated: req.isAutenticated(),
            usuario: req.user
        });
    }
}