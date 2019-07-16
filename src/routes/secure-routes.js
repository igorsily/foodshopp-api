const express = require('express');

const router = express.Router();

const RoleController = require('../controllers/RolesController')
const UserController = require('../controllers/UserController')


//Lets say the route below is very sensitive and we want only authorized users to have access

//Displays information tailored according to the logged in user
router.get('/profile', (req, res, next) => {
    //We'll just send back the user details and the token
    res.json({
        message: 'You made it to the secure route',
        user: req.user,
        token: req.query.secret_token
    })
});

router.get('/roles', RoleController.index);
router.post('/roles', RoleController.store);
router.get('/roles/:id', RoleController.show);
router.put('/user/:id', UserController.update);


module.exports = router;