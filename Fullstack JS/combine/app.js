const express = require('express')
const session = require('express-session');


const passport = require('passport');
require('./controller/auth-facebook')();
require('./controller/auth-google');
const { MongoClient } = require('mongodb');

const port = 5000;
const app = express()


const uri = 'mongodb://127.0.0.1:27017'
const dbName = 'facebookauth';


const client = new MongoClient(uri,{
useNewUrlParser : true,
useUnifiedTopology : true,
});






function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
  }
  
  app.use(session({ secret: 'sayasangatsukangoding', resave: false, saveUninitialized: true }));
  app.use(passport.initialize());
  app.use(passport.session());



app.get('/', (req, res) => {
  
    res.write('<a href="/auth/google">Masuk Menggunakan akun Google</a>');
    res.write('<br>');
    res.write('<a href="/auth/facebook">Masuk Menggunakan akun facebook</a>');
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
passport.authenticate('facebook',{ scope: ['email']}));


app.get('/auth/facebook/callback',
passport.authenticate('facebook', 
{ 
successRedirect: '/dashboard',
failureRedirect: '/login' })
);



app.get('/dashboard', isLoggedIn, (req, res) => {
    // res.send(`Selamat Datang ${req.user.provider}`);
    if (req.user.provider=='facebook') {
        res.write(`selamat datang ${req.user.email}, Anda telah Login menggunakan akun facebook`);
        // const result= query.addata(req.user.email,req.user.displayName,'2');

        client.connect((error, client) => {
          if (error) {
              return console.log('Koneksi Gagal');
          }
         const db = client.db(dbName);
      
         db.collection('auth').insertOne(
         
          {
             email: req.user.emails[0].value,
             username: req.user.displayName,
             auth_cat: req.user.provider
          },
          (error, result)=> {
              if (error) {
                  return console.log('gagal menambahkan data');
              }
              console.log(result);
          })
         
      });




    } else {
        res.write(`selamat datang ${req.user.displayName}, Anda telah Login menggunakan akun google`);
        // const result= query.addata(req.user.email,req.user.displayName,'1');



        client.connect((error, client) => {
          if (error) {
              return console.log('Koneksi Gagal');
          }
         const db = client.db(dbName);
      
      
  
         db.collection('auth').insertOne(
         
          {
             email: req.user.email,
             username: req.user.displayName,
             auth_cat: req.user.provider
          },
          (error, result)=> {
              if (error) {
                  return console.log('gagal menambahkan data');
              }
              console.log(result);
          })
         
      });

    }
    res.send();
    
  
   
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