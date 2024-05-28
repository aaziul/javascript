const cliente = {
    nome: "Luiza",
    idade: 18,
    cpf: "11122233345",
    email: "luiza@dominio.com",
};

console.log(`O nome do cliente é: ${cliente.nome}, sua idade é ${cliente.idade}, os 3 primeiros dígitos de seu CPF é ${cliente.cpf.substring(0, 3)} e seu e-mail é ${cliente.email}`);
