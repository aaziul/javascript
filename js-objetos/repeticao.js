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

for(let chave in cliente){
    let tipo = typeof cliente[chave];
    if(tipo !== 'object' && tipo !== "function"){
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    };
};
