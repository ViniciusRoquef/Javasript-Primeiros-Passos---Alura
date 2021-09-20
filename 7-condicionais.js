console.log(`Trabalhando com listas`); 
const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo", 
    "Rio de Janeiro", 
    "João Pessoa"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
); 
const usuarioComprador = 17;
const estaAcompanhada = true; 
const temPassagemComprada = true;

console.log (listaDeDestinos); 


// if(usuarioComprador >= 18 ){
//     listaDeDestinos.splice(1,1); // Splice retira um ítem da lista
//     console.log ("Usuário maior de idade");
//     console.log (listaDeDestinos);
// } else if(estaAcompanhada == true){
//     listaDeDestinos.splice(1,1); // Splice retira um ítem da lista
//     console.log ("Usuário está acompanhado por adulto");
//     console.log (listaDeDestinos);
// } else{
//     console.log ("Usuário menor de idade, não posso vender");
// }   

// --------OPERADORES = OU
if(usuarioComprador >= 18 || estaAcompanhada == true){ 
    listaDeDestinos.splice(1,1); // Splice retira um ítem da lista
    console.log (" Boa Viagem!  :) ");
    console.log (listaDeDestinos);   
} else{
    console.log ("Usuário menor de idade, não posso vender");
} 

// --------OPERADORES = E
console.log ("Embarque: \n\n"); 
if(usuarioComprador >= 18 && temPassagemComprada ==true){
    console.log ("Boa Viagem");
}else{
    console.log("Infelizmente você não poderá embarcar!")
}



