import './styles/footer.css';

const email = 'owaniczek.it@gmail.com';
const phone = '+48-999-999-999';

export function AppFooter() {
  return (
    <footer>
      <div className="footer-description">
        <p>
          Projekt uzyskał dofinansowanie ze środków Unii Europejskiej z
          Europejskiego Funduszu Rozwoju Regionalnego w ramach projektu
          grantowego „Invest in Pomerania 2020”.
        </p>
      </div>
      <div className="footer-links">
        <a href={`mailto:${email}`}>{`e-mail: ${email}`}</a>
        {/* <a href={`tel:${phone}`}>{`Tel: ${phone}`}</a> */}
      </div>
    </footer>
  );
}
