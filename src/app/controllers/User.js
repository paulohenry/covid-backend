import * as Yup from 'yup'
import User from '../models/User'


class UserController {
  async store(req,res){
        const schema = Yup.object().shape({
          primeiro_nome: Yup.string().required().min(3).max(20),
          ultimo_nome:Yup.string().required().min(3).max(20),
          celular:Yup.string().required().length(11),
          cep:Yup.string().required().length(8),
          senha:Yup.string().required().length(6)
        })

        if(!(await schema.isValid(req.body))){
          return res.status(400).json({error:'validation fail'})
        }


      const userExist = await User.findOne({where:{celular: req.body.celular}})

      if(userExist){
        return res.status(400).json({error:'usuário já existe em nossa base de dados'})
      }



    const {
          id,
          primeiro_nome,
          ultimo_nome,
          celular,
          cep,
          lat,
          long
          } = await User.create(req.body)



    return res.status(201).json({
      id,
      primeiro_nome,
      ultimo_nome,
      celular,
      cep,
      lat,
      long,
    })

}



  async getByID(req,res){

      const {userId} = req
    const {
      id,
      primeiro_nome,
      ultimo_nome,
      celular,
      cep,
      lat,
      long,
    } = await User.findOne({where:{id:userId}})
    return res.status(200).json({
      id,
      primeiro_nome,
      ultimo_nome,
      celular,
      cep,
      lat,
      long,
    })

  }

  async update(req,res){



      const schema = Yup.object().shape({
        primeiro_nome: Yup.string().min(3).max(20),
        ultimo_nome:Yup.string().min(3).max(20),
        celular:Yup.string().length(11),
        cep:Yup.string().length(8),
        senha_antiga: Yup.string().length(6),
        senha:Yup.string().required().length(6)
        .when('senha_antiga', (senha_antiga, field)=>
          senha_antiga?field.required():field
        )
      })

      if(!(await schema.isValid(req.body))){
        return res.status(400).json({error:'validation fail'})
      }

    const user_db = await User.findByPk(req.userId)
    const user_req = req.body
    const celular_de_outro_user = await User.findOne({where:{celular:user_req.celular}})



    if((user_db.celular !== user_req.celular) &&  celular_de_outro_user  ){
        return res.status(400).json({error: 'celular já cadastrado por outro usuario'})
    }

    if(user_req.senha_antiga && !(await user_db.checkPassword(user_req.senha_antiga))){
      return res.status(401).json({error:'senha antiga incorreta'})
    }
     const {
           id,
           primeiro_nome,
           ultimo_nome,
           celular,
           cep,
           lat,
           long,
           } = await user_db.update(req.body)
     return res.status(202).json({
            id,
            primeiro_nome,
            ultimo_nome,
            celular,
            cep,
            lat,
            long,
           })

}

  async delete(req,res){
      const senha_req=req.body.senha
      const {senha_do_banco} = await User.findOne({where:{id:req.userId}})
      if(senha_req === senha_do_banco){

        const user = await User.destroy({where:{id:req.userId}})
        if(!user){
          return res.status(200).send({message:'usuário deletado ou não existe'})
        }
        return res.status(200).send({message:'usuário deletado com sucesso'})
      }
      return res.status(200).send({message:'senha inválida'})

  }
}

export default new UserController();
