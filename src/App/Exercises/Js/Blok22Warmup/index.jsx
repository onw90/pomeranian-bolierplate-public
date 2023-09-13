//import { useState } from 'react';
import './styles.css';

export const Blok22Warmup = () => {
  // zadanie 1 -----------------------------------------------
  function concatArr(...args) {
    let newArray = [];
    for (const arg of args) {
      if (!Array.isArray(arg)) {
        console.log('zły parametr');
        return;
      } else {
        newArray = newArray.concat(arg);
      }
    }
    return newArray;
  }

  console.log(concatArr([1, 2], [3, 4], [0]));
  // -----------------------------------------------------------
  // zadanie 2 -------------------------------------------------
  const wagi = [
    { letter: 'A', score: 5 },
    { letter: 'E', score: 15 },
    { letter: 'I', score: 6 },
    { letter: 'O', score: 2 },
    { letter: 'U', score: 0 },
  ];

  // podaj imiona do wyliczenia punktacji:
  const imiona = ['Kasia', 'Justyna', 'Arnold', 'Ola', 'Michal', 'Ana'];

  // funkcja Punty() bierze imię i porównuje litery - zliczając pkty
  const Punkty = (imie, litery, punktacja) => {
    let score = 0;
    imie = imie.toUpperCase();
    const imieTab = [...imie];
    //console.log(imieTab);
    for (const litera of imieTab) {
      for (let i = 0; i < imieTab.length; i++)
        if (litera === litery[i]) {
          //  console.log(litery[i]);
          score += punktacja[i];
        }
    }
    return score;
  };

  //sortowanie alfabetycznie
  const Sortowanie = (newArray) => {
    newArray.sort((a, b) => {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
    return newArray;
  };

  const imionaWagi = (imiona, wagi) => {
    const litery = wagi.map((waga) => waga.letter);
    const punktacja = wagi.map((waga) => waga.score);
    const wynikArray = [];
    for (let i = 0; i < imiona.length; i++) {
      const enteImie = Punkty(imiona[i], litery, punktacja);
      console.log(enteImie);
      const wynik = { name: imiona[i].toLowerCase(), score: enteImie };
      wynikArray.push(wynik);
    }
    const newArray = [...wynikArray];
    return Sortowanie(newArray);
  };

  console.log(imionaWagi(imiona, wagi));

  //-------------------------------------------------------------
  return (
    <article>
      <h1>Rozgrzewka przed blokiem 22</h1>
      <section>
        <h2>Zadanie 1</h2>
        <p>
          napisz funkcję, która przyjmuje niezliczoną ilość argumentów - muszą
          to być tablice. Na przykład{' '}
        </p>
        <p>
          funkcja zwraca jedną tablicę z elementami wszystkich tablic podanych w
          argumencie.
        </p>
        <p>
          <code>
            concatArr([1, 2, 3], [4, 5], [8]) wynik [1, 2, 3, 4, 5, 8]
          </code>
        </p>
        <p>
          <code>concatArr([1, 2, 3], [4, 5], 'text') wynik "zły parametr"</code>
        </p>
      </section>
      <section>
        <h2>Zadanie 2</h2>
        <p>
          stwórz jako funkcję która przyjmuje 2 argumenty imiona oraz
          wagę/punktację.
        </p>
        <p>
          Zwraca posortowaną tablice imion z dodanym parametrem sumaWag
          niemutujaca oryginalnej
        </p>
        <p>
          <code>const wagi = {JSON.stringify(wagi)}</code>
        </p>
        <p>
          <code>{`imionaWagi(["Janek", "Zosia"], wagi)`}</code>
        </p>
        <p>
          wynik{' '}
          <code>{`[{name: "janek", score: 20}, {name:
"zosia", score: 13}]`}</code>
        </p>
      </section>
    </article>
  );
};
