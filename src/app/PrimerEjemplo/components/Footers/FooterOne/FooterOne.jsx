import styles from './FooterOne.module.css';


const FooterOne = ({children, red1, red2, red3}) => {


  return (
    <footer className='footerOne'>

        <div>
            <nav className={styles.enlacesFooterOne}>
                {children}
            </nav>
        </div>
        <div>
            <p className={style.logoFooterOne}>Tu<span>Logo</span></p>
        </div>
        <div className={style.redesFooter}>
            {red1}
            {red2}
            {red3}
        </div>
    </footer>
  );
};

export default FooterOne;
