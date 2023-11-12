import { GoBackLink } from '../GoBack/GoBack';
import './styles.css';
import arrowIcon from '../../Images/arrow-square.svg';
import { Link, useNavigate } from 'react-router-dom';
export const MainHeader = (props, { label }) => {
  // moze byc MainHeader = ({value}) => {}
  const { children } = props; // sposob wyciagania zmiennej value z obiektu props
  // Ola = {imie: 'Ola'};
  // const { imie } = Ola;
  // console.log(Ola.imie);
  // console.log('imie',imie);
  return (
    <>
      <div>
        <h1 className="main-header">&lt; {children} </h1>
        <GoBackLink />
      </div>
      <div className="mobile-header">
        <Link to=".." relative="path" className="cofnij-img">
          {label || (
            <img className="go-back-icon" src={arrowIcon} alt="go-back-icon" />
          )}
        </Link>
        <span className="mobile-header-name">{children}</span>
      </div>
    </>
  );
};
