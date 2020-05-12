require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');

let {local} = require('./passport/local');
let {jwtStrategy} = require('./passport/jwt');

const sequelizeConexion = require('./database/conexions/sequalize');

const usersRouter = require('./routes/userRouter');
const articlesRouter = require('./routes/articleRouter');
const commentsRouter = require('./routes/commentRouter');

//Settings
app.set('port' , process.env.PORT || 3000);

//passport
passport.use(local);
passport.use(jwtStrategy);

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(passport.initialize());

//Routes
app.use('/api', usersRouter);
app.use('/api', articlesRouter);
app.use('/api', commentsRouter);

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

