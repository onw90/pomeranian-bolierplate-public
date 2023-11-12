import { Link, useNavigate } from 'react-router-dom';
import arrowIcon from '../../Images/arrow-square.svg';
import './styles.css';

export const GoBackLink = ({ label }) => {
  return (
    <>
      {/* <Link to=".." relative="path" className="cofnij-img">
        {label || (
          <img className="go-back-icon" src={arrowIcon} alt="go-back-icon" />
        )}
      </Link> */}
      <Link to=".." relative="path" className="cofnij-button">
        {label || 'Cofnij'}
      </Link>
    </>
  );
};

export const GoBackButton = () => {
  const navigate = useNavigate();

  return <button onClick={() => navigate(-1)}>go back</button>;
};
