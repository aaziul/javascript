const cliente = {
    nome: "Luiza",
    idade: 18,
    cpf: "11122233345",
    email: "luiza@dominio.com",
};

console.log(`O nome do cliente é: ${cliente["nome"]}, sua idade é ${cliente["idade"]}, os 3 primeiros dígitos de seu CPF é ${cliente.cpf.substring(0, 3)} e seu e-mail é ${cliente["email"]}`);

const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach( (chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});

//não informar algum valor dos dados informados não dará erro ao código. no caso do dado "altura" não foi informado um valor ou string, portanto no terminal aparecerá como indefinido (undefined)
