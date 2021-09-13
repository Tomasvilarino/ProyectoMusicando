let db = require("../database/models");

/*
let generosController = {
    // Devolver la lista de generos con sus canciones en json
    lista: function(req, res){
        db.Genero.findAll({
            attributes: [
                'id'], raw: true
            
            })
        .forEach(function  (genero){ 
            db.Cancion.findAll({
                attributes: [
                    'id', "titulo", "duracion",'genero_id', 'artista_id', 'album_id'], where: {genero:genero_id}
            }).then(cancion => {
                return res.json({
                    data: genero,
                    data2: cancion,
                    status: 200
                });
            })
        })
    }

};
*/
let generosController = {
    // Devolver la lista de generos con sus canciones en json
    lista: function(req, res){
        db.Genero.findAll({
            attributes: 
            [
                'id', 'name'
            ]
            
            }).then(genero => {
                var jason = JSON.parse(genero); 
               console.log(jason)
            });
            } 
            
                
    
            
        
    }



module.exports = generosController;