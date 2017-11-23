const http = require('../support/http.js')

applyParamsToURL  = (url, obj) => {
  let localUrl = url;
  Object.keys(obj).forEach((key, index) => {
    if(obj[key] != null && key !== 'mode'){
      localUrl += `${index > 0 ? '&' : '?'}${key}=${obj[key]}`
    }
  });
  return localUrl;
}

doRequest = (url, obj, mode) => {
  return new Promise((resolve, reject) => {
    const localUrl =  applyParamsToURL(url, obj);
    http(mode).get(localUrl).then(response => {
      resolve(response.data);
    }).catch(error => {
      //console.log(error);
      reject(error);
    })
  })
}

module.exports = {applyParamsToURL, doRequest}
