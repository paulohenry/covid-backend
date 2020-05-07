import Sequelize, { Model } from 'sequelize';



class FormModel extends Model {
  static init(sequelize) {
    super.init(
      { id:Sequelize.INTEGER,
        classify:Sequelize.STRING,
        resposta1: Sequelize.STRING,
        resposta2: Sequelize.STRING,
        resposta3: Sequelize.STRING,
        resposta4: Sequelize.STRING,
        resposta5: Sequelize.STRING,
        resposta6: Sequelize.STRING,
        resposta7: Sequelize.STRING,
        resposta8: Sequelize.STRING,
        resposta9: Sequelize.STRING,
        resposta10: Sequelize.STRING,
        resposta11: Sequelize.STRING,
        resposta12: Sequelize.STRING,
        resposta13: Sequelize.STRING,
        resposta14: Sequelize.STRING,
        resposta15: Sequelize.STRING,
        resposta16: Sequelize.STRING,
        resposta17: Sequelize.STRING,
        resposta18: Sequelize.STRING,
        resposta19: Sequelize.STRING,
        resposta20: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );



      return this;
  }


}

export default FormModel;
