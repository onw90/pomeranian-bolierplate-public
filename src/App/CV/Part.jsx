import './part.css';

export const Part = ({ cvPart, company, position, years, description }) => {
  return (
    <div className="part">
      <div className="left-employment-details">
        <h3 className="cv-company">{company}</h3>
        <p className="cv-position">{position}</p>
        <p className="cv-years">{years}</p>
      </div>
      <div className="right-description">
        <p className="cv-description">{description}</p>
      </div>
    </div>
  );
};
