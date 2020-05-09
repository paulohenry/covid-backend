import jwt from 'jsonwebtoken'
import authconfig from '../../config/auth'
import User from '../models/User'

class SessionController {



  async store(req,res){
    try{
    const {celular, senha} = req.body

    const user = await User.findOne({where:{celular}})

    if(!user){
      return res.status(401).json({error:'usuario nao encontrado'})
    }
     const verifySenha = await user.checkPassword(senha)
    if(!verifySenha){
      return res.status(401).json({message:'senha incorrenta, login não autorizado'})
    }

    const {
          id,
          primeiro_nome,
          ultimo_nome,
          cep,
        } = user

    return res.status(201).json({
      user:{id,
      primeiro_nome,
      ultimo_nome,
      cep,
      celular},
      token:jwt.sign({id}, authconfig.secret)
    })
  }catch(error){
    return res.status(500).json({error:'erro interno  500 login'})
  }
 }
}

export default new SessionController()
