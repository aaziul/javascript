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

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);
//as reticencias (...) realiza o espalhamento, ele espalha as variaveis nos seus exatos lugares quando são chamados

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
    //rua: cliente.enderecos[0].rua,
    //numero: cliente.enderecos[0].numero,
    //endereco: cliente.enderecos[0],
};

console.log(encomenda);
