import { CookieStorage } from './CookieStorage';
import { LocalStorage } from './LocalStorage';
import { SessionStorage } from './SessionStorage';

export const JsonXMLStorage = () => {
  // parsowanie (deserializacja)
  // zamiana z tekstu na obiekt w js
  const jsonString = `{
    "name": "John",
    "surname": "Doe",
    "age": 30,
    "cars": ["Ford", "BMW", "Fiat"],
    "isAdult": true
  }`;
  const parsedJson = JSON.parse(jsonString);
  // serializacja
  // zamiana obiektu z JS na tekst w formacie JSON
  const obiektDoSerializacji = {
    name: 'John',
    age: 100,
    cars: [],
  };
  const poSerializacji = JSON.stringify(obiektDoSerializacji);
  // przyklady inne
  const emptyValue = null;
  console.log('emptyValue po serializacji', JSON.stringify(emptyValue));
  console.log(
    'emptyValue po deserializacji',
    JSON.parse(JSON.stringify(emptyValue))
  );
  const undefinedValue = undefined;
  console.log('undefinedValue po serializacji', JSON.stringify(undefinedValue));
  // nie da sie undefined deserializować!!!
  // console.log(
  //   'emptyValue po deserializacji',
  //   JSON.parse(JSON.stringify(undefinedValue))
  // );

  // const currencies = {
  //   lastUpdate: '2004',
  //   curreincies: [
  //     { name: 'dollar', unit: 1, country: 'USA' },
  //     { name: 'eur', unit: 1, country: 'EUM' },
  //   ],
  // };
  //////////////////////////

  ///////////////////////////
  return (
    <div>
      <LocalStorage />
      <SessionStorage />
      <CookieStorage />
      <h1>JSON</h1>
      <h2>JSON kim jest JSON?</h2>
      <p>JavaScript Object Notation</p>
      <p>lekki format wymiany danych</p>
      <p>wykorzystywany jest przez rózne jezyki programowania</p>
      <p>The JSON Format Evaluates to JavaScript Objects</p>
      <p>Internet Media Type = application JSON (formerly named MIME type)</p>
      <p>rozszerzenie pliku .json</p>
      <h2>Parsowanie</h2>
      <p>{jsonString}</p>
      <p>parsowanie - deserializacja, przykład: {parsedJson.name}</p>
      <p>stringify - serializacja, przykład: {poSerializacji}</p>
      <p></p>
      <h2>XML</h2>
      <p>
        XML (ang. Extensible Markup Language, rozszerzalny język znaczników)
        uniwersalny język znaczników przeznaczony do reprezentowania różnych
        danych w strukturalizowany sposób.
      </p>
      <p></p>
      <h2>Storage</h2>
      <ul>
        <li>LocalStorage - nie trafiają do serwera</li>
        <li>SessionStorage - nie trafiają do serwera</li>
        <li>CookiesStorage - trafiają do serwera</li>
      </ul>
    </div>
  );
};
