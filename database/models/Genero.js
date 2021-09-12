module.exports = function(sequelize, dataTypes) {
    
    let alias = "Genero";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true         
        },
        name: {
            type: dataTypes.STRING
        },


    }


    let config = {
        tableName: "generos",
        timestamps: false
    }
    
    
    let Genero = sequelize.define(alias, cols, config);

    Genero.associate = function(models) {
        Genero.hasMany(models.Cancion, {
            as: "canciones",
            foreingKey: "genero_id"
        })
    }

    return Genero
}