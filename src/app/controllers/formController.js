import FormModel from '../models/Form'


class FormController {


 async store(req,res){
    const id  = req.userId
    req.body.id = id
    const form = await  FormModel.create(req.body)

    return res.status(200).json(form)
 }

 async update(req,res){

  return res.status(200).json({message:'ok'})
}

async getForm(req,res){

  return res.status(200).json({message:'ok'})
}
}

export default new FormController();
