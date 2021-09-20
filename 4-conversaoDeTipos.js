console.log ("Conversão de tipos"); 

console.log ( "ano " + 2020); 
console.log ("2" + "2"); 
console.log (parseInt ("2") + parseInt ("2")); // concatenação de texto 

var dinheiro = 5; 

console.log (parseFloat (dinheiro / 2)); // Resultado 2.5

/* 
  OBSERVAÇÕES 
  
  1- As operações seguem normalmente as regras da matemática, fazendo primeiramente as equações de 
  multiplicação, divisão. Porém, se você quiser algo com preferência, coloque entre (); 
  
  2 - Você pode concatenar String e números; 

  3- O parseInt converte valores de String em números, principalmente com a soma de strings. Isso se chama 
  condição explicita. Condição Implicita é quando você coloca números como string e tenta dividir, o
  JS automáticamente ele transaforma em número. 

  4- Para númeors com ",", tutiliza-se "." para obter um ponto flutuante. Também utiliza-se o parseFloat
  para conversão de pontos flutuantes
  
  */
