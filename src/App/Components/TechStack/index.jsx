import './styles.css';
import { Stacks } from '../Stacks';
import { MainHeader } from '../MainHeader';
import { GoBackButton, GoBackLink } from '../GoBack/GoBack';

export function TechStack() {
  return (
    <>
      <div className="h6-tech-stacks">
        <MainHeader>Tech-stack</MainHeader>
        <p className="tech-stack-description">
          Poniżej znajdziesz tech stack oraz narzędzia, jakich nauczyłam się
          podczas kursu.
        </p>
        <GoBackLink />
      </div>
      <div className="tech-stacks">
        <Stacks />
      </div>
    </>
  );
}
