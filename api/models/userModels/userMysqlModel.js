module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id:{
            type: type.INTEGER,
            autoIncrement: true,
            unique: true,
            primaryKey: true
        },
        name: {
          type: type.STRING,
          field: 'name' // `first_name` column matches User.firstName
        },
        firstname: {
          type: type.STRING
        },
        mail: {
          type: type.STRING,
          unique: true,
        },
        password: {
          type: type.STRING
        },
        token: {
          type: type.STRING
        }
      }, {
        freezeTableName: true // Model tableName (`user`) will be the same as the model name
      });
}