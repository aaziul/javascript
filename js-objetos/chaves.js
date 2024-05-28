const cliente = {
    nome: "Luiza",
    idade: 18,
    email: "luiza@forma.com",
    telefone: ["51999999999", "51888888888"],
};

//cliente.endereco = {
    //rua: "R. Independencia",
    //numero: 1337,
    //apartamento: true,
    //complemento: "AP 934",
//};

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if(!chavesDoObjeto.includes("enderecos")){
    console.error("ERRO! É necessário ter um endereço cadastrado.");
};
