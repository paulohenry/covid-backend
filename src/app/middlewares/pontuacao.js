export default (req,res,next)=>{
  // pegando formulario
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
    resposta20

        } = req.body

  // fazer calculos de pontuacao
  // essa pontuacao vem da soma dos formularios
  // resultado final abaixo vai para outra verificacao de cores
  let classificacao = 10
  switch (classificacao) {
      case 10:
         classificacao='green'
      break;
      case 20:
        classificacao='yellow'
      break;
      case 30:
      classificacao='red'
      break;
      case 40:
      classificacao='blue'
      break;
      default:
      break;
  }
  // criar a cor para para range de pontuações - GREEN YELLOW RED BLUE

  // colocar pontuacao no pormulario
  req.body.classify = classificacao


   return next()

}
