const passport = require('passport');

const AuthService = {
    passportLocalStrategy(req, res, next) {
        passport.authenticate('local', function(err, user, info) {
            if (err) { return next(err); }
            if (!user) { return res.send(info.message); }
            return next()
        })(req, res, next);
    }
}
module.exports = AuthService;