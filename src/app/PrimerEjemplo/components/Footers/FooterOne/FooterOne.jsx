import Link from "next/link";
import styles from "./FooterOne.module.css";

const FooterOne = ({ children, red1, red2, red3 }) => {
  return (
    <footer className={styles.footerOne}>
      <div>
        <nav className={styles.enlacesFooter}>{children}</nav>
      </div>
      <div>
        <p className={styles.logoFooter}>Logo</p>
      </div>
      <div className={styles.redesFooter}>
        <Link href={red1.link}>{red1.name}</Link>
        <Link href={red2.link}>{red2.name}</Link>
        <Link href={red3.link}>{red3.name}</Link>
      </div>
    </footer>
  );
};

export default FooterOne;
