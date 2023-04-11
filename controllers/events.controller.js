const { request, response } = require("express");
const Event = require('../models/Event');


const getEvents = async ( req = request , res = response ) => {

    const events = await Event.find().populate('user' , 'name');

    res.json({
        ok : true,
        events
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

const updateEvent = async ( req = request , res = response ) => {

    const { id } = req.params;

    try {
        
        const eventData = {
            ...req.body,
            user : req.user.uid
        }

        const eventUpdated =  await Event.findByIdAndUpdate(id , eventData , {new : true} );

        res.json({
            ok : true,
            event : eventUpdated
        })

        
    } catch (error) {
        
        console.log(error);
        
        res.status(500).json({
            ok : false ,
            message : 'Comuniquese con el administrador'
        });

    }

}

const deleteEvent = async ( req = request , res = response ) => {

    const { id } = req.params;

    try {

        await Event.findByIdAndRemove(id);
    
        res.json({
            ok : true
        });
        
    } catch (error) {
        
        console.log(error);

        res.status(500).json({
            ok : false,
            message : 'Comuniquese con el administrador'
        });
        
    }

}

module.exports = {
    getEvents ,
    createEvent ,
    updateEvent ,
    deleteEvent 
}