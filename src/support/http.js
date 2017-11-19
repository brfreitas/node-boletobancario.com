const axios = require('axios')


class Http  {
  constructor (mode) {
    let _mode = mode
    this.setMode = (mode) => { _mode = mode };
    this.getMode = () => _mode;
  }

  baseUrl() {
    if (this.getMode() === 'sandbox') {
      return 'https://sandbox.boletobancario.com'
    }
    return 'https://www.boletobancario.com'
  }

  getInstance(){
    return axios.create({
      baseURL: this.baseUrl()
    });
  }
}

module.exports = (mode) => { return new Http(mode).getInstance() }
