const dados = require("./cliente.json");

console.log(dados); //{
    ////nome: 'Luiza',
    //email: 'luiza@dominio.com',
    //telefone: [ '11223344', '11922334453' ],
    //endereco: {
      //rua: 'R. Joseph Climber',
      //numero: 202,
      //apartamento: true,
      //complemento: 'ap 934'
    //}
  //}
console.log(`Tipo de dado do console acima: ${typeof dados}`); //object

console.log("------------------------");

const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString); //{"nome":"Luiza","email":"luiza@firma.com","telefone":["11223344","11922334453"],"endereco":{"rua":"R. Joseph Climber","numero":202,"apartamento":true,"complemento":"ap 934"}}
console.log(`Tipo de dado do console acima: ${typeof clienteEmString}`); //string

console.log("------------------------");

console.log(clienteEmString.nome); //undefined

console.log("------------------------");

const objetoCliente = JSON.parse(clienteEmString);

console.log(objetoCliente); //{
    ////nome: 'Luiza',
    //email: 'luiza@dominio.com',
    //telefone: [ '11223344', '11922334453' ],
    //endereco: {
      //rua: 'R. Joseph Climber',
      //numero: 202,
      //apartamento: true,
      //complemento: 'ap 934'
    //}
  //}
