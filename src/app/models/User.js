import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        primeiro_nome: Sequelize.STRING,
        segundo_nome: Sequelize.STRING,
        celular: Sequelize.INTEGER,
        cep: Sequelize.INTEGER,
        lat: Sequelize.INTEGER,
        long: Sequelize.INTEGER,
        senha_hash: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default User;
