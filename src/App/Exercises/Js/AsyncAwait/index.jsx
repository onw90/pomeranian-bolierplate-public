//----------------------------------------------------------------
//import { useState, useEffect } from 'react';
import { PromisyExample1 } from './PromisyExample1';
import { PromisyExample2 } from './PromisyExample2';
import { PromisyExample3 } from './PromisyExample3';
import { PromisyExample4 } from './PromisyExample4';

export const AsyncAwait = () => {
  //
  /////////////////////////////////
  return (
    <>
      <div className="promises-and-me">
        <h1>Async, Await, Promise methods</h1>
        <h2>Powtórka z poprzednich zajeć</h2>
        <PromisyExample1 />
        <PromisyExample2 />
        <PromisyExample3 />
        <PromisyExample4 />
      </div>
    </>
  );
};
