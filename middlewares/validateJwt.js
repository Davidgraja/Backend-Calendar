const { request , response } = require("express");
const jwt = require('jsonwebtoken');

const validateJWT = ( req = request , res = response , next ) => {

    const token  = req.header('x-token');

    if( !token ) {
        return res.status(401).json({
            ok : false , 
            msg : 'No se ha recibido el token'
        });
    } 

    try {

        const { iat , exp, ...dataUser } =  jwt.verify( token , process.env.PRIVATE_KEY);
        
        req.user = dataUser;

    } catch (error) {

        return res.status(400).json({
            ok : false ,
            msg : 'Token no válido'
        });

    }


    next();
}

module.exports = {
    validateJWT
} 