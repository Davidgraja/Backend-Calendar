/**
 *? endpoints for the petition to auth 
 *? host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields , validateJWT } = require('../middlewares')
const { renewToken, registerUser, loginUser } = require('../controllers/auth.controller');

const router = Router();

router.get('/renew', validateJWT , renewToken);

router.post('/new' , [
    check('name' , 'El nombre es obligatorio').notEmpty(),
    check('name' , 'El nombre debe de tener al menos 4 caracteres').isLength({min:4}),
    check('email' , 'El email es obligatorio, Por favor verifiquelo').isEmail(),
    check('password' , 'El password es obligatorio y de al menos 6 caracteres').isLength({ min: 6 }),
    validateFields
], registerUser);

router.post('/' ,[
    check('email' , 'El email es obligatorio').isEmail(),
    check('password' , 'El password es obligatorio y de al menos 6 caracteres').isLength({ min: 6 }),
    validateFields
], loginUser);


module.exports = router;