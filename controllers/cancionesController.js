let db = require("../database/models")

let cancionesController = {
    lista: function(req, res){
        db.Cancion.findAll()
        .then(canciones => {
            return res.json({
                total: canciones.length,
                data: canciones,
                status: 200
            })
        });
    },
    detalle: function(req,res){
        db.Cancion.findByPK(req.params.id)
        .then(cancion =>{
            return res.json({
                data: cancion,
                status: 200
            })
        });
    },
    crear: function(req,res){
        db.Cancion
        .create(req.body)
        .then(cancion => {
            return res.json({
                data: cancion,
                status: 200 
            })
        });

    },
    editar: function(req,res){
        db.Cancion.findByPK(req.params.id)
        .update({
            titulo: req.body.titulo,
            duracion: req.body.duracion,
            album_id: req.body.album_id,
            genero_id: req.body.genero_id,
            artista_id: req.body.artista_id
        });
    },
    eliminar: function(req,res){
        db.Cancion.destroy({
            where: {
                id: req.params.id
            }
        })
        
    }
}

module.exports = cancionesController