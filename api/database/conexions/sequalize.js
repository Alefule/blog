const Sequelize = require('sequelize')
const UserModel = require('../../models/userModels/userMysqlModel')

const sequelize = new Sequelize('blog', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
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

module.exports = {
    User,
    sequelize
}