module.exports = function(sequelize, dataTypes) {
    
    let alias = "Artista";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true         
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        }


    }


    let config = {
        tableName: "artistas",
        timestamps: false
    }
    
    
    let Artista = sequelize.define(alias, cols, config);

    Artista.associate = function(models) {
        Artista.hasMany(models.Cancion, {
            as: "canciones",
            foreingKey: "artista_id"
        })
    }

    return Artista
}