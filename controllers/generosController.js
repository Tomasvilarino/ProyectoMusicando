let db = require("../database/models");

let generosController = {
    // Devolver la lista de generos con sus canciones en json
    lista: function(req, res){
        cancionesPorGeneros(req, res);
        
    }


};

function generos(){
    return new Promise((respuesta) =>{
        db.Genero.findAll({
            attributes: 
            [
                'id', 'name'
            ],
            raw: true
            
            }).then(genero => { 
               console.log(genero);
               respuesta(genero);
            });
    })
    
}

function cancionesPorId(genero){
    return new Promise((respuesta) =>{
        db.Cancion.findAll({
            attributes: 
            [
                'id', 'titulo', 'duracion', 'genero_id', 'artista_id', 'album_id'
            ],
            where: {genero_id: genero.id},
            raw: true
            
            }).then(canciones => { 
               console.log(canciones);
               var Return = '"' + genero.name + '":' + JSON.stringify(canciones) + ',';  
               respuesta(Return);
            });
    })
    
}

async function cancionesPorGeneros(req, res){
    var genero = await generos();
    var respuesta = "{";
    for(var value of genero){
        respuesta += await cancionesPorId(value);
    }
    respuesta = respuesta.slice(0,-1) + '}';
    respuesta = JSON.parse(respuesta);

    console.log(respuesta);
    
    return res.json({
        total: respuesta.length,
        data: respuesta,
        status: 200
    })
}
        


module.exports = generosController;