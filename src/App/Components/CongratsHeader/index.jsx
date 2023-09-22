import './styles.css';

export const CongratsHeader = ({ score, time }) => {
  return (
    <div className="game-result">
      Gratulacje! Twój wynik to {score} złapane krety w czasie {time} !
    </div>
  );
};
