// import styles.css from './'

export const FunctionsZad = () => {
  const fun1 = () => {};

  //--------------------------------------------
  const fun2 = (...args) => {
    const newArray = [...args];
    const initialValue = 0;
    for (let arg in newArray) {
      if (isNaN(arg)) {
        return 'złe wejście';
      } else {
        const suma = newArray.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          initialValue
        );
        return suma;
      }
    }
  };
  console.log(fun2(zle, 2, 2));
  // Expected output: 10

  //-----------------------------------------------
  const fun3 = () => {};
  const fun4 = () => {};

  return (
    <>
      <div className="fun1">fun1()</div>
      <div className="fun2">{fun2(1, 1)}</div>
      <div className="fun3">fun3()</div>
      <div className="fun4">fun4()</div>
    </>
  );
};
