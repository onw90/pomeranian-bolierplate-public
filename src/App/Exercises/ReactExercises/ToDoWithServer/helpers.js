export const RequestHandler = async (selectedMethod, id, data) => {
  
  return new Promise(async (resolve, reject) => {
    const serverUrl = 'http://localhost:3333/api/todo';
    let endOfUrl = '';
    let body; //undefined
    if (id) {
      endOfUrl = `/${id}`;
    }
    if(selectedMethod !== 'GET'){
      body=JSON.stringify(data);
    }

    const response = await fetch(`${serverUrl}${endOfUrl}`, {
      method: selectedMethod,
      headers: {
        'Content-Type': 'application/json',
      },
      body
    });
    const jsonResponse = await response.json();
    if (response.status === 200) {
      resolve(jsonResponse);
    }
    if (response.status !== 200) {
      reject(jsonResponse);
    }
  });
};
