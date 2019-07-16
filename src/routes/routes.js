const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = express.Router();

//When the user sends a post request to this route, passport authenticates the user based on the
//middleware created previously
router.post('/register', passport.authenticate('register', { session: false }), async (req, res, next) => {
    res.status(204)
    res.json()
});

router.post('/login', async (req, res, next) => {
    passport.authenticate('login', async (err, user, info) => {
        try {
            if (err || !user) {
                res.status(403)
                return res.json({ error: "User or password Wrong" })
            }
            req.login(user, { session: false }, async (error) => {
                if (error) return next(error)
                const body = { id: user._id, email: user.email };
                const token = jwt.sign({ user: body }, 'top_secret');
                return res.json({ token });
            });
        } catch (error) {
            return next(error);
        }
    })(req, res, next);
});

module.exports = router;