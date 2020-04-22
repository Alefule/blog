const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local');

const Controller = require('../controllers/userController'); 

exports.localLogin = new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false
}, async (email, password, done) => {
  // Match Email's User
  const user = await Controller.findUserByEmail(email);
  if (!user) {
    console.log('usuario no encontrado')
    return done(null, false, { message: 'Not User found.' });
  } else {
    // Match Password's User
    const match = await this.comparePassword(password, user.password);
    if(match) {
      console.log(user)
      return done(null, user);
    } else {
      console.log('Contraseña incorrecta')
      return done(null, false, { message: 'Incorrect Password.' });
    }
  }
});

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "mi_perro"
};

exports.jwtLogin = new Strategy(jwtOptions, async (payload, done) => {
  try {
    const user = await User.findById(payload.sub);

    return user ? done(null, user) : done(null, false);
  } catch (err) {
    return done(err, false);
  }
});


exports.encryptPassword = async (password) => {
  const hash = await bcrypt.hash(password, 10);
  return hash;
}

exports.comparePassword = async (password, userpassword) => {
  const compare = await bcrypt.compare(password, userpasword);
  return compare;
}

/*passport.use(localLogin);
passport.use(jwtLogin);*/
