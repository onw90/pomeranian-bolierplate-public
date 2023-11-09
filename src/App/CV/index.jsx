import { GoBackLink } from '../Components/GoBack/GoBack';
import { MainHeader } from '../Components/MainHeader';
import './styles.css';
import { PartsEducation, PartsExperience } from './Parts';
// import { MyInfo } from '../Components/MyInfo';
import { RoundImage } from '../Components/RoundImage';
import lineIcon from '../Images/line.svg';
// import { Skill } from './Skill';
import { Bloks } from './Bloks';
import inLogo from './in.svg';
import githubLogo from '../Images/tech-stack/githuub.svg';

const email = 'owaniczek.it@gmail.com';

export const CV = () => {
  return (
    <div className="cv">
      <MainHeader>Moje CV</MainHeader>
      <GoBackLink />

      <div className="cv-main-part">
        <div className="cv-left">
          <p className="cv-info">
            Poniżej znajdziesz informacje na temat mojego wykształcenia oraz
            doświadczenia
          </p>
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

        <div className="cv-right">
          <div className="cv-personal-links">
            <a href="https://www.linkedin.com/in/waniczekaleksandra/">
              <img alt="linkedin-logo" src={inLogo} />
            </a>
            <a href="https://github.com/onw90">
              <img alt="github-logo" src={githubLogo} />
            </a>
          </div>
          <p className="cv-name">Aleksandra Waniczek</p>
          {/* <p className="cv-phone">606-292-133</p> */}
          <div className="cv-right-contact-and-photo">
            <div className="cv-contact">
              <span className="cv-adress-label">e-mail </span>
              <a className="cv-mail" href={`mailto:${email}`}>
                {email}
              </a>
              <br />

              <span className="cv-adress-label">adres </span>
              <span className="cv-adress">Kraków, Myślenice, Małopolska</span>
              <br />
              <br />
            </div>
            <div className="cv-photo">
              <RoundImage
                url="https://media.licdn.com/dms/image/D4D03AQFHIG32CxPZNw/profile-displayphoto-shrink_800_800/0/1698699951569?e=1704931200&v=beta&t=P32MUq2jkzikLecF9-CKPfO9pB0YQxU3JG4NePbQkq4"
                size="120px"
              />
            </div>
          </div>
          <p className="cv-skills">Skills</p>
          <img alt="line" src={lineIcon} />
          <div className="cv-skills-set">
            <Bloks />
          </div>
          <div>
            <p className="cv-person-description">
              <i>
                Aspiring <b>Junior Frontend Developer</b> with a solid
                foundation in frontend programming, acquired through the{' '}
                <b>Pomeranian START.IT</b>
                course. My background as an experienced optometrist and optical
                engineer has equipped me with valuable skills in
                <b> data analysis</b>, surgical programming and clinical
                protocol development. I have worked with top refractive
                surgeons, fueling my interest in combining{' '}
                <b>statistical analysis</b> with real-time eye measurements for
                enhanced patient diagnostics. I have also excelled academically,
                receiving <b>numerous awards and scholarships</b> during my
                university years. I spent several months on an <b>Erasmus</b>{' '}
                student exchange program in Germany and Spain, which was an
                incredibly exciting experience. I am enthusiastic about
                leveraging my diverse background, scientific acumen and{' '}
                <b>technical mindset</b> in the <b>IT industry</b>, and I am
                confident that this unique skill set will make me a valuable
                frontend developer.
              </i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
