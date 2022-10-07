/* 
  Controladores de fluxo - condicionais else if

  if = se 
  else = senão
  else if  = mais se...
 */

  const temperatura  = 37

  if (temperatura >= 37 && temperatura <= 36){
    console.log("Você não esta com febre")
  }
  else if(temperatura < 35){
    console.log("Sua temperatura esta abaixo do normal")
  }
  else{
    console.log("Você esta com febre")
  }