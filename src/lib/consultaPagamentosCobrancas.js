const util = require('../support/util.js')

class ConsultaPagamentosCobrancas {
  constructor (token, mode = 'sandbox', beginDueDate = null,
    endDueDate = null, beginPaymentDate = null, endPaymentDate = null) {
    this.token = token;
    this.beginDueDate = beginDueDate;
    this.endDueDate = endDueDate;
    this.beginPaymentDate = beginPaymentDate;
    this.endPaymentDate = endPaymentDate;
    this.mode = mode;
  }

  listarCobrancas() {
    return util.doRequest('/boletofacil/integration/api/v1/list-charges',
    this, this.mode);
  }


}

module.exports = ConsultaPagamentosCobrancas
