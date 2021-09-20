console.log(`Trabalhando com listas`); 

//const salvador = `Salvador`;
//const saoPaulo = `São Paulo`;
//const rioJaneiro = `Rio de Janeiro`; 
//const joaoPessoa = `João Pessoa`; 

const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo", 
    "Rio de Janeiro", 
    "João Pessoa"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
);
listaDeDestinos.push(`Natal`); // Adiciona um local turístico na lista

console.log (`Destinos possíveis: `);
// console.log(salvador, saoPaulo, rioJaneiro, joaoPessoa);
console.log (listaDeDestinos); 

listaDeDestinos.splice(1,1); // Splice retira um ítem da lista
console.log (listaDeDestinos); 

console.log(listaDeDestinos[1]);



