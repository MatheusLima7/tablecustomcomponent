const baseURL = 'http://167.99.153.188';

const checkStatus = (response) => {
  if(response.status >= 200 && response.status < 300) {
    return response;
  }
  else {
    let error = new Error(response._bodyInit);
    error.response = response.json();
    throw error;
  }
}
const parseJSON = response => response.json()

export const api = {
  put: async (url, data) => {
    let headers = await buildHeaders();
    return await fetch(baseURL + url, {
      method: 'PUT',
      headers,  
      body: data
    }).then(checkStatus).then(parseJSON)
  },
  get: async (url) => {
    // let headers = await buildHeaders();
    return fetch(baseURL + url, {
      method: 'GET',
      // headers
   }).then(checkStatus).then(parseJSON)
  },
  post: async (url, data) => {
    let headers = await buildHeaders();
     return await fetch(baseURL + url, {
      method: 'POST',
      headers,
      body: JSON.stringify(data)
   }).then(checkStatus).then(parseJSON)
  },
  patch: async (url, data) => {
    let headers = await buildHeaders();
     return await fetch(baseURL + url, {
      method: 'PATCH',
      headers,
      body: JSON.stringify(data)
   }).then(checkStatus).then(parseJSON)
  },
  delete: async (url) => {
    let headers = await buildHeaders();
    return fetch(baseURL + url, {
      method: 'DELETE',
      headers
   }).then(checkStatus).then(parseJSON)
  }
}