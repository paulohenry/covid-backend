import { Router } from 'express';

const routes = Router();

routes.get('/users/:id', (req, res) => {
  return res.json({ message: 'ok debug' });
});

routes.put('/users/:id', (req, res) => {
  return res.json({ message: 'ok debug' });
});

routes.post('/users', (req, res) => {
  return res.json({ message: 'ok debug' });
});

routes.delete('/users', (req, res) => {
  return res.json({ message: 'ok debug' });
});

export default routes;
