import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs'


class User extends Model {
  static init(sequelize) {
    super.init(
      {
        primeiro_nome: Sequelize.STRING,
        ultimo_nome: Sequelize.STRING,
        celular: Sequelize.STRING,
        cep: Sequelize.STRING,
        lat: Sequelize.STRING,
        long: Sequelize.STRING,
        senha: Sequelize.VIRTUAL,
        senha_hash: Sequelize.STRING,
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
