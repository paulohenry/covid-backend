import { Router } from 'express';
import userController from './app/controllers/User'
import sessionController from './app/controllers/SesionController'
import positionController from './app/controllers/positionController'
import formController from './app/controllers/formController'
import Classify from './app/middlewares/classify'
import autheticate from './app/middlewares/autheticate'
import geolocationGoogle from './app/middlewares/geolocation'

const routes = new Router();


routes.get('/positions/', positionController.positions);

routes.post('/users/', geolocationGoogle, userController.store);
routes.get('/users/', autheticate, userController.getByID);
routes.put('/users/', autheticate, geolocationGoogle, userController.update);
routes.delete('/users/', autheticate, userController.delete);

routes.put('/form/',  Classify, formController.update);
routes.get('/form/',  formController.get);

routes.post('/session/', sessionController.store);







export default routes;
