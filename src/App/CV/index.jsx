import { GoBackLink } from '../Components/GoBack/GoBack';
import { MainHeader } from '../Components/MainHeader';
import './styles.css';
import { PartsEducation, PartsExperience } from './Parts';

export const CV = () => {
  return (
    <div className="cv">
      <MainHeader>Moje CV</MainHeader>
      <GoBackLink />
      <p>
        Poniżej znajdziesz informacje na temat mojego wykształcenia oraz
        doświadczenia
      </p>
      <div className="cv-main-part">
        <div className="cv-right">Experience</div>
        <PartsExperience />
        <div className="cv-right">Experience</div>
        <PartsEducation />
      </div>
    </div>
  );
};
