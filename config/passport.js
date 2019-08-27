
// 解token
const JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt
const key = require('./key')

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = key.keyName
module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {    
      // console.log(jwt_payload);
      
   return  done(null,jwt_payload)
    })
  )
}
