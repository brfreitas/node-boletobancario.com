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
    let _token = token;
    this.setToken = (token) => { _token = token };
    this.getToken = () => _token;
    let _description = description;
    this.setDescription = (description) => { _description = description };
    this.getDescription = () => _description;
    let _amount = amount;
    this.setAmount = (amount) => { _amount = amount };
    this.getAmount = () => _amount;
    let _payerName = payerName;
    this.setPayerName = (payerName) => { _payerName = payerName };
    this.getPayerName = () => _payerName;
    let _payerCpfCnpj = payerCpfCnpj;
    this.setPayerCpfCnpj = (payerCpfCnpj) => { _payerCpfCnpj = payerCpfCnpj };
    this.getPayerCpfCnpj = () => _payerCpfCnpj;
    let _mode = mode;
    this.setMode = (mode) => { _mode = mode };
    this.getMode = () => _mode;
    let _reference = reference;
    this.setReference = (reference) => { _reference = reference };
    this.getReference = () => _reference;
    let _dueDate = dueDate;
    this.setDueDate = (dueDate) => { _dueDate = dueDate };
    this.getDueDate = () => _dueDate;
    let _installments = installments;
    this.setInstallments = (installments) => { _installments = installments };
    this.getInstallments = () => _installments;
    let _maxOverdueDays = maxOverdueDays;
    this.setMaxOverdueDays = (maxOverdueDays) => { _maxOverdueDays = maxOverdueDays };
    this.getMaxOverdueDays = () => _maxOverdueDays;
    let _fine = fine;
    this.setFine = (fine) => { _fine = fine };
    this.getFine = () => _fine;
    let _interest = interest;
    this.setInterest = (interest) => { _interest = interest };
    this.getInterest = () => _interest;
    let _discountAmount = discountAmount;
    this.setDiscountAmount = (discountAmount) => { _discountAmount = discountAmount };
    this.getDiscountAmount = () => _discountAmount;
    let _discountDays = discountDays;
    this.setDiscountDays = (discountDays) => { _discountDays = discountDays };
    this.getDiscountDays = () => _discountDays;
    let _payerEmail = payerEmail;
    this.setPayerEmail = (payerEmail) => { _payerEmail = payerEmail };
    this.getPayerEmail = () => _payerEmail;
    let _payerSecondaryEmail = payerSecondaryEmail;
    this.setPayerSecondaryEmail = (payerSecondaryEmail) => { _payerSecondaryEmail = payerSecondaryEmail };
    this.getPayerSecondaryEmail = () => _payerSecondaryEmail;
    let _payerPhone = payerPhone;
    this.setPayerPhone = (payerPhone) => { _payerPhone = payerPhone };
    this.getPayerPhone = () => _payerPhone;
    let _payerBirthDate = payerBirthDate;
    this.setPayerBirthDate = (payerBirthDate) => { _payerBirthDate = payerBirthDate };
    this.getPayerBirthDate = () => _payerBirthDate;
    let _billingAddressStreet = billingAddressStreet;
    this.setBillingAddressStreet = (billingAddressStreet) => { _billingAddressStreet = billingAddressStreet };
    this.getBillingAddressStreet = () => _billingAddressStreet;
    let _billingAddressNumber = billingAddressNumber;
    this.setBillingAddressNumber = (billingAddressNumber) => { _billingAddressNumber = billingAddressNumber };
    this.getBillingAddressNumber = () => _billingAddressNumber;
    let _billingAddressComplement = billingAddressComplement;
    this.setBillingAddressComplement = (billingAddressComplement) => { _billingAddressComplement = billingAddressComplement };
    this.getBillingAddressComplement = () => _billingAddressComplement;
    let _billingAddressCity = billingAddressCity;
    this.setBillingAddressCity = (billingAddressCity) => { _billingAddressCity = billingAddressCity };
    this.getBillingAddressCity = () => _billingAddressCity;
    let _billingAddressState = billingAddressState;
    this.setBillingAddressState = (billingAddressState) => { _billingAddressState = billingAddressState };
    this.getBillingAddressState = () => _billingAddressState;
    let _billingAddressPostcode = billingAddressPostcode;
    this.setBillingAddressPostcode = (billingAddressPostcode) => { _billingAddressPostcode = billingAddressPostcode };
    this.getBillingAddressPostcode = () => _billingAddressPostcode;
    let _notifyPayer = notifyPayer;
    this.setNotifyPayer = (notifyPayer) => { _notifyPayer = notifyPayer };
    this.getNotifyPayer = () => _notifyPayer;
    let _notificationUrl = notificationUrl;
    this.setNotificationUrl = (notificationUrl) => { _notificationUrl = notificationUrl };
    this.getNotificationUrl = () => _notificationUrl;
    let _feeSchemaToken = feeSchemaToken;
    this.setFeeSchemaToken = (feeSchemaToken) => { _feeSchemaToken = feeSchemaToken };
    this.getFeeSchemaToken = () => _feeSchemaToken;
    let _splitRecipient = splitRecipient;
    this.setSplitRecipient = (splitRecipient) => { _splitRecipient = splitRecipient };
    this.getSplitRecipient = () => _splitRecipient;
  }


  urlCobanca() {
    return '/boletofacil/integration/api/v1/issue-charge'
  }

  toJson() {
    const obj = {};
    obj.token = this.getToken();
    obj.description = this.getDescription();
    obj.amount = this.getAmount();
    obj.payerName = this.getPayerName();
    obj.payerCpfCnpj = this.getPayerCpfCnpj();
    if (this.getReference() !== null) {
      obj.reference = this.getReference();
    }
    if (this.getDueDate() !== null) {
      obj.dueDate = this.getDueDate();
    }
    if (this.getInstallments() !== null) {
      obj.installments = this.getInstallments();
    }
    if (this.getMaxOverdueDays() !== null) {
      obj.maxOverdueDays = this.getMaxOverdueDays();
    }
    if (this.getFine() !== null) {
      obj.fine = this.getFine();
    }
    if (this.getInterest() !== null) {
      obj.interest = this.getInterest();
    }
    if (this.getDiscountAmount() !== null) {
      obj.discountAmount = this.getDiscountAmount();
    }
    if (this.getDiscountDays() !== null) {
      obj.discountDays = this.getDiscountDays();
    }
    if (this.getPayerEmail() !== null) {
      obj.payerEmail = this.getPayerEmail();
    }
    if (this.getPayerSecondaryEmail() !== null) {
      obj.payerSecondaryEmail = this.getPayerSecondaryEmail();
    }
    if (this.getPayerPhone() !== null) {
      obj.payerPhone = this.getPayerPhone();
    }
    if (this.getPayerBirthDate() !== null) {
      obj.payerBirthDate = this.getPayerBirthDate();
    }
    if (this.getBillingAddressStreet() !== null) {
      obj.billingAddressStreet = this.getBillingAddressStreet();
    }
    if (this.getBillingAddressNumber() !== null) {
      obj.billingAddressNumber = this.getBillingAddressNumber();
    }
    if (this.getBillingAddressComplement() !== null) {
      obj.billingAddressComplement = this.getBillingAddressComplement();
    }
    if (this.getBillingAddressCity() !== null) {
      obj.billingAddressCity = this.getBillingAddressCity();
    }
    if (this.getBillingAddressState() !== null) {
      obj.billingAddressState = this.getBillingAddressState();
    }
    if (this.getBillingAddressPostcode() !== null) {
      obj.billingAddressPostcode = this.getBillingAddressPostcode();
    }
    if (this.getNotifyPayer() !== null) {
      obj.notifyPayer = this.getNotifyPayer();
    }
    if (this.getNotificationUrl() !== null) {
      obj.notificationUrl = this.getNotificationUrl();
    }
    if (this.getFeeSchemaToken() !== null) {
      obj.feeSchemaToken = this.getFeeSchemaToken();
    }
    if (this.getSplitRecipient() !== null) {
      obj.splitRecipient = this.getSplitRecipient();
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

module.exports = Boleto
