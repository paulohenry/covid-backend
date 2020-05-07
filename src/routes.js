import { Router } from 'express';
import userController from './app/controllers/User'
import sessionController from './app/controllers/SesionController'
import positionController from './app/controllers/position'
import formController from './app/controllers/formController'
import Classify from './app/middlewares/pontuacao'
import autheticate from './app/middlewares/autheticate'
import geolocationGoogle from './app/middlewares/geolocation'

const routes = new Router();

routes.get('/positions/', positionController.getAll);

routes.post('/users/', geolocationGoogle, userController.store);
routes.get('/users/', autheticate, userController.getByID);
routes.put('/users/', autheticate, geolocationGoogle, userController.update);
routes.delete('/users/', autheticate, userController.delete);

routes.post('/session/',  Classify, sessionController.store);

routes.post('/form/', autheticate, Classify, formController.store);
routes.put('/form/', autheticate, Classify, formController.update);
routes.get('/form/', autheticate, formController.store);



export default routes;
