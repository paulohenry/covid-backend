import User from '../models/User'
import Geolocation from '../middlewares/geolocation'
import Correios from '../middlewares/correios'

class UserController {
  async store(res,req){
    const user = await User.create(req.body)

    // correios e geolocation vao aqui

    return res.status(201).json(user)
  }

  async getAll(req,res){
    const {lat, long} = await User.getAll()
    return res.status(200).json({
      positions:{
        lat,
        long
      }
    })
  }

  async getByID(req,res){
    const user = await User.getByID(req.body.id)
    return res.status(200).json({
      user
    })
  }

  async update(req,res){
    const user = await User.update(req.body)
    return res.status(202).json({
      user
    })
  }

  async delete(req,res){
    await User.delete(req.body.id)
    return res.status(204)
  }
}

export default new UserController();
