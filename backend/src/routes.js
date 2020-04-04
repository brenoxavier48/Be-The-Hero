const express = require('express');
const routes = express.Router(); 

const ongController = require('./controllers/ongController.js');
const incidentsController = require('./controllers/incidentsController.js');
const profileController = require('./controllers/profileController.js');
const sessionController = require('./controllers/sessionController.js');

const { celebrate, Segments, Joi } = require('celebrate');

const validationOng = {
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}

const validationProfile = {
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}


routes.get('/ongs', ongController.index);
routes.post('/ongs', celebrate(validationOng), ongController.insert);

routes.post('/session', sessionController.validateOngSession);

routes.get('/profile', celebrate(validationProfile), profileController.indexIncidentsByOng);

routes.get('/incidents', incidentsController.index);
routes.post('/incidents', incidentsController.insert);
routes.delete('/incidents/:id', incidentsController.delete);

module.exports = routes;