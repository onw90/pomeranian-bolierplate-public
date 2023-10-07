import { useRef } from 'react';

export const UncontrolledForm = () => {
  const myRef = useRef(null);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
    console.log(myRef?.current);
    console.log(myRef?.current.value);
    myRef.current.value = 'byebye';
    console.log('event.target', event.target);
    for (const element of event.target) {
      console.log(element.name, element.value);
    }
  };

  return (
    <>
      {' '}
      <h2>uncontrolled component</h2>
      <form onSubmit={handleOnSubmit}>
        <input name="with-ref" type="text" ref={myRef} />
        <input name="without-ref" type="text" />
        <button name="button" type="submit">
          Submit
        </button>{' '}
      </form>
    </>
  );
};
