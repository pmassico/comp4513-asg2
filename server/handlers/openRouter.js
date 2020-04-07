const express = require('express');
const router = express.Router();
const passport = require('passport');
const helper = require('./helpers.js');
const fs = require('fs');
const localStorage = require('localStorage')
const cookie = require('cookie');

// Welcome Page
router.get('/home',  helper.ensureAuthenticated, (req, resp) => {
   let reactHome =  '/' ;
   fs.writeFile('user.json', JSON.stringify(req.user), function (err) {
      if (err) throw err;
      console.log('Saved user.json');
   });
   resp.redirect(reactHome);
});

router.get('/login', (req, resp) => { 
   resp.render('login', {message: req.flash('error')} );
});

router.get('/logout', (req, resp) => {
   req.logout();
   req.flash('info', 'You were logged out');
   fs.unlink('user.json', function(error) {
      if (error) {
          throw error;
      }
      console.log('Deleted user.json');
   });
   resp.render('login', {message: req.flash('info')} );
});

router.post('/login', async (req, resp, next) => {
   // use passport authentication to see if valid login
   passport.authenticate('localLogin', { successRedirect: '/home', failureRedirect: '/login', failureFlash: true })(req, resp, next);
});

module.exports = router;