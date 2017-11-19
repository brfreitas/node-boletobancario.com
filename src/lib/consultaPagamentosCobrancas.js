const http = require('../support/http.js')

class ConsultaPagamentosCobrancas {
  constructor (token, mode = 'sandbox', beginDueDate = null,
    endDueDate = null, beginPaymentDate = null, endPaymentDate = null) {
    let _token = token;
    this.setToken = (token) => { _token = token };
    this.getToken = () => _token;
    let _beginDueDate = beginDueDate;
    this.setBeginDueDate = (beginDueDate) => { _beginDueDate = beginDueDate };
    this.getBeginDueDate = () => _beginDueDate;
    let _endDueDate = endDueDate;
    this.setEndDueDate = (endDueDate) => { _endDueDate = endDueDate };
    this.getEndDueDate = () => _endDueDate;
    let _beginPaymentDate = beginPaymentDate;
    this.setBeginPaymentDate = (beginPaymentDate) => { _beginPaymentDate = beginPaymentDate };
    this.getBeginPaymentDate = () => _beginPaymentDate;
    let _endPaymentDate = endPaymentDate;
    this.setEndPaymentDate = (endPaymentDate) => { _endPaymentDate = endPaymentDate };
    this.getEndPaymentDate = () => _endPaymentDate;
    let _mode = mode;
    this.setMode = (mode) => { _mode = mode };
    this.getMode = () => _mode;
  }

  urlConsulta() {
    return `/boletofacil/integration/api/v1/list-charges`
  }

  toJson() {
    const obj = {};
    obj.token = this.getToken();

    if (this.getBeginDueDate() !== null) {
      obj.beginDueDate = this.getBeginDueDate();
    }
    if (this.getEndDueDate() !== null) {
      obj.endDueDate = this.getEndDueDate();
    }
    if (this.getBeginPaymentDate() !== null) {
      obj.beginPaymentDate = this.getBeginPaymentDate();
    }
    if (this.getEndPaymentDate() !== null) {
      obj.endPaymentDate = this.getEndPaymentDate();
    }
    return obj
  }

  gerarCobranca() {
    return new Promise((resolve, reject) => {
      let url = this.urlCobanca()
      const query = this.toJson()
      Object.keys(query).forEach((key, index) => {
        url += `${index > 0 ? '&' : '?'}${key}=${query[key]}`
      })

      http(this.getMode()).get(url).then(response => {
        resolve(response.data);
      }).catch(error => {
        reject(error);
      })
    })

  }


}

exports.ConsultaPagamentosCobrancas = ConsultaPagamentosCobrancas
