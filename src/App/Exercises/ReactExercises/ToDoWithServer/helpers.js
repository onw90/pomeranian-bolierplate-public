export const RequestHandler = async (selectedMethod, id, data) => {
  
  return new Promise(async (resolve, reject) => {
    const serverUrl = 'http://localhost:3333/api/todo';
    let endOfUrl = '';
    let body; //undefined
    if (id) {
      endOfUrl = `/${id}`;
    }
    if( selectedMethod !== 'GET' ){
      body=JSON.stringify(data); // zmienia data na string JSONowy
    }

    const response = await fetch(`${serverUrl}${endOfUrl}`, {
      method: selectedMethod,
      headers: {
        'Content-Type': 'application/json',
      },
      body
    });
    const jsonResponse = await response.json(); // response - wynik wyslania zapytania do serwera, jesli response status - nie jest błędem to zwróć response w JSONIE
    if (response.status === 200) {
      resolve(jsonResponse);
    }
    if (response.status !== 200) {
      reject(jsonResponse);
    }
  });
};
