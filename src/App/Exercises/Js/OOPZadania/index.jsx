import { useEffect, useState } from 'react';
import './styles.css';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';
//----------------------------------------------------------------
export const OOPZadania = () => {
  //   ZADANIE 1.
  //   Stworzymy klasę komputera z poniższymi właściwościami:
  //         prywatną zmienną (ulubione słowo) - faveWord = "I compute!"
  //         prywatną metodę - add(x: number, y: number) - która zwraca sumę x i y
  //         publiczną metodę compute - która przyjmuje 3 argumenty: 2 liczby, które chcemy do siebie dodać, oraz
  //         argument typu number, który pomnoży wynik dodawania dwóch poprzednich argumentów ( wewnątrz użyć metody add )
  //         publiczną metodę introduce() - która wyprintuje ulubione słowo
  //         poużywaj metod mini komputera

  class Computer {
    #faveWord = 'I compute';
    #add(x, y) {
      return x + y;
    }
    compute(a, b, c) {
      return c * this.#add(a, b);
    }
    introduce() {
      console.log(this.#faveWord);
    }
  }

  const newComp = new Computer();

  console.log(newComp.compute(2, 2, 2));
  newComp.introduce();

  //
  //   ZADANIE 2.
  //   stwórz klasę Person posiadającą metodę, która wyświetli nam komunikat
  //            introduce() => "I am a Person"
  //        następnie stwórz dwie podklasy Builder i Doctor, dziedziczące metodę i wyświetlające odpowiednio komunikat
  //            introduce() => "I am a Person", "I am also a Doctor"
  //            introduce() => "I am a Person", "I am also a Builder"
  //        następnie stwórz podklasę Doctor: Pediatrician - metoda ma wyświetlić jedynie :
  //        introduce() => "I'm a Pediatrician"

  class Person {
    introduce() {
      console.log('I am a Person');
    }
  }

  class Builder extends Person {
    introduce() {
      super.introduce();
      console.log('I am also a Builder');
    }
  }

  class Doctor extends Person {
    introduce() {
      //wywolanie metody z klasy nadrzednej
      super.introduce();
      console.log('I am also a Doctor');
    }
  }

  class Pediatrician extends Doctor {
    introduce() {
      //super.introduce();
      console.log('I am also a Pediatrician');
    }
  }

  const newPerson = new Person();
  newPerson.introduce();
  const persons = [new Doctor(), new Pediatrician(), new Builder()];
  persons.forEach((person) => {
    if (person instanceof Person) {
      person.introduce();
    }
  });
  /////

  //   ZADANIE 3.
  //   Tworzymy samochód w podejściu kompozycyjnym!
  //     + klasa Engine
  //     + start() => "engine is turned on
  //     + stop() => "engine is turned off
  //      klasa Klaxon
  //      beep() => "BEEEP!"
  //      klasa SteeringWheel
  //      turn(direction: string) => "Skręcamy w lewo/prawo
  //      klasa GPS
  //      navigate() => wyprintuje nam losowo: "turn right", "turn left", "drive straight"
  //      stwórz klasę Car, która posiada metody: start, stop, beep, turn, navigate
  //      w klasie Car powywołuj metody poszczególnych części auta

  class Engine {
    start() {
      return 'engine is turned on';
    }
    stop() {
      return 'engine is turned off';
    }
  }

  class Klaxon {
    beep() {
      return 'BEEEP!';
    }
  }
  class SteeringWheel {
    turn(direction) {
      return `Skręcamy w ${direction}`;
    }
  }

  class GPS {
    navigate() {
      const directions = ['turn right', 'turn left', 'drive straight'];
      // losuje liczbe od 0 do 2.9999.. i zaokrafgla w dół czyli max do 2
      const mathRandomIndex = Math.floor(Math.random() * directions.length);
      return directions[mathRandomIndex];
    }
  }

  class Car {
    constructor() {
      this.engine = new Engine();
      this.klaxon = new Klaxon();
      this.steeringwheel = new SteeringWheel();
      this.gps = new GPS();
    }
    start() {
      return this.engine.start();
    }
    stop() {
      return this.engine.stop();
    }
    beep() {
      return this.klaxon.beep();
    }
    turn(direction) {
      return this.steeringwheel.turn(direction);
    }
    navigate() {
      return this.gps.navigate();
    }
  }

  const newCar = new Car();
  console.log(newCar.start());
  console.log(newCar.stop());
  console.log(newCar.beep());
  console.log(newCar.turn('turn right'));
  console.log(newCar.navigate());
  console.log(newCar.turn(newCar.navigate()));

  //////////////////////////////////////////////////
  return (
    <>
      <div className="oop">
        <h1>OOP- zadania</h1>
      </div>
    </>
  );
};
