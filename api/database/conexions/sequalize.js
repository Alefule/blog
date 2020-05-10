const Sequelize = require('sequelize')
const UserModel = require('../../models/userModels/userMysqlModel')

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

module.exports = {
    User,
    sequelize
}