class Positions {
   async  getAll(req,res){
      return res.status(200).json({message:'ok'})
  }
}
export default new Positions()
