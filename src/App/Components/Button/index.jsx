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
      // variant - primary | secondary - dynamiczna zmiana stylu elementu dzięki template string `...${}`
      className={`main-button main-button-${variant}`}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export const OptionButton = ({ isSelected, onClick, children }) => (
  <Button variant={isSelected ? 'primary' : 'secondary'} onClick={onClick}>
    {children}
  </Button>
);
