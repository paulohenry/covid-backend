 import User from '../models/User'

 class FormController{
      async get(req,res,next){
        try{
          const user_db = await User.findByPk(req.userId)

          if(!user_db){
            return res.status(404).json({error:'relatório não existe ou não encontrado'})
          }
          const {
                resposta1,
                resposta2,
                resposta3,
                resposta4,
                resposta5,
                resposta6,
                resposta7,
                resposta8,
                resposta9,
                resposta10,
                resposta11,
                resposta12,
                resposta13,
                resposta14,
                resposta15,
                resposta16,
                resposta17,
                resposta18,
                resposta19,
                resposta20,
                classify,
          }  = await User.findByPk(req.userId)

          return res.status(200).json({
            resposta1,
                resposta2,
                resposta3,
                resposta4,
                resposta5,
                resposta6,
                resposta7,
                resposta8,
                resposta9,
                resposta10,
                resposta11,
                resposta12,
                resposta13,
                resposta14,
                resposta15,
                resposta16,
                resposta17,
                resposta18,
                resposta19,
                resposta20,
                classify,
          })
        }catch(error){
          return res.status(500).json({error:'erro interno 500 get relatório'})
        }
      }

     async  update(req,res,next){
       try{
          const user_db = await User.findByPk(req.userId)

            if(!user_db){
              return res.status(404).json({error:'relatório não existe ou não encontrado'})
            }
          const {
                resposta1,
                resposta2,
                resposta3,
                resposta4,
                resposta5,
                resposta6,
                resposta7,
                resposta8,
                resposta9,
                resposta10,
                resposta11,
                resposta12,
                resposta13,
                resposta14,
                resposta15,
                resposta16,
                resposta17,
                resposta18,
                resposta19,
                resposta20,
                classify,
              } = await user_db.update(req.body)
              return res.status(202).json({
                resposta1,
                resposta2,
                resposta3,
                resposta4,
                resposta5,
                resposta6,
                resposta7,
                resposta8,
                resposta9,
                resposta10,
                resposta11,
                resposta12,
                resposta13,
                resposta14,
                resposta15,
                resposta16,
                resposta17,
                resposta18,
                resposta19,
                resposta20,
                classify,
                     })
      }catch(erro){
        return res.status(500).json({error:'erro interno 500 update relatório'})
      }
    }
 }
export default new FormController()
