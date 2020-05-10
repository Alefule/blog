const LocalStrategy = require('passport-local').Strategy;

const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

exports.local = new LocalStrategy({
    usernameField: "mail",
    passwordField: "password",
    session: false
},async (mail, password, done) => {
    console.log('Verify callback')
    const user = await userController.findUserByEmail(mail);
    if (!user || !authController.validatePassword(password, user.password)) {
        return done(null, false, { errors: { 'email or password': 'is invalid' } });
    }
    return done(null, user);
})

