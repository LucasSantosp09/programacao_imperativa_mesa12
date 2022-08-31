const dados = require ('./modulos/dados');
const conta = require('./modulos/contas');

// let conta1 = new Conta(dados[0].titular, dados[0].numero, dados[0].tipo, dados[0].saldo);
// let conta2 = new Conta(dados[1].titular, dados[1].numero, dados[1].tipo, dados[1].saldo);
let listaContas = [];
for (let contador = 0; contador < dados.length; contador++) {
    listaContas.push(new conta(dados[contador].titular, dados[contador].numero, dados[contador].tipo, dados[contador].saldo) );
}
console.log(listaContas);

