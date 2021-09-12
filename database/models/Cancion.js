module.exports = function(sequelize, dataTypes) {
    
    let alias = "Cancion";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true        
        },
        titulo: {
            type: dataTypes.STRING
        },
        duracion: {
            type: dataTypes.STRING
        },
        genero_id: {
            type: dataTypes.INTEGER
        },
        artista_id:{
            type: dataTypes.INTEGER
        },
        album_id:{
            type: dataTypes.INTEGER
        }


    }


    let config = {
        tableName: "canciones",
        timestamps: false
    }
    
    
    let Cancion = sequelize.define(alias, cols, config);

    Cancion.associate = function(models) {
        Cancion.belongsTo(models.Artista,{
            as:"artista",
            foreingKey:"artista_id"
        });
        Cancion.belongsTo(models.Genero,{
            as:"genero",
            foreingKey:"genero_id"
        });
        Cancion.belongsTo(models.Album,{
            as:"album",
            foreingKey:"album_id"
        });
    }

    return Cancion
}