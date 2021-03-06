module.exports = (sequelize, type) => {
    const user = sequelize.define('user', {
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
        avatar: {
          type: type.STRING,
        },
        mail: {
          type: type.STRING,
          unique: true,
        },
        password: {
          type: type.STRING
        },
        rol: {
          type: type.STRING
        }
      }, {
        freezeTableName: true // Model tableName (`user`) will be the same as the model name
      });

      user.associate = function(models) {
        user.hasMany(models.article, {
          foreignKey: 'id_user',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        });
        user.hasMany(models.comment, {
          foreignKey: 'id_user',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        });
      };
      return user;
    };
