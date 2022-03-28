let contasClientes = [
    {
    id: 1,
    saldo: 500,
    },
    {
    id: 2,
    saldo: 30000,
    },
    {
    id: 3,
    saldo: 50,
    },
    ];

    const retirar ="sacar";
    const guardar = "depositar"

// acessar as conta
const buscarConta = (id) => contasClientes.find((cont) => cont.id === id);

//validar operação

const validaOperacao = (valor, contaOperacao, operacao) => {
    if (!contaOperacao){
        console.log("Conta Inválida");
        return;
    }
    if (valor <= 0){
        console.log("Valor Inválido");
        return false;
    }
    if(operacao === retirar && valor > contaOperacao.saldo){
        console.log("Saldo Insuficiente");
        return false;
    }
    return true;
};

//atualiza saldo
const atualizaSaldo = (id, saldo) =>{
    const contas = contasClientes.map((conta) => conta.id === id ? {...conta, saldo}: conta);
    console.log(`Seu saldo é: ${saldo}`);
};

const sacar = (id, valor) => {
    const contaOperacao = buscarConta(id);
    if (validaOperacao(valor, contaOperacao, retirar)) {
        const saldo = contaOperacao.saldo - valor;
        atualizaSaldo(id, saldo);
    }
};

const depositar = (id, valor) =>{
    const contaOperacao = buscarConta(id);
    if (validaOperacao(valor, contaOperacao, guardar)){
        const saldo = contaOperacao + valor;
        atualizaSaldo(id, valor);
    }
};

sacar(10, 200);
depositar(1,200);
sacar(1, 500);
sacar(1, 2000);




//console.log(contas())