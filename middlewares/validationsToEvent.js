const { request, response } = require("express");
const Event = require('../models/Event');

const validationsToEvent = async ( req = request , res = response , next ) => {

    const { id } = req.params;

    try {
        
        const validateEvent = await Event.findById(id);

        if(!validateEvent){
        
            return res.status(400).json({
                ok : false ,
                msg : 'El id no se encuentra en la base de datos'
            });
        
        }

        if(validateEvent.user.toString() !== req.user.uid){

            return res.status(401).json({
                ok : false ,
                msg : 'No tiene privilegio de modificar este evento'
            });

        }

        next();

    } catch(error){

        console.log(error);
        
        res.status(500).json({
            ok : false ,
            msg : 'Comuniquese con el administrador'
        });

    }

}

module.exports = {
    validationsToEvent
}