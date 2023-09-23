import { useEffect, useState } from 'react';
import './styles.css';
//----------------------------------------------------------------
export const OOP = () => {
  // klasa
  class Car {
    speed = 0;
    start() {
      console.log("I'm running at speed of ", this.speed);
    }
    constructor(speed) {
      this.speed = speed;
    }
  }

  // operator new tworzy instancję klasy
  const fastCar = new Car(300);
  fastCar.start();
  const averageCar = new Car(160);
  averageCar.start();

  //static - klasa statyczna
  class StaticCar {
    static speed = 0;
    static start() {
      console.log("I'm running at speed of ", this.speed);
    }
    constructor(speed) {
      this.speed = speed;
    }
  }
  // jezeli wszystkie metody i pola są statyczne to klasa jest statyczna
  StaticCar.speed = 4000;
  StaticCar.start();
  class NotACar {}
  const otherCar = new NotACar();
  // jezeli chcemy miec metoda ktoa jest zawsze dostepna to tworzymy klase static

  console.log('fastcar instanceof Car: ', fastCar instanceof Car);
  console.log('fastcar instanceof NotACar: ', fastCar instanceof NotACar);
  if (otherCar instanceof Car) {
    otherCar.start();
  }

  // polimorfizm////////////////////////////////////////////////
  // zdolność róznych klas do reagowania/wykonania metody o tej samej nazwie w rozny sposob

  class AnimalPoli {
    speak() {
      console.log('Animal makes a noise');
    }
  }

  class DogPoli extends AnimalPoli {
    speak() {
      console.log('Dog barks');
    }
  }
  const dogPoli = new DogPoli();

  class CatPoli extends AnimalPoli {
    speak() {
      console.log('Cat meows');
    }
  }
  const catPoli = new CatPoli();

  class CowPoli extends AnimalPoli {}
  const cowPoli = new CowPoli();
  // dogPoli.speak();
  // catPoli.speak();
  const animals = [dogPoli, catPoli, cowPoli];
  animals.forEach((animal) => {
    if (
      //(animal instanceof DogPoli || animal instanceof CatPoli) {
      animal instanceof AnimalPoli
    ) {
      animal.speak();
    }
  });

  // dziedziczenie///////////////////////////////////////
  // klasa nadrzędna AnimalParent
  // klasa podrzędna Dog
  class AnimalParent {
    constructor(name) {
      this.name = name;
    }
    getName() {
      return this.name;
    }
  }

  const animalP = new AnimalParent('Animal');
  console.log(animalP.getName());

  class Dog extends AnimalParent {
    bark() {
      return 'hał';
    }
    speak() {
      console.log(this.getName(), ' barks ', this.bark());
    }
  }

  const dog = new Dog('Reksio');
  dog.speak();

  // hermetyzacja////////////////////////////////////kontroluje co moze robić uzytkownik i nie psuje moich mechanizmow w klasie

  class AnimalPrivate {
    //prywatna właściwość - property, najlepiej z #
    #counter = 0;
    #name = '';
    constructor(name) {
      this.#name = name;
    }
    getName() {
      this.#counter += 1;
      console.log(`Name is: ${this.#name}, was called ${this.#counter} times`);
    }
    // prywatna metoda #
    #resetCounter() {
      this.#counter = 0;
    }
    setName(newName) {
      this.#name = newName;
      this.#resetCounter();
    }
  }

  const privateAnimal = new AnimalPrivate('Reksio');
  privateAnimal.getName();
  privateAnimal.getName();
  privateAnimal.getName();
  privateAnimal.setName('Maks');
  privateAnimal.getName();
  privateAnimal.getName();
  // nie da sie zrobic tak: privateAnimal.#counter = 0;

  // kompozycja //////////////////////////////////////////

  class A {
    constructor() {}
  }
  // przyklad dziedziczenie
  class AnimalInherit {
    speak() {
      console.log('Animal makes a sound');
    }
  }

  class DogInherit extends AnimalInherit {
    speak() {
      console.log('Dog barks');
    }
  }

  const dogInherit = new DogInherit();
  dogInherit.speak();

  //to samo przez kompozycje
  class SpeakerComposition {
    constructor(sound) {
      this.sound = sound;
    }
    makeSound() {
      console.log(this.sound);
    }
  }

  class DogComposition {
    constructor() {
      // obiekt
      this.speaker = new SpeakerComposition('hau');
    }
    bark() {
      //metoda wywoływana na obiekcie
      this.speaker.makeSound();
    }
  }

  const dogComposition = new DogComposition();
  dogComposition.bark();

  console.log(dogComposition, dogInherit);
  ///////////////////////
  return (
    <>
      <div className="oop">
        <h1>Klasy, OOP</h1>
        <h2>paradygmaty programowania</h2>
        <p>programowanie strukturalne, funkcjonalne i obiektowe</p>
        <h2>Object Oriented Programming </h2>
        <p>
          cechy OOP: abstrakcja, hermetyzacja, polimorfizm, dziedziczenie,
          kompozycja
        </p>
        <h2>Przykłady powyżej</h2>
      </div>
    </>
  );
};

// Zalety dziedziczenia:
//    Reużywalność: Możemy dziedziczyć istniejący kod i zachowanie.
//    Hierarchia: Pomaga tworzyć struktury klas na podstawie wspólnych cech.

// Zalety kompozycji:
//    Modularność: Komponenty są niezależne, co ułatwia zarządzanie i utrzymanie.
//    Elastyczność: Możemy zmieniać i modyfikować komponenty bez wpływu na inne.
//    Unikanie pułapek dziedziczenia: Kompozycja unika problemów związanych z głębokimi hierarchiami.

// Kiedy używać dziedziczenia, a kiedy kompozycji
//    Dziedziczenie: Wtedy, gdy klasy naprawdę mają relację typu nadrzędny-podrzędny, a podrzędna klasa może dziedziczyć i rozszerzać zachowanie klasy nadrzędnej.
//    Kompozycja: Wtedy, gdy chcemy tworzyć obiekty poprzez łączenie komponentów i uniknąć związanych z dziedziczeniem pułapek.

// Pułapki i ograniczenia związane z kompozycją:
//    Wiele instancji: Jeśli mamy wiele instancji obiektów komponujących te same komponenty, może to prowadzić do nadmiaru pamięci.
//    Trudniejsze śledzenie: W porównaniu do hierarchii dziedziczenia, trudniej może być zrozumieć, które komponenty są składane w obiekcie.

// LINKI POMOCNICZE:
// https://javascript.info/classes

// https://khalilstemmler.com/articles/object-oriented/programming/4-principles/
// https://www.techtarget.com/searchapparchitecture/definition/object-oriented-programming-OOP
// https://www.toptal.com/javascript/functional-programming-javascript
// https://javascript.plainenglish.io/what-are-javascript-programming-paradigms-3ef0f576dfdb
// https://www.w3schools.com/jsref/jsref_classes.asp
// https://www.geeksforgeeks.org/polymorphism-in-javascript/
// https://zacznijprogramowac.net/szybki-kurs-javascript/dziedziczenie-w-javascript/
// https://hackernoon.com/inheritance-vs-composition-in-javascript
// https://kursjs.pl/kurs/obiekty/obiekty-enkapsulacja
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes?retiredLocale=pl
// https://www.geeksforgeeks.org/differences-between-functional-components-and-class-components/
