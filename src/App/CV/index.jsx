import { GoBackLink } from '../Components/GoBack/GoBack';
import { MainHeader } from '../Components/MainHeader';
import './styles.css';

export const CV = () => {
  return (
    <div className="cv">
      <MainHeader>Moje CV</MainHeader>
      <GoBackLink />
      {/* <p>Strona zawierajaca moje CV</p> */}
    </div>
  );
};
