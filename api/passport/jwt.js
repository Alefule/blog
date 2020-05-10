const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;
opts.algorithms = process.env.JWT_ALGORITHM;

const userController = require('../controllers/userController');

exports.jwtStrategy = new JwtStrategy(opts, (jwt_payload, done) => {
  userController.findUserById(jwt_payload.sub).then(data=>{
      if (data === null) {
          return done(null, false);
      }else  
          return done(null, data);
      }).catch(err=>done(err, null)) 
});


  