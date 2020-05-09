import Position from '../models/Position'

class PositionController{

  async positions(req,res,next){
    // try{
    const filterRegion = req.headers.filter
    let users = []
    if(filterRegion){
    users = await Position.findAll({where:{cidade:filterRegion}})

    }else{
      users = await Position.findAll()
    }


    const latitude = users.map((p)=>{
      return p.lat
    })

    const longitude = users.map((p)=>{
      return p.lat
    })

    const user_celular = users.map((p)=>{
      return p.user_celular
    })



    console.log(users)
    if(!users){
      return res.status(200).json({error:'filtro de busca não encontrado'})
    }


    return res.status(200).json({
      latitude,
      longitude,
      user_celular
    })
  // }catch(error){
  //   return res.status(500).json({error:'erro interno 500 geolocalizacoes'})

  //     }
  }


}

export default new PositionController()
