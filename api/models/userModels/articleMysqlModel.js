module.exports = (sequelize, type) => {
    const article = sequelize.define('user', {
        id:{
            type: type.INTEGER,
            autoIncrement: true,
            unique: true,
            primaryKey: true
        },
        title: {
          type: type.STRING,
          field: 'name' // `first_name` column matches User.firstName
        },
        subtitle: {
          type: type.STRING
        },
        body: {
          type: type.STRING,
        },
        date: {
          type: type.DATE,
          unique: true,
        },
        id_user: {
          type: type.INTEGER
        }
      }, {
        freezeTableName: true // Model tableName (`user`) will be the same as the model name
      });

      article.associate = function(models) {
        article.belongsTo(models.user, {
          foreignKey: 'id_user',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        });
        article.hasMany(models.user, {
            foreignKey: 'id_article',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
          });
      };
      return article;
    };