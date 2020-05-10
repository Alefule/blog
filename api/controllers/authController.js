const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('passport');

exports.setPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

exports.validatePassword = (passwordToCompare, userPassword) => {
    return bcrypt.compareSync(passwordToCompare, userPassword);
};

exports.authorizeUser = async (req,res,next)=>{
  passport.authenticate('jwt', {session: false}, (err, user, info)=>{
    console.log("ejecutando *callback auth* de authenticate para estrategia jwt");
    if(info){ console.log("Entro por info"); 
              return next(info)}
    if (err) {console.log("Entro por info");  
              return next(err); }
    if (!user) { return next(new error_types.Error403("You are not allowed to access.")); }

    req.user = user;
    next();
})(req, res, next);
}

exports.authenticateUser = async (req, res, next) => {
  user = {...req.body};

  if(!user.mail) {
      return res.status(422).json({
        errors: {
          mail: 'is required',
        },
      });
    }
  
    if(!user.password) {
      return res.status(422).json({
        errors: {
          password: 'is required',
        },
      });
    }

  return await passport.authenticate('local', { session: false },(err, userPassport) => {
      if(err) {
        return next(err);
      }
      if(userPassport) {

        console.log("*** comienza generacion token*****");
        const payload = {
            sub: user.id,
            exp: Date.now() + parseInt(process.env.JWT_LIFETIME),
            username: user.username
        };

        
        const token = jwt.sign(JSON.stringify(payload), 'mysecret', {algorithm: 'HS256'});
        return res.json({ data: { token } });
      }
      return res.status(422).json({"user": user})
    })(req, res, next);
}

