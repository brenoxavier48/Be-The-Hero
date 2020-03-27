const express = require('express');
const routes = express.Router(); 

const ongController = require('./controllers/ongController.js');
const incidentsController = require('./controllers/incidentsController.js');
const profileController = require('./controllers/profileController.js');
const sessionController = require('./controllers/sessionController.js');

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.insert);

routes.get('/session', sessionController.validateOngSession);

routes.get('/profile', profileController.indexIncidentsByOng);

routes.get('/incidents', incidentsController.index);
routes.post('/incidents', incidentsController.insert);
routes.delete('/incidents/:id', incidentsController.delete);

module.exports = routes;