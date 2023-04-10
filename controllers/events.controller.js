const { request, response } = require("express");
const Event = require('../models/Event');


const getEvents = ( req = request , res = response ) => {

    res.json({
        ok : true,
        message : 'get events'
    });

}

const createEvent = async ( req = request , res = response ) => {

    const event = new Event(req.body);

    event.user = req.user.uid

    try {
        
        const eventSave = await event.save()
        
        res.json({
            ok : true,
            event : eventSave
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            ok : false ,
            message : 'Hable con el administrador'
        })

    }


    
}

const updateEvent = ( req = request , res = response ) => {

    const { id } = req.params;

    res.json({
        ok : true,
        message : 'update event',
        id 
    });

}

const deleteEvent = ( req = request , res = response ) => {

    const { id } = req.params;

    res.json({
        ok : true,
        message : 'delete event',
        id 
    });

}

module.exports = {
    getEvents ,
    createEvent ,
    updateEvent ,
    deleteEvent 
}