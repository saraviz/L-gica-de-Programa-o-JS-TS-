function soma(number1,number2){
    return number1 + number2;
  }
function subtracao(number1,number2){
    return number1 - number2;
  }
function multi(number1,number2){
    return number1 * number2;
  }
function divisao(number1,number2){
    return number1 / number2;
  }
  
  
  function calc(number1, number2, operator) {
  
  
      if (operator === '+') {
          return soma(number1, number2);
          
      }
      if (operator === '-') {
          return subtracao(number1, number2);
          
      }
      if (operator === '*') {
          return multi(number1, number2);
          
      }
      if (operator === '/') {
          return divisao(number1, number2);
          
      }
    
  }
  
  const result = calc(4,2,'/');
  console.log(result);