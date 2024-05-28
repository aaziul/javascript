const cliente = {
    nome: "Luiza",
    idade: 18,
    email: "luiza@forma.com",
    telefone: ["51999999999", "51888888888"],
};

cliente.endereco = {
    rua: "R. Independencia",
    numero: 1337,
    apartamento: true,
    complemento: "AP 934",
};

console.log(cliente);

console.log(cliente["endereco"]); //aparece somente as informaçoes encaminhadas no codigo cliente.endereco
