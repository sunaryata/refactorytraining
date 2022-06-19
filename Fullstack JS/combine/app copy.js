const express = require('express')
const session = require('express-session');
const query = require('./env');
const passport = require('passport');
require('./controller/auth-facebook')();
require('./controller/auth-google');







const port = 5000;
const app = express()







function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
  }
  
  app.use(session({ secret: 'sayasangatsukangoding', resave: false, saveUninitialized: true }));
  app.use(passport.initialize());
  app.use(passport.session());



app.get('/', (req, res) => {

    res.write('<a href="/auth/google">Authenticate with Google</a>');
    res.write('<br>');
    res.write('<a href="/auth/facebook">Authenticate with facebook</a>');
    res.send();
  });

  app.get('/auth/google',
  passport.authenticate('google', { scope: [ 'email', 'profile' ] }
));

app.get( '/auth/google/callback',
  passport.authenticate( 'google', {
    successRedirect: '/dashboard',
    failureRedirect: '/auth/google/failure'
  })
);


app.get('/auth/facebook',
passport.authenticate('facebook'));


app.get('/auth/facebook/callback',
passport.authenticate('facebook', 
{ failureRedirect: '/login' }),
function(req, res) {
  // Successful authentication, redirect home.
  res.redirect('/dashboard');
});



app.get('/dashboard', isLoggedIn, (req, res) => {
    res.send(`Selamat Datang ${req.user.email}`);
    const result= query.addata(req.user.email,req.user.displayName,'2');
  
   
  });
  
  app.get("/logout", (req, res) => {
      req.logout(req.user, err => {
        if(err) return next(err);
        res.redirect("/");
       
      });
    });
  
  app.get('/auth/google/failure', (req, res) => {
    res.send('Failed to authenticate..');
  });

app.listen(port, function () {
    console.log('server running on port',port)
})