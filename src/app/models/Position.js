import Sequelize, { Model } from 'sequelize';



class Position extends Model {
  static init(sequelize) {
    super.init(
      {

        lat: Sequelize.DOUBLE,
        long: Sequelize.DOUBLE,
        bairro: Sequelize.STRING,
        cidade: Sequelize.STRING,
        estado: Sequelize.STRING,
        pais: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );


      return this;
  }

    static associate(models){
        this.belongsTo(models.User, {foreignKey:'user_celular'})
    }
}

export default Position;
