import styles from './FooterTwo.module.css';

const FooterTwo = ({red1, red2, red3, terms, copy}) => {


  return (
    <footer className={styles.footerTwo}>
        <div>
            <p className={styles.logoFooterTwo}>Tu<span>Logo</span></p>
        </div>
        <div className={styles.redesFooter2}>
          {red1}
          {red2}
          {red3}
        </div>
        <div className={styles.termsAndCopyTwo}>
            {terms}
            <p className={styles.copyTwo}>{copy}</p>
        </div>
    </footer>
  );
};

export default FooterTwo;
