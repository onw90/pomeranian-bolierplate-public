import './styles.css';
import { ControlledForm } from './ControlledForm';
import { UncontrolledForm } from './UncontrolledForm';

export const FormExample = () => {
  return (
    <>
      <h1>form example</h1>
      <ControlledForm />
      <UncontrolledForm />
    </>
  );
};
