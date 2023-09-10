import './styles.css';

export const MainHeader = (props) => {
  // moze byc MainHeader = ({value}) => {}
  const { children } = props; // sposob wyciagania zmiennej value z obiektu props
  // Ola = {imie: 'Ola'};
  // const { imie } = Ola;
  // console.log(Ola.imie);
  // console.log('imie',imie);
  return <h1 className="main-header">&lt; {children} </h1>; //&gt children - zmienna ...?
};
