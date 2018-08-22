const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user,done)=>{
	done(null,user.id)
});

passport.deserializeUser((id,done)=>{
	User.findById(id)
	.then(user => done(null,user));
});

passport.use(
	new GoogleStrategy({
		clientID: keys.googleClientID,
		clientSecret: keys.googleClientSecret,
		callbackURL: '/auth/google/callback'
	},
	(accessToken, refreshToken, profile, done) => {
		User.findOne({googleId: profile.id})
		.then( existingUser =>{
			if (existingUser){
				// We already have a record with the given profile ID
				done(null, existingUser);
				//console.log('\nExisting user =)\n');
			}else{
				// We don't have a user record with this profile ID, make a new record
				new User({googleId: profile.id})
				.save()
				.then(user=>done(null,user));
				//console.log('\nNEW USER CREATED!!\n');
			}
		});
	})
);
