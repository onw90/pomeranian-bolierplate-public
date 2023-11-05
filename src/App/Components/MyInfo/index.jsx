import { RoundImage } from '../RoundImage';
import './styles.css';

export const MyInfo = () => {
  return (
    <div className="my-info">
      <RoundImage
        url="https://media.licdn.com/dms/image/D4D03AQFHIG32CxPZNw/profile-displayphoto-shrink_800_800/0/1698699951569?e=1704931200&v=beta&t=P32MUq2jkzikLecF9-CKPfO9pB0YQxU3JG4NePbQkq4"
        size="120px"
      />
      <div className="imienazwisko">Aleksandra Waniczek</div>
      <div className="miasto">Kraków</div>
      <div className="mail">
        <br></br>e-mail:
      </div>
      <div className="mail2">owaniczek.it@gmail.com</div>
      <div className="tel">
        <br></br>mobile:
      </div>
      <div className="tel2">+48 606 606 606</div>
    </div>
  );
};
