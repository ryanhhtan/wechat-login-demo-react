const url = 'http://devroro.my:4444/login/wechat';

const base64 = (string) => {
  return Buffer.from(string).toString('base64')
}

const makeClientAuthHeader = (clientId, clientSecret) => {
  return 'Basic ' + base64(`${clientId}:${clientSecret}`);
}

export const signupWithWechat = async(code) => {
  const headers = {
    'Authorization': makeClientAuthHeader('acme', 'acmesecret'),
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  try {
    const result =  await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify({code: code}),
    });

    return result.json();

  }catch(e){
    console.log(e);
  }  
}
