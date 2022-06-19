const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;



passport.use(new GoogleStrategy({
  clientID: "199555990089-ju1sv47tqh5v56v4fipntck942sju8b4.apps.googleusercontent.com",
  clientSecret: "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",
  callbackURL: "http://localhost:5000/auth/google/callback",
  passReqToCallback: true,
},
function(request, accessToken, refreshToken, profile, done) {
  return done(null, profile);
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});