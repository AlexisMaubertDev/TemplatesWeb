import Link from "next/link";
import styles from "./FooterTwo.module.css";

const FooterTwo = ({ red1, red2, red3, terms, copy }) => {
  return (
    <footer className={styles.footerTwo}>
      <p className={styles.logoFooter}>Logo</p>
      <div className={styles.redesFooter}>
        <Link href={red1.link}>{red1.name}</Link>
        <Link href={red2.link}>{red2.name}</Link>
        <Link href={red3.link}>{red3.name}</Link>
      </div>
      <div className={styles.termsAndCopy}>
        {terms}
        <p className={styles.copy}>{copy}</p>
      </div>
    </footer>
  );
};

export default FooterTwo;
