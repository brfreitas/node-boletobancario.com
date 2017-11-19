const http = require('../support/http.js')

class ConsultaPagamento {
  constructor (paymentToken, mode = 'sandbox') {
    let _paymentToken = paymentToken;
    this.setPaymentToken = (paymentToken) => { _paymentToken = paymentToken };
    this.getPaymentToken = () => _paymentToken;
    let _mode = mode;
    this.setMode = (mode) => { _mode = mode };
    this.getMode = () => _mode;
  }

  urlConsulta() {
    return '/boletofacil/integration/api/v1/fetch-payment-details'
  }

  toJson() {
    const obj = {};
    obj.paymentToken = this.getPaymentToken();
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

exports.ConsultaPagamento = ConsultaPagamento
