import { Router } from 'express';
import userController from './app/controllers/User'


const routes = Router();

routes.get('/users/:id', userController.getByID);

routes.get('/users/', userController.getAll);


routes.put('/users/:id',userController.update );

routes.post('/users', userController.store);

routes.delete('/users', userController.delete);

export default routes;
