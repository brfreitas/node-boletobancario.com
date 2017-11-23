const http = require('../support/http.js')

class ConsultaPagamento {

  constructor (paymentToken, mode = 'sandbox') {
    this.paymentToken = paymentToken;
    this.mode = mode;
  }

  consultar() {
    return util.doRequest('/boletofacil/integration/api/v1/fetch-payment-details',
    this, this.mode);
  }


}

module.exports = ConsultaPagamento
