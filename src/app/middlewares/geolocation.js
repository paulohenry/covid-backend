import NodeGeocoder from 'node-geocoder'
import key from '../../config/googlekey'

  export default async (req,res,next)=>{
    try{
    const  geocoder  = NodeGeocoder({
      provider:key.provider,
      apiKey:key.apiKey,
    });

    const {cep,rua,numero} = req.body
    const endereco = `${rua} ,${numero} - ${cep}`
    const geo = await geocoder.geocode(endereco);

    req.body.lat = geo[0].latitude
    req.body.long = geo[0].longitude
    req.body.bairro = geo[0].extra.neighborhood
    req.body.cidade = geo[0].administrativeLevels.level2long
    req.body.estado = geo[0].administrativeLevels.level1long
    req.body.pais = geo[0].country

    return next()

  }catch(error){
      return res.status(500).json(error)
    }
  }

