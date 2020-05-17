import * as Yup from 'yup'
import User from '../models/User'
import Position from '../models/Position'


class UserController {
  async store(req,res){
        const schema = Yup.object().shape({
          primeiro_nome: Yup.string().required().min(3).max(20),
          ultimo_nome:Yup.string().required().min(3).max(20),
          celular:Yup.string().required().length(11),
          senha:Yup.string().required().length(6),
          cep:Yup.number().required(),
          complemento:Yup.string(),
          lat:Yup.number().required(),
          long:Yup.number().required(),
          numero:Yup.number().required(),
          rua:Yup.string().required(),
          bairro:Yup.string().required(),
          cidade:Yup.string().required(),
          estado:Yup.string().required(),
          pais:Yup.string().required(),
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
      lat,
      long,
      cep,
      rua,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      pais
          } = await User.create(req.body)


      await Position.create({
            user_celular:celular,
            lat,
            long,
            bairro,
            cidade,
            estado,
            pais
          })
    return res.status(201).json({
      id,
      primeiro_nome,
      ultimo_nome,
      celular,
      rua,
      complemento,
      lat,
      long,
      cep,
      numero,
      bairro,
      cidade,
      estado,
      pais  })

}



  async getByID(req,res,next){

      const userId = await User.findByPk(req.userId)

      if(!userId){
        return res.status(404).json({error:'usuário não encontrado ou não existe'})
      }
    const response = await User.findAll()


    return res.status(200).json(response)

  }

  async update(req,res){



      const schema = Yup.object().shape({
        primeiro_nome: Yup.string().min(3).max(20),
        ultimo_nome:Yup.string().min(3).max(20),
        celular:Yup.string().length(11),
        cep:Yup.number(),
        complemento:Yup.string(),
        lat:Yup.number(),
        long:Yup.number(),
        numero:Yup.number(),
        rua:Yup.string(),
        bairro:Yup.string(),
        cidade:Yup.string(),
        estado:Yup.string(),
        pais:Yup.string(),
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
    // const position_db = await Position.findByPk(req.userId)

      if(!user_db){
        return res.status(400).json({error:'usuário não encotrado ou não exise'})
      }
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
      lat,
      long,
      cep,
      rua,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      pais,

           } = await user_db.update(req.body)

      const user_celular = await Position.findOne({where:{user_celular:req.celular}})

      if(!user_celular){
      return res.status(400).json({error:'Posição não encontrada'})
      }

      await user_celular.update({
         user_celular,
         lat,
         long,
         bairro,
         cidade,
         estado,
         pais
       })

     return res.status(202).json({
      id,
      primeiro_nome,
      ultimo_nome,
      celular,
      lat,
      long,
      cep,
      rua,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      pais
           })

}

  async delete(req,res){
      const senha_req=req.body.senha
      const user_db = await User.findByPk(req.userId)
      if(!(await user_db.checkPassword(senha_req))){
        return res.status(401).json({error:'senha  incorreta'})
      }
      const user = await User.destroy({where:{id:req.userId}})
      const pos =await Position.destroy({where:{user_id:req.userId}})

      if(!user){
          return res.status(200).send({message:'usuário deletado ou não existe'})
        }
        if(!pos){
          return res.status(200).send({message:'usuário deletado ou não existe'})
        }

      return res.status(200).send({message:'usuário deletado com sucesso'})


  }
}

export default new UserController();
