import { Button } from '../../../Components/Button';
//import { useState } from 'react';

export function CookieStorage() {
  const setCookies = () => {
    setCookie('login', 'ola', 1);
    setCookie('email', 'artur@artur.pl', 2);
  };
  // "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
  const setCookie = (cname, cvalue, exdays) => {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  };
  const getCookie = () => {
    const cookies = document.cookie.split('; ');
    const cookieData = {};

    for (const cookie of cookies) {
      const [name, value] = cookie.split('=');
      cookieData[name] = value;
    }
    console.log('cookieData:', cookieData);
    console.log(cookieData.login);
  };

  return (
    <div>
      <h3>Cookie Storage example</h3>
      <Button onClick={setCookies}>Save</Button>
      <br></br>
      <br></br>
      <Button onClick={getCookie}>Get</Button>
    </div>
  );
}

// -----------------------------------------------------------------------------
// LINKI POMOCNICZE
// -----------------------------------------------------------------------------

// https://www.oracle.com/pl/database/what-is-json/
// https://developer.mozilla.org/en-US/docs/Glossary/XML
// https://appmaster.io/blog/json-vs-xml
// https://www.w3schools.com/js/js_json_stringify.asp
// https://frontstack.pl/czym-jest-local-storage-i-jak-uzywac/
// https://www.w3schools.com/jsref/prop_win_sessionstorage.asp
// https://www.geeksforgeeks.org/difference-between-local-storage-session-storage-and-cookies
// https://www.w3schools.com/js/js_cookies.asp
// https://javascript.info/eval
// https://javascript.info/json
// https://developer.mozilla.org/en-US/docs/Web/Guide/Parsing_and_serializing_XML
// https://geshan.com.np/blog/2022/11/nodejs-xml-parser/
