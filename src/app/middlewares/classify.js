export default (req,res,next)=>{
  // pegando formulario
  let classificacao = 0



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
      switch (resposta5) {
        case 'Estou internado agora':
       c +=600

        break;
        case 'Estive internado(alta médica)':
        c -=600
        break;
      default:
        break;

      }
      return c
    }
    Q5(classificacao)

      // falta arrumar a 6
      const Q6_sintomas = (alternativa) =>{
        const peso = 3
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

        resposta6.filter(Q6_sintomas)



const Q6_A = (c)=>{
      if(resposta6_a){
        const peso=5

        switch (resposta6_a) {

        case 'Não estou nesta lista':
          c +=(0*peso)
        break;
        case 'Serviços funerários em geral':
          c +=(10*peso)
        break;
        case 'Atendente':
          c +=(6*peso)
        break;
        case 'enfermeiro(a)':
          c +=(10*peso)
        break;
        case 'Remoção de doentes':
          c +=(8*peso)
        break;
        case 'Clínica Médica':
          c +=(8*peso)
        break;
        case 'Médico intensivista':
          c +=(10*peso)
        break;

      default:
        break;
      }
    }
    return c
  }
  Q6_A(classificacao)


const Q5_A = (c)=>{
    if(resposta5_a){
      const peso=2.5

      switch (resposta5_a) {

      case 'Sempre, cobrindo nariz e boca':
      c -=(10*peso)
      break;
      case 'Sempre, ma as vezes relaxo no uso':
      c +=(4*peso)
      break;
      case 'Nem sempre':
      c +=(10*peso)
      break;

    default:
      break;
    }
  }
  return c
}
Q5_A(classificacao)


      const Q7_comportamento = (alternativa)=>{

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

      resposta7.filter(Q7_comportamento)


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

      resposta8.filter(Q8_comportamento_sair_de_casa)



const Q9=(c)=>{
      if(resposta9){

      switch (resposta9) {
        case 'Afastado ou não estou trabalhando no momento':
        c +=(0*2)
        break;
        case 'sim, em jornada normal':
        c +=(10*2)
        break;
        case 'sim, em jornada reduzida':
        c +=(5*2)
        break;
        case 'Estou trabalhando em casa':
        c +=(0*2)
        break;
        case 'Estou trabalhando como voluntário':
        c +=(10*2)
        break;

      default:
        break;
      }
    }
    return c
  }
  Q9(classificacao)


  const Q10=(c)=>{

    if(resposta10){

      switch (resposta10) {
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
  Q10(classificacao)

      const Q11_trabalho_voluntario = (alternativa)=>{
        const peso  = 5
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

      resposta11.filter(Q11_trabalho_voluntario)

      const Q12_em_contato_com_alguem_07_dias = (alternativa)=>{
        const peso = 3
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

      resposta12.filter(Q12_em_contato_com_alguem_07_dias)


const Q13 = (c)=>{
      if(resposta13){
        const peso = 5
      switch (resposta13) {
        case 'Não costumo fazer isso':
        c -=(2*peso)
        break;
        case 'Não me lembro':
        c +=(10*peso)
        break;
        case 'Sim, mas lavo as mãos antes, quando sinto necessidade':
        c +=(2*peso)
        break;
        case 'Sim, mas percebo e me controlo':
        c +=(5*peso)
        break;
        case 'Sempre e sem controle':
        c +=(10*peso)
        break;

      default:
        break;
      }

    }
    return c
  }
  Q13(classificacao)

      const Q14_lava_maos_freq = (alternativa)=>{
        const peso = 5
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

      resposta14.filter(Q14_lava_maos_freq)


      const Q15_alcool = (alternativa)=>{
        const peso = 2.5
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
      resposta15.filter(Q15_alcool)


const Q18 = (c)=>{
      if(resposta18){
        const peso = 5
      switch (resposta18) {
        case 'Moro Sozinho':
        c -=(5*peso)
        break;
        case 'com +1 pessoas':
        c -=(4*peso)
        break;
        case 'com +2 pessoas':
        c -=(3*peso)
        break;
        case 'com +3 pessoas':
        c -=(0*peso)
        break;
        case 'com +4 pessoas':
        c +=(2*peso)
        break;
        case 'com +5 pessoas':
        c +=(5*peso)
        break;
        case 'com +6 pessoas':
        c +=(7*peso)
        break;
        case 'Acima de 6 pessoas':
        c +=(10*peso)
        break;

      default:
        break;
      }
    }
    return c
  }
  Q18(classificacao)



const Q19 = (c)=>{
    if(resposta19){
      const peso = 5
    switch (resposta18) {
      case '1 cômodo apenas':
      c +=(5*peso)
      break;
      case '2 cômodos':
      c +=(4*peso)
      break;
      case '3 cômodos':
      c +=(3*peso)
      break;
      case '4 cômodos':
      c -=(0*peso)
      break;
      case '5 cômodos':
      c -=(3*peso)
      break;
      case '6 cômodos':
      c -=(4*peso)
      break;
      case '7 cômodos':
      c -=(5*peso)
      break;
      case 'Acima de 7 cômodos':
      c -=(6*peso)
      break;

    default:
      break;
    }
  }
  return c
}
Q19(classificacao)


const Q20 = (c)=>{
  if(resposta20){
    const peso = 5
  switch (resposta20) {
    case '1 banheiro apenas':
    c +=(3*peso)
    break;
    case '2 banheiro apenas':
    c +=(2*peso)
    break;
    case 'Acima de 2 banheiros':
    c +=(1*peso)
    break;
    default:
    break;
  }
  }
    return c
}
Q20(classificacao)




  const funcao_classificacao = (c)=>{

      if(c<=-31){
        c = 'blue'
      }
      if(c<=-32 && c>=109){
        c = 'green'
      }
      if(c<=109 && c>=339){
        c = 'yellow'
      }
      if(c>=339){
        c = 'red'
      }
      return c
    }


   req.body.classify = funcao_classificacao(classificacao)






  // criar a cor para para range de pontuações - GREEN YELLOW RED BLUE

  // colocar pontuacao no pormulario

  req.body.resposta6=JSON.stringify(resposta6)
  req.body.resposta7=JSON.stringify(resposta7)
  req.body.resposta8=JSON.stringify(resposta8)
  req.body.resposta11=JSON.stringify(resposta11)
  req.body.resposta12=JSON.stringify(resposta12)
  req.body.resposta14=JSON.stringify(resposta14)
  req.body.resposta15=JSON.stringify(resposta15)





   return next()
  }

