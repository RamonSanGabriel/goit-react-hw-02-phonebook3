import { footerDetails } from '../../data/footer';
import css from './Footer.module.css';

const Footer = () => {
  const { name } = footerDetails;
  return (
    <footer>
      <p className={css.footerText}>
        &copy;{new Date().getFullYear()} Developed by {name}
      </p>
    </footer>
  );
};

export default Footer;
