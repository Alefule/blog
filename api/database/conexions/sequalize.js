const Sequelize = require('sequelize')
const UserModel = require('../../models/userModels/userMysqlModel')
const ArticleModel = require('../../models/userModels/articleMysqlModel')
const CommentModel = require('../../models/userModels/commentMysqlModel')

const sequelize = new Sequelize(process.env.DATABASE, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
  host: process.env.HOST,
  dialect: process.env.DIALECT,
  define: {
    timestamps: false
  },
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const User = UserModel(sequelize, Sequelize)
const Article = ArticleModel(sequelize, Sequelize)
const Comment = CommentModel(sequelize, Sequelize)

module.exports = {
    User,
    Article,
    Comment,
    sequelize
}