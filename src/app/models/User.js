import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs'


class User extends Model {
  static init(sequelize) {
    super.init(
      {
        primeiro_nome: Sequelize.STRING,
        ultimo_nome: Sequelize.STRING,
        celular: Sequelize.STRING,
        lat: Sequelize.DOUBLE,
        long: Sequelize.DOUBLE,
        cep: Sequelize.INTEGER,
        rua: Sequelize.STRING,
        numero: Sequelize.DOUBLE,
        complemento: Sequelize.STRING,
        bairro: Sequelize.STRING,
        cidade: Sequelize.STRING,
        estado: Sequelize.STRING,
        pais: Sequelize.STRING,
        senha: Sequelize.VIRTUAL,
        senha_hash: Sequelize.STRING,
        resposta1:Sequelize.STRING,
        resposta2: Sequelize.STRING,
        resposta3: Sequelize.STRING,
        resposta4: Sequelize.STRING,
        resposta5: Sequelize.STRING,
        resposta6: Sequelize.STRING,
        resposta6A: Sequelize.STRING,
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
        classify:Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async (user)=>{
          if(user.senha){
            user.senha_hash = await bcrypt.hash(user.senha, 4)
          }
    });

      return this;
  }

 async checkPassword(password){
        const bcrypthash = await bcrypt.compare(password, this.senha_hash)
        return bcrypthash
      }
}

export default User;
