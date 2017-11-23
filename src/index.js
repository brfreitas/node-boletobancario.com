const Boleto = require('./lib/boleto.js')
const ConsultaPagamento = require('./lib/consultaPagamento.js')
const ConsultaPagamentosCobrancas = require('./lib/consultaPagamentosCobrancas.js')

//console.log({Boleto});
//const b = new Boleto('197B09E95F100F48F73F606C0512F7BEFA40BB022FC2CFAD',
//"Pedido1791", 12.7, 'NomeSobrenome', '94648945123');
//b.setToken('123')
//console.log('KKKKKK');
//b.gerarCobranca().then(({data}) => {console.log(data.charges[0]);});
//const c = new ConsultaPagamentosCobrancas('197B09E95F100F48F73F606C0512F7BEFA40BB022FC2CFAD',
//'sandbox','20/11/2017');
//c.listarCobrancas()
//.then(({data}) => {console.log(data.charges[0]);})
//.catch(err => {console.log(err);});
//console.log(b);
//console.log('YE YE');

module.exports = {Boleto, ConsultaPagamento, ConsultaPagamentosCobrancas}
