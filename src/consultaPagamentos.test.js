const {ConsultaPagamentosCobrancas} = require('./index')

function dataAtualFormatada(){
    var data = new Date();
    data.setDate(data.getDate() - 1);
    var dia = data.getDate();
    if (dia.toString().length == 1)
      dia = "0"+dia;
    var mes = data.getMonth()+1;
    if (mes.toString().length == 1)
      mes = "0"+mes;
    var ano = data.getFullYear();
    return dia+"/"+mes+"/"+ano;
}

test('Listagem de pagamentos', () => {
  const consulta = new ConsultaPagamentosCobrancas('197B09E95F100F48F73F606C0512F7BEFA40BB022FC2CFAD');
  consulta.beginDueDate = dataAtualFormatada();
  expect.assertions(1);
  return consulta.listarCobrancas().then(data => expect(data.success).toEqual(true));
});
