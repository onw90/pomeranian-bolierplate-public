import { GoBackLink } from '../Components/GoBack/GoBack';

import './header.css';

export function ExerciseItemHeader({ data }) {
  return (
    <div className="exercise-item-header">
      <p>{`Temat: ${data?.linkLabel || '-'}`}</p>
      <p>{`Data: ${data?.date || '-'}`}</p>
      <GoBackLink />
    </div>
  );
}
