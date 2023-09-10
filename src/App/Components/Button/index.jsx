import './styles.css';

// variant: primary | secondary | tertiary
// `${}` string-literals
//button ma dwie klasy które będą róznie stylowane
// nazwy klasy będą się zmieniać jak bedziemy  podawać variant w buttonie
// ...otherProps - spread -> moge do buttona przekazac inne dostepne propsy, dowolną ilość
export const Button = ({
  children,
  onClick,
  variant = 'primary',
  ...otherProps
}) => {
  return (
    <button
      className={`main-button main-button-${variant}`}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};
