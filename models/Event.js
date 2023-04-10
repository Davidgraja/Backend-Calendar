const { model , Schema } = require('mongoose');

const EventSchema = Schema({

    title : {
        type : String,
        required : true,
    } ,

    notes : {
        type : String
    } ,

    start : {
        type : Date,
        required : true
    } , 

    end : {
        type : Date,
        required : true
    } ,
    
    user : {
        type: Schema.Types.ObjectId ,
        ref : 'Usuarios',
        required : true
    }


})

EventSchema.methods.toJSON = function() {
    const { __v , _id , ...dataEvent} = this.toObject();
    
    dataEvent.id = _id;

    return dataEvent ; 
} 

module.exports = model('Event' , EventSchema);