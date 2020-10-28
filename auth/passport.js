const passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    function(username, password, done) {
        const userOK = username === 'test',
            passwordOK = password === 'test';
        if (!userOK) {
            return done(null, false, { message: 'Incorrect username.' });
        } else if (!passwordOK) {
            return done(null, false, { message: 'Incorrect password.' });
        }

        return done(null, username);
    }
));
module.exports = passport;