const url = process.env.REACT_APP_AUTH_URL

const base64 = (string) => {
  return Buffer.from(string).toString('base64');
}

const makeClientAuthHeader = (clientId, clientSecret) => {
  return 'Basic ' + base64(`${clientId}:${clientSecret}`);
}

export const signinWithWechat = async(code) => {
  const headers = {
    'Authorization': makeClientAuthHeader('acme', 'acmesecret'),
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify({code: code}),
    });
    return response.json();
  }catch(e){
    console.log(e);
  }  
}

