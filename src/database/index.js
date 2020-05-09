import Sequelize from 'sequelize';

import User from '../app/models/User';
import Positions from '../app/models/Position'

import config from '../config/database';

const models = [User, Positions];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(config);
    models.map((model) => model.init(this.connection));
    models.map((model) => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
