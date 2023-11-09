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
        <div className="cv-left">
          <div className="part-experience">
            <div className="experience-and-education">Experience</div>
            <div className="experience">
              <PartsExperience />
            </div>
          </div>
          <div className="part-education">
            <div className="experience-and-education">Education</div>
            <div className="education">
              <PartsEducation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
