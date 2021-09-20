console.log(`Trabalhando com LOOPS \n`); 
const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo", 
    "Rio de Janeiro", 
    "João Pessoa"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
); 
const usuarioComprador = 17;
const estaAcompanhada = true; 
let temPassagemComprada = false;
const destino = "Salvador";
let destinoExiste = false;

console.log ("\n Destinos possíveis: ");
console.log (listaDeDestinos); 

// -------- Trabalhando com a lista
const podeComprar = usuarioComprador >= 18 || estaAcompanhada == true;

let contador = 0; 

while (contador <4){
   if (listaDeDestinos[contador] == destino) {
       destinoExiste = true;
       break;
   } else {
       destinoExiste = false;
   }
    contador +=1;
} 

console.log ("Destino existe: ", destinoExiste);





