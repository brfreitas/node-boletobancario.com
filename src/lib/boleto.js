const http = require('../support/http.js')

class Boleto {
  constructor (token, description,
    amount, payerName, payerCpfCnpj, mode = 'sandbox', reference = null, dueDate = null,
    installments = null, maxOverdueDays = null, fine = null, interest = null,
    discountAmount = null, discountDays = null, payerEmail = null,
    payerSecondaryEmail = null, payerPhone = null, payerBirthDate = null,
    billingAddressStreet = null, billingAddressNumber = null,
    billingAddressComplement = null, billingAddressCity = null,
    billingAddressState = null, billingAddressPostcode = null,
    notifyPayer = null, notificationUrl = null,
    feeSchemaToken = null, splitRecipient = null) {
    this.token = token;
    this.description = description;
    this.amount = amount;
    this.payerName = payerName;
    this.payerCpfCnpj = payerCpfCnpj;
    this.mode = mode;
    this.reference = reference;
    this.dueDate = dueDate;
    this.installments = installments;
    this.maxOverdueDays = maxOverdueDays;
    this.fine = fine;
    this.interest = interest;
    this.discountAmount = discountAmount;
    this.discountDays = discountDays;
    this.payerEmail = payerEmail;
    this.payerSecondaryEmail = payerSecondaryEmail;
    this.payerPhone = payerPhone;
    this.payerBirthDate = payerBirthDate;
    this.billingAddressStreet = billingAddressStreet;
    this.billingAddressNumber = billingAddressNumber;
    this.billingAddressComplement = billingAddressComplement;
    this.billingAddressCity = billingAddressCity;
    this.billingAddressState = billingAddressState;
    this.billingAddressPostcode = billingAddressPostcode;
    this.notifyPayer = notifyPayer;
    this.notificationUrl = notificationUrl;
    this.feeSchemaToken = feeSchemaToken;
    this.splitRecipient = splitRecipient;
  }

  urlCobanca() {
    return '/boletofacil/integration/api/v1/issue-charge';
  }

  gerarCobranca() {
    return new Promise((resolve, reject) => {
      let url = this.urlCobanca()
      Object.keys(this).forEach((key, index) => {
        if(query[key] != null && key !== 'mode'){
          url += `${index > 0 ? '&' : '?'}${key}=${query[key]}`
        }
      });
      http(this.getMode()).get(url).then(response => {
        resolve(response.data);
      }).catch(error => {
        reject(error);
      })
    })
  }
}

module.exports = Boleto
