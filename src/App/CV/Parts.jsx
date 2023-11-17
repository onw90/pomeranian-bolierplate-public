import {
  Alicante,
  Aptiv,
  Bellevue,
  ClinicaOptica,
  Engineer,
  Kassel,
  Master,
  Pomeranian,
  Vidium,
} from './Description';
import { Part } from './Part';
const partsExp = [
  {
    company: 'Pomeranian START.IT',
    position: 'Junior Frontend Developer',
    years: '07/2023 – 10/2023',
    description: <Pomeranian />,
  },
  {
    company: 'Aptiv',
    position: 'Optical Engineer',
    years: '03/2022 – present',
    description: <Aptiv />,
  },
  {
    company: 'Vidium Medica',
    position: 'Lead Optometrist & Team Manager',
    years: '10/2015 – 01/2022',
    description: <Vidium />,
  },
  {
    company: 'Bellevue Optique',
    position: 'Certified Optician',
    years: '02/2013 – 12/2014',
    description: <Bellevue />,
  },
  {
    company:
      'Department of Optics, Pharmacology and Anatomy - Optometry Clinic University of Alicante (Spain)',
    position: 'Intern',
    years: '08/2014 – 10/2014',
    description: <Alicante />,
  },
  {
    company:
      'Institute of Nanostructure Technologies and Analytics Universität Kassel (Germany)',
    position: 'Intern',
    years: '07/2012 – 09/2012',
    description: <Kassel />,
  },
  {
    company: 'Clinica Optika',
    position: 'Intern',
    years: '07/2011 – 12/2011',
    description: <ClinicaOptica />,
  },
];

const partsEdu = [
  {
    company: 'Wrocław University of Science and Technology',
    position: 'Applied Physics',
    years: '10/2013 – 06/2015',
    description: <Master />,
  },
  {
    company: 'Wrocław University of Science and Technology',
    position: 'Applied Physics',
    years: '10/2009 – 01/2013',
    description: <Engineer />,
  },
];

export const PartsExperience = () => {
  return <div className="parts-of-cv">{partsExp.map(Part)}</div>;
};

export const PartsEducation = () => {
  return <div className="parts-of-cv">{partsEdu.map(Part)}</div>;
};
