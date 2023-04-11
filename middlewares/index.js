const validateFields = require('./validateFields');
const validateJWT = require('./validateJwt');
const validationsToEvent = require('./validationsToEvent');

module.exports ={
    ...validateFields,
    ...validateJWT,
    ...validationsToEvent
}