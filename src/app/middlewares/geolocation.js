export default (req,res,next)=>{

   // correios e geolocation vao aqui
   const lat = -23.25165
   const long = -23.5262

   req.body.lat = lat
   req.body.long = long

  return next()
}
