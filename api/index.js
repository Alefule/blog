const express = require('express');
const app = express();
const morgan = require('morgan');
const jwt = require('jsonwebtoken');
const config = require('./configs/jwtConfig.js');
const passport = require('passport');

const sequelizeConexion = require('./database/conexions/sequalize');

const usersRouter = require('./routes/userRouter');

//Settings
app.set('port' , process.env.PORT || 3000);

//Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(passport.initialize());

//Routes
//app.use(routerFilms);
app.use('/api', usersRouter);

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});

sequelizeConexion.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

