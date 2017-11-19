const Boleto = require('./lib/boleto.js')
const ConsultaPagamento = require('./lib/consultaPagamento.js')
const ConsultaPagamentosCobrancas = require('./lib/consultaPagamentosCobrancas.js')

//console.log({Boleto});
/*const b = new Boleto('197B09E95F100F48F73F606C0512F7BEFA40BB022FC2CFAD',
"Pedido1791", 12.7, 'NomeSobrenome', '94648945123');*/
//b.setToken('123')
//b.gerarCobranca().then(data => {console.log(data);});
//console.log(b);
//console.log('YE YE');

module.exports = {Boleto, ConsultaPagamento, ConsultaPagamentosCobrancas}
