module.exports = (sequelize, type) => {
    const comment = sequelize.define('user', {
        id:{
            type: type.INTEGER,
            autoIncrement: true,
            unique: true,
            primaryKey: true
        },
        comment: {
          type: type.STRING,
        },
        id_user: {
          type: type.INTEGER
        },
        id_article: {
          type: type.INTEGER
        }
      }, {
        freezeTableName: true // Model tableName (`user`) will be the same as the model name
      });

      comment.associate = function(models) {
        comment.belongsTo(models.user, {
          foreignKey: 'id_user',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        });
        comment.belongsTo(models.article, {
            foreignKey: 'id_article',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
            });
      };
      return comment;
    };