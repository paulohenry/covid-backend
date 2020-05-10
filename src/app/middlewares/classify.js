export default (req,res,next)=>{
  // pegando formulario
  let classificacao = 0



  const {
    resposta1,
    resposta2,
    resposta3,
    resposta4,
    resposta5,
    resposta6,
    resposta6_a,
    resposta7,
    resposta8,
    resposta9,
    resposta10,
    resposta11,
    resposta12,
    resposta13,
    resposta14,
    resposta15,



  } = req.body



       switch (resposta1) {
          case 'não':
           classificacao +=3
           break;
           case 'sim, com resultado negativo':
           classificacao +=0
           break;
           case 'sim, sem resultado':
           classificacao +=4
           break;
           case 'sim, com resultado positivo':
           classificacao +=4
           break;

         default:
           break;
       }

        switch (resposta2) {
          case 'De 1 a 5 dias':
          classificacao +=1
          break;
          case 'De 6 a 10 dias':
          classificacao +=2
          break;
          case 'De 11 a 14 dias':
          classificacao +=3
          break;
          case 'De 14 a 20 dias':
          classificacao +=4
          break;
          case 'Acima de 20 dias':
          classificacao +=5
          break;

        default:
          break;
      }

      switch (resposta3) {
        case 'Não, não estou com sintomas':
        classificacao +=0
        break;
        case 'Sim, estou com sintomas':
        classificacao +=1
        break;

      default:
        break;
    }

      switch (resposta4) {
        case 'Estou de quarentena obrigatória':
        classificacao +=2
        break;
        case 'Tive alta médica da quarentena':
        classificacao +=1
        break;

      default:
        break;
      }
      switch (resposta5) {
        case 'nenhuma das anteriores':
        classificacao +=1
        break;
        case 'Tenho sintomas apenas':
        classificacao +=5
        break;
        case 'Estive internado(alta médica)':
        classificacao -=0
        break;
        case 'Estou internado agora':
        classificacao +=35
        break;
      default:
        break;
      }

      // falta arrumar a 6
      const Q6_sintomas = (alternativa) =>{
        switch (alternativa) {
          case 'Não estou nesta lista':
          classificacao +=0
          break;
          case 'Serviços funerários em geral':
          classificacao +=5
          break;
          case 'Atendente':
          classificacao -=3
          break;
          case 'enfermeiro(a)':
          classificacao +=10
          break;
          case 'Remoção de doentes':
          classificacao +=5
          break;
          case 'Clínica Médica':
          classificacao +=10
          break;
          case 'Médico intensivista':
          classificacao +=15
          break;

        default:
          break;
        }
        }

        resposta6.filter(Q6_sintomas)





      switch (resposta6_a) {
        case 'Não estou nesta lista':
        classificacao +=0
        break;
        case 'Serviços funerários em geral':
        classificacao +=5
        break;
        case 'Atendente':
        classificacao -=3
        break;
        case 'enfermeiro(a)':
        classificacao +=10
        break;
        case 'Remoção de doentes':
        classificacao +=5
        break;
        case 'Clínica Médica':
        classificacao +=10
        break;
        case 'Médico intensivista':
        classificacao +=15
        break;

      default:
        break;
      }


      const Q7_comportamento = (alternativa)=>{
        switch (alternativa) {
          case 'Evita os comportamentos acima e mantém o contato a distância de 2 metros':
          classificacao +=0
          break;
          case 'Beija':
          classificacao +=4
          break;
          case 'Abraça':
          classificacao -=3
          break;
          case 'Aperta as mãos':
          classificacao +=2
          break;
          case 'Fica Próximo para conversar':
          classificacao +=1
          break;

        default:
          break;
        }
      }

      resposta7.filter(Q7_comportamento)


      // arrumar questao 8
      const Q8_comportamento_sair_de_casa = (alternativa)=>{
        if(alternativa !== '' || alternativa !== 'Não sai porque estou em isolamento'){
          classificacao +=1
          }
      }

      resposta8.filter(Q8_comportamento_sair_de_casa)

      switch (resposta9) {
        case 'Afastado ou não estou trabalhando no momento':
        classificacao +=1
        break;
        case 'sim, em jornada normal':
        classificacao +=3
        break;
        case 'sim, em jornada reduzida':
        classificacao -=2
        break;
        case 'Estou trabalhando em casa':
        classificacao +=1
        break;
        case 'Estou trabalhando como voluntário':
        classificacao +=3
        break;

      default:
        break;
      }

      switch (resposta10) {
        case 'De transporte público':
        classificacao +=1
        break;
        case 'De carona, ou dando carona':
        classificacao -=2
        break;
        case 'sozinho':
        classificacao +=1
        break;
        case 'Com motorista de aplicativo':
        classificacao +=2
        break;

      default:
        break;
      }

      const Q11_trabalho_voluntario = (alternativa)=>{
        switch (alternativa) {
          case 'Não estou nesta lista':
          classificacao +=1
          break;
          case 'Sou voluntário dentro de comunidades carentes':
          classificacao -=2
          break;
          case 'Sou voluntário em serviços de armazenamento':
          classificacao +=1
          break;
          case 'Sou voluntário em serviços internos':
          classificacao +=2
          break;
          case 'Trabalho em creches, asílos ou similares':
          classificacao +=2
          break;

        default:
          break;
        }
      }

      resposta11.filter(Q11_trabalho_voluntario)

      const Q12_em_contato_com_alguem_07_dias = (alternativa)=>{
        switch (alternativa) {
          case 'Não que eu saiba ou tenha percebido':
          classificacao +=1
          break;
          case 'Na rua':
          classificacao -=2
          break;
          case 'Em lugares fechados, pronto socorro ou hospitais':
          classificacao +=1
          break;
          case 'No trabalho':
          classificacao +=2
          break;
          case 'Em casa':
          classificacao +=2
          break;

        default:
          break;
        }
      }

      resposta12.filter(Q12_em_contato_com_alguem_07_dias)

      switch (resposta13) {
        case 'Não costumo fazer isso':
        classificacao +=0
        break;
        case 'Não me lembro':
        classificacao -=3
        break;
        case 'Sim, mas lavo as mãos antes, quando sinto necessidade':
        classificacao +=2
        break;
        case 'Sim, mas percebo e me controlo':
        classificacao +=4
        break;
        case 'Sempre e sem controle':
        classificacao +=5
        break;

      default:
        break;
      }

      const Q14_lava_maos_freq = (alternativa)=>{
        switch (alternativa) {
          case 'Não que eu saiba ou tenha percebido':
          classificacao +=1
          break;
          case 'Na rua':
          classificacao -=2
          break;
          case 'Em lugares fechados, pronto socorro ou hospitais':
          classificacao +=1
          break;
          case 'No trabalho':
          classificacao +=2
          break;
          case 'Em casa':
          classificacao +=2
          break;

        default:
          break;
        }
      }

      resposta14.filter(Q14_lava_maos_freq)


      const Q15_alcool = (alternativa)=>{
        switch (alternativa) {
          case 'Não tenho o hábito ou condições':
          classificacao +=3
          break;
          case 'Sempre que não posso lavar as mãos':
          classificacao -=1
          break;
          case 'Para higienizar objetos de uso frequente(celulares, carteira, cartão, etc)':
          classificacao +=0
          break;
          case 'Para limpar sacolas, embalagens e outros objetos que chegam da rua':
          classificacao +=0
          break;
          case 'Para limpar superfícies(pias, bancadas, utensílios) todo dia':
          classificacao +=0
          break;

        default:
          break;
        }
      }
      resposta15.filter(Q15_alcool)







  // fazer calculos de pontuacao
  // essa pontuacao vem da soma dos formularios
  // resultado final abaixo vai para outra verificacao de cores



  const cores = (c)=>{

      if(c<=10){
        c = 'blue'
      }
      if(c<=11 && c>=20){
        c = 'green'
      }
      if(c<=21 && c>=31){
        c = 'yellow'
      }
      if(c>=32){
        c = 'red'
      }
      return c
    }


   req.body.classify = cores(classificacao)






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

