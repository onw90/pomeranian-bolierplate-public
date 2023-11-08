import { Part } from './Part';
const partsExp = [
  {
    company: 'Pomeranian START.IT',
    position: 'Junior Frontend Developer',
    years: '07/2023 – 10/2023',
    description: `Certificate of Completion issued by Rockin’iT An intensive three-month programming course, led by experienced trainers, encompassed numerous hours of live coding and hands-on work on diverse practical projects. This course provided participants with a solid and comprehensive foundation necessary for launching a career in the IT industry as a Frontend Developer. The main technologies covered were HTML5, CSS3, JavaScript, React and TypeScript. Students also utilized tools such as Git, GitHub, Redmine, JIRA and Confluence.`,
  },
  {
    company: 'Aptiv',
    position: 'Optical Engineer',
    years: '03/2022 – present',
    description: `- design, develop and evaluate optical test systems based on LED and laser technologies
    - specify and source lenses, sensors, LEDs, VCSELs and lasers working in the visible and IR spectrum
    - conduct optical and light simulations using Light Tools
    - evaluate vision system performance, including MTF, S/N, aberrations and other quality parameters
    - review customer specifications and document requirements
    - develop component specifications based on requirements
    - calculate eye safety coefficients to approve the light source for use
    - collaborate within a team of optical and mechanical engineers`,
  },
  {
    company: 'Vidium Medica',
    position: 'Lead Optometrist &amp; Team Manager',
    years: '10/2015 – 01/2022',
    description: `- calculated the power of implantable lenses, including IOL (all types) and ICL (Staar)
    - planned refractive surgery procedures using femtosecond and excimer lasers, such as FS200 and EX500
    (Wavelight Alcon), MEL90 and Visumax (Zeiss).
    
    - operated lasers and performed laser testing as a technician, including calculating nomograms for
    operators and lasers
    - selected specialized contact lenses, including scleral and hybrid types
    - operated and worked with measurement devices such as Pentacam, Oculyzer, OCT, IOL Master, and other
    biometers, Verion system, specular microscope, autorefractometer, tonometers, including ORA (Reichert)
    with corneal hysteresis analysis, slit lamps, and other ophthalmic devices
    - understood and planned patient diagnosis and therapy in cooperation with the doctor
    - conducted tests and measurements to qualify patients for refractive surgery, cataract procedures, AMD
    and keratoconus
    - performed subjective refraction measurements using various phoropters
    - conducted specialized training sessions for both medical and non-medical personnel
    - planned the work of a team of optometrists, both in terms of their responsibilities and organization
    - demonstrated the ability to select appropriate equipment for an ophthalmic-optometric center, oversaw
    its installation and operation and engaged in business planning
    - developed optometric and medical procedures within an ophthalmic center, specializing in areas such
    as refractive surgery or other specializations
    - evaluated the progress and performance of the team and reported to the COO and CEO
    - identified and defined new opportunities for improving business processes based on data analysis
    - conducted recruitment processes for positions such as optometrists, nurses and receptionists
    in a medical clinic
    - used analytical skills to analyze patient results, maintained statistics, drew conclusions and created
    reports
    - presented personal knowledge and experience at scientific conferences and wrote scientific papers
    - managed people, time, and work to meet deadlines and ensure effective planning
    - developed personal expertise and shared it with team members to support team growth`,
  },
  {
    company: 'Bellevue Optique',
    position: 'Certified Optician',
    years: '02/2013 – 12/2014',
    description: `- assembled various types of spectacles using the Essilor Kappa Edging System, manual grinder and
    automatic dioptometer
    - selected frames and eyeglass lenses for each prescription
    - sold eyeglasses and contact lenses as medical products
    - provided optical consultations
    - handled office work related to incoming goods and inventory`,
  },
  {
    company:
      'Department of Optics, Pharmacology and Anatomy - Optometry Clinic University of Alicante (Spain)',
    position: 'Intern',
    years: '08/2014 – 10/2014',
    description: `- practices associated with optometric measurements: refraction, keratometry, axial length measurements
    of the eye, optical system aberrations of the eye, pachymetry, tonometry, and many others, using:
    Pentacam Scheimpflug camera (Oculus), OCT, a wavefront analyzer VX120 (Visionix), slit lamp,
    keratometers (e.g., IOL Master)
    - qualitative and statistical data analysis
    - completed with a publication and practice report evaluated with an excellent grade`,
  },
  {
    company:
      'Institute of Nanostructure Technologies and Analytics Universität Kassel (Germany)',
    position: 'Intern',
    years: '07/2012 – 09/2012',
    description: `- student practice related to optical spectroscopy of semiconductor nanostructures
    - the optical (PL, μPL) and structural (AFM, XRD) characterization
   - completed with an excellent grade for the practice report`,
  },
  {
    company: 'Clinica Optika',
    position: 'Inntern',
    years: '07/2011 – 12/2011',
    description: `- cooperated with customers and engineering craftsmen
    - assembled glasses, which involved handling the grinding machine Briot, manual grinder and the telescope
    dioptometer for various types of spectacles
    - selected appropriate spectacle lenses and lens coatings`,
  },
];

const partsEdu = [
  {
    company: 'Wrocław University of Science and Technology',
    position: 'Podglad cv wraz z doświadczeniem',
    years: '/CV',
    description: 'opis....',
  },
  {
    company: 'Wrocław University of Science and Technology',
    position: 'Podglad cv wraz z doświadczeniem',
    years: '/CV',
    description: 'opis....',
  },
];

export const PartsExperience = () => {
  return <div className="parts-of-cv">{partsExp.map(Part)}</div>;
};

export const PartsEducation = () => {
  return <div className="parts-of-cv">{partsEdu.map(Part)}</div>;
};
