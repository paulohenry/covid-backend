export default (req,res,next)=>{
  // pegando formulario
  let classificacao = 0

  console.log(`comeco classificacao: ${classificacao}`)

  const {


    resposta5,
    resposta6,
    resposta6_a,
    resposta5_a,
    resposta7,
    resposta8,
    resposta9,
    resposta10,
    resposta11,
    resposta12,
    resposta13,
    resposta14,
    resposta15,
    resposta18,
    resposta19,
    resposta20

  } = req.body


const Q5 = (c)=>{
  if(c){
      switch (c) {
        case 'Estou internado agora':
       classificacao +=600
        break;
        case 'Estive internado(alta médica)':
      classificacao -=600
        break;
      default:
        break;

      }
    }
      
    }
    Q5(resposta5)
    console.log(`questao 5: ${classificacao}`)


      // falta arrumar a 6
      const Q6_sintomas = (alternativa) =>{
        const peso = 3
        if(alternativa){
        switch (alternativa) {
          case 'Espirros frequentes':
          classificacao += (1*peso)
          break;
          case 'Coriza':
          classificacao += (2*peso)
          break;
          case 'Nariz entupido':
          classificacao += (2*peso)
          break;
          case 'Tosse seca frequente':
          classificacao += (3*peso)
          break;
          case 'Tosse com secreção':
          classificacao +=(3*peso)
          break;
          case 'Dor de garganta':
          classificacao +=(4*peso)
          break;
          case 'Dor de cabeça':
          classificacao +=(2*peso)
          break;
          case 'Dores musculares':
          classificacao +=(2*peso)
          break;
          case 'Falta de energia, cansaço, forte sensação de desgaste':
          classificacao +=(5*peso)
          break;
          case 'Febre maior que 38°C':
          classificacao +=(6*peso)
          break;
          case 'Falta de paladar ou olfato':
          classificacao +=(6*peso)
          break;
          case 'Falta de ar ou desconforto para respirar anormal':
          classificacao +=(7*peso)
          break;
          case 'Dor no peito':
          classificacao +=(5*peso)
          break;
          case 'Problemas intestinais (diarreia)':
          classificacao +=(1*peso)
          break;
          case 'Dores nas articulações ou nos olhos':
          classificacao +=(5*peso)
          break;
          case 'Dedos inchados com pontas rocheadas':
          classificacao +=(6*peso)
          break;


        default:
          break;
             }
            }
        }
        if(resposta6){
        resposta6.filter(Q6_sintomas)
        console.log(`questao 6: ${classificacao}`)
        console.log(resposta6)
        }

const Q6_A = (c)=>{
      if(c){
        const peso=5

        switch (c) {

        case 'Não estou nesta lista':
          classificacao +=(0*peso)
        break;
        case 'Serviços funerários em geral':
          classificacao +=(10*peso)
        break;
        case 'Atendente':
          classificacao +=(6*peso)
        break;
        case 'enfermeiro(a)':
          classificacao +=(10*peso)
        break;
        case 'Remoção de doentes':
          classificacao +=(8*peso)
        break;
        case 'Clínica Médica':
          classificacao +=(8*peso)
        break;
        case 'Médico intensivista':
          classificacao +=(10*peso)
        break;

      default:
        break;
      }
    }
    
  }
  Q6_A(resposta6_a)
  console.log(`questao 6a: ${classificacao}`)



const Q5_A = (c)=>{
    if(c){
      const peso=2.5

      switch (c) {

      case 'Sempre, cobrindo nariz e boca':
      classificacao -=(10*peso)
      break;
      case 'Sempre, ma as vezes relaxo no uso':
      classificacao +=(4*peso)
      break;
      case 'Nem sempre':
      classificacao +=(10*peso)
      break;

    default:
      break;
    }
  }
  
}
Q5_A(resposta5_a)
console.log(`questao 5a: ${classificacao}`)
      

      
const Q7_comportamento = (alternativa)=>{
     if(alternativa)
        switch (alternativa) {
          case 'Evita os comportamentos acima e mantém o contato a distância de 2 metros':
          classificacao +=(0*2)
          break;
          case 'Beija':
          classificacao +=(10*2)
          break;
          case 'Abraça':
          classificacao +=(7*2)
          break;
          case 'Aperta as mãos':
          classificacao +=(5*2)
          break;
          case 'Fica Próximo para conversar':
          classificacao +=(3*2)
          break;

        default:
          break;
        }
      }
      if(resposta7){
      resposta7.filter(Q7_comportamento)
      console.log(`resposta 7: ${classificacao}`)
      console.log(resposta7)
    }
      // arrumar questao 8
      const Q8_comportamento_sair_de_casa = (alternativa)=>{

          switch (alternativa) {
            case (alternativa !== '' || alternativa !== 'Não sai porque estou em isolamento'):
            classificacao +=(0*2)
            break;
            case 'Para ir a um pronto socorro ou hospital':
            classificacao +=(10*2)
            break;
            case 'Para visitar ou ajudar alguém':
            classificacao +=(4*2)
            break;
            case 'Para ir ao supermercado, feira, lojas, etc':
            classificacao +=(7*2)
            break;
            case 'Para passear ou fazer exercícios':
            classificacao +=(4*2)
            break;
            case 'Para trabalhar':
            classificacao +=(5*2)
             break;

          default:
            break;
          }
      }
      if(resposta8){
      resposta8.filter(Q8_comportamento_sair_de_casa)
      console.log(`resposta 8: ${classificacao}`)
      console.log(resposta8)
      }

const Q9=(c)=>{
      if(c){

      switch (c) {
        case 'Afastado ou não estou trabalhando no momento':
          classificacao +=(0*2)
        break;
        case 'sim, em jornada normal':
          classificacao +=(10*2)
        break;
        case 'sim, em jornada reduzida':
          classificacao +=(5*2)
        break;
        case 'Estou trabalhando em casa':
          classificacao +=(0*2)
        break;
        case 'Estou trabalhando como voluntário':
          classificacao +=(10*2)
        break;

      default:
        break;
      }
    }
   
  }
  Q9(resposta9)
  console.log(`resposta 9: ${classificacao}`)

  const Q10=(c)=>{

    if(c){

      switch (c) {
        case 'De transporte público':
        c +=(10*3)
        break;
        case 'De carona, ou dando carona':
        c +=(4*3)
        break;
        case 'sozinho':
        c +=(1*3)
        break;
        case 'Com motorista de aplicativo':
        c +=(4*3)
        break;
      default:
        break;
      }
    }
    return c
  }
  Q10(resposta10)
  console.log(`resposta 10: ${classificacao}`)

  
      const Q11_trabalho_voluntario = (alternativa)=>{
        const peso  = 5
         if(alternativa){
        switch (alternativa) {
          case 'Não estou nesta lista':
          classificacao +=(0*peso)
          break;
          case 'Sou voluntário dentro de comunidades carentes':
          classificacao +=(10*peso)
          break;
          case 'Sou voluntário em serviços de armazenamento':
          classificacao +=(4*peso)
          break;
          case 'Sou voluntário em serviços internos':
          classificacao +=(2*peso)
          break;
          case 'Trabalho em creches, asílos ou similares':
          classificacao +=(6*peso)
          break;

        default:
          break;
        }
      }
      }
      if(resposta11){
      resposta11.filter(Q11_trabalho_voluntario)
      console.log(`resposta 11: ${classificacao}`)
      console.log(resposta11)
      }
      const Q12_em_contato_com_alguem_07_dias = (alternativa)=>{
        const peso = 3
        if(alternativa){
        switch (alternativa) {
          case 'Não que eu saiba ou tenha percebido':
          classificacao +=(2*peso)
          break;
          case 'Na rua':
          classificacao +=(5*peso)
          break;
          case 'Em lugares fechados, pronto socorro ou hospitais':
          classificacao +=(10*peso)
          break;
          case 'No trabalho':
          classificacao +=(7*peso)
          break;
          case 'Em casa':
          classificacao +=(10*peso)
          break;

        default:
          break;
        }
      }
      }
      if(resposta12){
      resposta12.filter(Q12_em_contato_com_alguem_07_dias)
      console.log(`resposta 12: ${classificacao}`)
      console.log(resposta12)
      }
const Q13 = (c)=>{
      if(c){
        const peso = 5
      switch (c) {
        case 'Não costumo fazer isso':
          classificacao -=(2*peso)
        break;
        case 'Não me lembro':
          classificacao +=(10*peso)
        break;
        case 'Sim, mas lavo as mãos antes, quando sinto necessidade':
          classificacao +=(2*peso)
        break;
        case 'Sim, mas percebo e me controlo':
          classificacao +=(5*peso)
        break;
        case 'Sempre e sem controle':
          classificacao +=(10*peso)
        break;

      default:
        break;
      }

    }

  }
  Q13(resposta13)
  console.log(`resposta 13: ${classificacao}`)

      const Q14_lava_maos_freq = (alternativa)=>{
        const peso = 5
        if(alternativa){
        switch (alternativa) {
          case 'Não tenho o hábito ou condições ':
          classificacao +=(4*peso)
          break;
          case 'Sempre que mexo em algo que outros também mexem':
          classificacao -=(4*peso)
          break;
          case 'Quando penso em botar as mãos no rosto':
          classificacao -=(3*peso)
          break;
          case 'Assim que chego em casa':
          classificacao -=(2*peso)
          break;
          case 'Sempre que vou comer ou vou ao banheiro':
          classificacao -=(1*peso)
          break;

        default:
          break;
        }
      }
    }
      if(resposta14){
      resposta14.filter(Q14_lava_maos_freq)
   console.log(`resposta 14: ${classificacao}`)
   console.log(resposta14)
      }
      const Q15_alcool = (alternativa)=>{
        const peso = 2.5
        if(alternativa){
        switch (alternativa) {
          case 'Não tenho o hábito ou condições':
          classificacao +=(10*peso)
          break;
          case 'Sempre que não posso lavar as mãos':
          classificacao -=(10*peso)
          break;
          case 'Para higienizar objetos de uso frequente(celulares, carteira, cartão, etc)':
          classificacao -=(7*peso)
          break;
          case 'Para limpar sacolas, embalagens e outros objetos que chegam da rua':
          classificacao -=(3*peso)
          break;
          case 'Para limpar superfícies(pias, bancadas, utensílios) todo dia':
          classificacao -=(-5*peso)
          break;

        default:
          break;
        }
        }
      }
      if(resposta15){
      resposta15.filter(Q15_alcool)
      console.log(`resposta 15: ${classificacao}`)
      console.log(resposta15)
      }
const Q18 = (c)=>{
      if(c){
        const peso = 5
      switch (c) {
        case 'Moro Sozinho':
        classificacao -=(5*peso)
        break;
        case 'com +1 pessoas':
          classificacao -=(4*peso)
        break;
        case 'com +2 pessoas':
          classificacao -=(3*peso)
        break;
        case 'com +3 pessoas':
          classificacao -=(0*peso)
        break;
        case 'com +4 pessoas':
          classificacao +=(2*peso)
        break;
        case 'com +5 pessoas':
          classificacao +=(5*peso)
        break;
        case 'com +6 pessoas':
          classificacao +=(7*peso)
        break;
        case 'Acima de 6 pessoas':
          classificacao +=(10*peso)
        break;

      default:
        break;
      }
    }
   
  }
  Q18(resposta18)
  console.log(`resposta 18: ${classificacao}`)


const Q19 = (c)=>{
    if(c){
      const peso = 5
    switch (c) {
      case '1 cômodo apenas':
      classificacao +=(5*peso)
      break;
      case '2 cômodos':
        classificacao +=(4*peso)
      break;
      case '3 cômodos':
        classificacao +=(3*peso)
      break;
      case '4 cômodos':
        classificacao -=(0*peso)
      break;
      case '5 cômodos':
        classificacao -=(3*peso)
      break;
      case '6 cômodos':
        classificacao -=(4*peso)
      break;
      case '7 cômodos':
        classificacao -=(5*peso)
      break;
      case 'Acima de 7 cômodos':
        classificacao -=(6*peso)
      break;

    default:
      break;
    }
  }
 
}
Q19(resposta19)
console.log(`resposta 19: ${classificacao}`)

const Q20 = (c)=>{
  if(c){
    const peso = 5
  switch (c) {
    case '1 banheiro apenas':
      classificacao +=(3*peso)
    break;
    case '2 banheiro apenas':
      classificacao +=(2*peso)
    break;
    case 'Acima de 2 banheiros':
      classificacao +=(1*peso)
    break;

    default:
    break;
  }
  }
 
}
Q20(resposta20)
console.log(`resposta 20: ${classificacao}`)



  const funcao_classificacao = (c)=>{

      if(c<=-31){
        c = 'blue'
      }else if(c>=-32 && c<=109){
        c = 'green'
      }else if(c>=109 && c<=339){
        c = 'yellow'
      }else if(c>=339){
        c = 'red'
      }
      return c
    }


   req.body.classify = funcao_classificacao(classificacao)
   console.log(req.body.classify)





  // criar a cor para para range de pontuações - GREEN YELLOW RED BLUE

  // colocar pontuacao no pormulario

  req.body.resposta6=JSON.stringify(resposta6)
  req.body.resposta7=JSON.stringify(resposta7)
  req.body.resposta8=JSON.stringify(resposta8)
  req.body.resposta11=JSON.stringify(resposta11)
  req.body.resposta12=JSON.stringify(resposta12)
  req.body.resposta14=JSON.stringify(resposta14)
  req.body.resposta15=JSON.stringify(resposta15)




    // return res.status(200).json(req.body)
   return next()
  }

