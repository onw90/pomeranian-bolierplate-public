// import styles.css from './'

export const FunctionsZad = () => {
  const fun1 = (value) => {
    if (value === 0) return 0;
    if (value === 1) return 1;
    return fun1(value - 2) + fun1(value - 1);
  };
  console.log(fun1(1));
  //--------------------------------------------
  function fun2(...args) {
    let i = 0;
    for (const arg of args) {
      if (isNaN(arg)) {
        return 'złe wejście';
      } else {
        i = i + arg;
      }
    }
    return i;
  }
  // console.log(fun2(5, 3, 2));

  //-----------------------------------------------
  const fun3 = () => {};
  const fun4 = () => {};

  return (
    <>
      <div className="fun1">fun1(4) = {fun1(4)}</div>
      <div className="fun2">fun2(1,1,1) = {fun2(1, 1, 1)}</div>
      {/* <div className="fun3">fun3()</div> */}
      {/* <div className="fun4">fun4()</div> */}
    </>
  );
};
