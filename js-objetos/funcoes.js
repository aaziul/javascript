const cliente = {
    nome: "Luiza",
    idade: 18,
    email: "luiza@forma.com",
    telefone: ["51999999999", "51888888888"],
    saldo: 200,
    efetuaPagamento: function(valor){
        if(valor>this.saldo){
            console.log("Saldo insuficiente!");
        } else {
            this.saldo -= valor;
            console.log(`Pagamento realizado! Novo saldo: R$ ${this.saldo},00`);
        }
    }
};

cliente.efetuaPagamento(15);
