let db = require("../database/models");

let cancionesController = {
    // Devolver la lista de canciones en json
    lista: function(req, res){
        db.Cancion.findAll({
            attributes: [
                'id', 'titulo', 'duracion', 'genero_id', 'artista_id', 'album_id']
            
            })
        .then(canciones => {
            console.log("Lista ok");
            return res.json({
                total: canciones.length,
                data: canciones,
                status: 200
            })
        });
    },
    // Devulve una fila de una tabla
    detalle: function(req,res){
        db.Cancion.findByPk(req.params.id,{
            attributes: [
                'id', "titulo", "duracion",'genero_id', 'artista_id', 'album_id']

         })
        .then(cancion =>{
            console.log("Detalle ok");
            return res.json({
                data: cancion,
                status: 200
            });
        });
    },

    // Insertar una fila en la tabla
    crear: function(req,res){
        db.Cancion
        .create(req.body)
        .then(cancion => {
            console.log("Crear ok");
            return res.json({
                data: cancion,
                status: 200 
            });
        });

    },
    editar: function(req,res){
        db.Cancion.update({
            titulo: req.body.titulo,
            duracion: req.body.duracion,
            album_id: req.body.album_id,
            genero_id: req.body.genero_id,
            artista_id: req.body.artista_id
        },
        {
            where: {
                id: req.params.id
            }
        }
        );
        console.log(req.params.id)
    },
    // Elimina una fila en la tabla
    eliminar: function(req,res){
        db.Cancion.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(cancion => {
            return res.json({
                data: cancion,
                status: 200 
            });
        })
        console.log("Eliminar ok");
        
    }

};

module.exports = cancionesController;