const {Boleto} = require('./index')

test('Geração de boleto', () => {
  const boleto = new Boleto('197B09E95F100F48F73F606C0512F7BEFA40BB022FC2CFAD',
  "Pedido1791", 12.7, 'Nome Sobrenome', '94648945123');
  expect.assertions(1);
  return boleto.gerarCobranca().then(data => expect(data.success).toEqual(true));
})
