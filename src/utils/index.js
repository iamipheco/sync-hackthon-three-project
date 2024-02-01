export const APIURL = 'https://flowease.onrender.com/api'
export const TOKEN_KEY = '$$flowease_toke'

export const fetchApi = async url => {
    try {
      const request = await fetch(`${APIURL}/${url}`);
      return request.json();
    } catch (error) {
      return error;
    }
  };
  
  export const postApi = async (url, data = {}) => {
    try {
      console.log('Payload', data, APIURL, url);
      const request = await fetch(`${APIURL}/${url}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
      });
      return await request.json();
    } catch (error) {
      return error;
    }
  };
  
  export const deleteApi = async (url, data = {}) => {
    try {
      const request = await fetch(`${APIURL}/${url}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data ? JSON.stringify(data) : null,
      });
      return request.json();
    } catch (error) {
      return error;
    }
  };
  
  export const updateApi = async (url = '', data = []) => {
    try {
      const request = await fetch(`${APIURL}/${url}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return request.json();
    } catch (error) {
      return error;
    }
  };

  export const authenticatedFetchApi = async (url) => {
    try {
      const token = localStorage.getItem(TOKEN_KEY);
      console.log('NEW_REQ', {
        type: 'GET',
        url: `${APIURL}/${url}`,
        // token,
      });
      const request = await fetch(`${APIURL}/${url}`, {
        method: 'GET',
        headers: {
          Authorization: token,
        },
      });
      let serializedResponse = await request.json();
      return serializedResponse;
    } catch (error) {
      return error;
    }
  };