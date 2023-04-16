const { request, response } = require("express");
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const { generateJWT } = require("../helpers/generate_Jwt");

const renewToken = async ( req = request , res = response ) => {

    const {name , uid} = req.user;

    try {
        const token = await generateJWT(uid , name);
    
        return res.json({
            ok : true,
            token
        })
        
    } catch (error) {

        console.log(error);
        
        return res.status(500).json({
            ok : false ,
            msg: 'por favor hable con el administrador'
        })
    
    }

}


const registerUser = async ( req = request , res = response ) => {

    const {email , password} = req.body;

    try {
    
        let usuario = await Usuario.findOne({email});

        if(usuario){
            return res.status(400).json({
                ok: false,
                msg : 'Ya existe un usuario con ese email'
            })
        }
        
        usuario = new Usuario(req.body);
        
        //? password encryption 
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync( password , salt );

        await usuario.save();
        
        //? Token
        const token = await generateJWT(usuario._id , usuario.name );

        res.status(201).json({
            ok : true,
            uid : usuario._id,
            name : usuario.name,
            token
        });
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });

    }


}

const loginUser = async ( req = request , res = response ) => {
    
    const answerDenied = {
        ok: false,
        msg : 'email o contraseña incorrectas'
    };

    const { email , password } = req.body;
    
    
    try {

        const usuario = await Usuario.findOne({email});

        if(!usuario){
            return res.status(400).json( answerDenied);
        }


        //? comfirn  the passwords
        const validatePassword = bcrypt.compareSync(password , usuario.password);

        if( !validatePassword ){
            return res.status(400).json(answerDenied);
        }

        //? Token
        const token = await generateJWT(usuario._id ,  usuario.name);

        res.json({
            ok : true,
            uid : usuario._id,
            name : usuario.name,
            token
            
        });

    } catch (error) {
        
        console.log(error);
        res.status(500).json({
            ok: false,
            msg : 'Por favor hable con el administrador'
        });

    }

}

module.exports = {
    renewToken,
    registerUser,
    loginUser
}