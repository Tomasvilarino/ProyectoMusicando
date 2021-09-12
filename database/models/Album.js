module.exports = function(sequelize, dataTypes) {
    
    let alias = "Album";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true         
        },
        nombre: {
            type: dataTypes.STRING
        },
        duracion: {
            type: dataTypes.STRING
        }


    }


    let config = {
        tableName: "albumes",
        timestamps: false
    }
    
    
    let Album = sequelize.define(alias, cols, config);

    Album.associate = function(models) {
        Album.hasMany(models.Cancion, {
            as: "canciones",
            foreingKey: "album_id"
        })
    }

    return Album
}