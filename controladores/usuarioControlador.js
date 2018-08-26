var controler={};
/*
controler.list= (req, res) =>{
    req.getConnection((err, conn) => {
        conn.query('Select * From usuario', (err, usuarios) =>{
            if (err){
                res.json(err);
            }
            
            res.render("usuarios", {
                data: customers
            });
        });

    });
};

controler.guardar=(req, res) =>{
   const data= req.body;

   req.getConnection((err, conn) => {
       conn.query('INSERT INTO usuario set ?', [data], (err, rows) =>{
           console.log(rows);
           res.send("works")

       });

})
};
*/

/*
var fs= require("fs");
var path= require("path");

var files= fs.readdirSync(__dirname);

files.foreach(function(file){
    var fileName = path.basename(file, ".js");

    if (fileName !== "usuarioControlador"){
    exports[fileName]= require("./" + fileName)
    }

});




*/







module.exports= controler;