const {Router} = require('express');
const { getEvents , createEvent , updateEvent , deleteEvent } = require('../controllers/events.controller');
const { validateJWT, validateFields } = require('../middlewares');
const { check } = require('express-validator');
const { isDate } = require('../helpers/isDate');

/**
 * ? event routes
 * 
 * ? host + api/events
 */

const router = Router();

//? Middleware of high level
router.use( validateJWT )


router.get('/', getEvents);

router.post('/' , [

    check('title' , ' el titulo es obligatorio').notEmpty(),
    check('start' , 'La fecha de inicio es obligatoria').custom( isDate ),
    check('end' , 'La fecha de finalización es obligatoria').custom( isDate ),
    validateFields

] , createEvent);

router.put('/:id' , [
    check('id' , 'El id no es valido').isMongoId(),
    validateFields
] , updateEvent);

router.delete('/:id',[
    check('id' , 'El id no es valido').isMongoId(),
    validateFields
] , deleteEvent);

module.exports = router;