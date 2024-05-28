const cliente = {
    nome: "Luiza",
    idade: 18,
    email: "luiza@forma.com",
    telefone: ["51999999999", "51888888888"],
};

cliente.enderecos = [
    {
    rua: "R. Independencia",
    numero: 1337,
    apartamento: true,
    complemento: "AP 934",
    },
];

cliente.enderecos.push({
    rua: "R. Brasil",
    numero: 404,
    apartamento: false,
}); //.push adiciona novas informações

const listaApenasApartamentos = cliente.enderecos.filter(
    (enderecos) => enderecos.apartamento === true
); //para aparecer apenas os entereços que são apartamentos, filter informa uma nova lista com uma entrada de endereço

console.log(listaApenasApartamentos);

//console.log(cliente);

//console.log(cliente["enderecos"]); 
