import 'dotenv/config'
import express from 'express';
import * as Sentry from '@sentry/node'
import Youch from 'youch'
import routes from '../routes';
import configSentry from '../config/sentry'
import 'express-async-errors'
import '../database/index'

class App {
  constructor() {
    this.server = express();
    Sentry.init(configSentry)
    this.server.use(Sentry.Handlers.requestHandler());
    this.middlewares();
    this.exceptionHandler();
    this.routes();
  }

  middlewares() {
    this.server.use(Sentry.Handlers.requestHandler());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
    this.server.use(Sentry.Handlers.errorHandler());
  }

  exceptionHandler(){
    this.server.use(async (err,req,res,next)=>{
      if(process.env.NODE_ENV === 'development'){
        const errors = new Youch(err, req).toJSON();
        return res.status(500).json(errors)
      }
      return res.status(500).json({error:'internal server error'})
    })
  }
}

export default new App().server;
