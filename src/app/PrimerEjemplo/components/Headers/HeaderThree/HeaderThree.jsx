import styles from './HeaderThree.module.css';
// import Enlace from '../Enlace/Enlace';
import  { useState, useEffect } from 'react';
import { BsListUl, BsXLg } from "react-icons/bs";
import Link from "next/link";


const HeaderThree = ({children, red1, red2, red3}) => {

// MANEJAR EL CAMBIO A HABURGUESA
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

   const handleResize = () => {
     setWindowWidth(window.innerWidth);
   };

   useEffect(() => {
     window.addEventListener('resize', handleResize);
     return () => {
       window.removeEventListener('resize', handleResize);
     };
   }, []);

   const isMobile = windowWidth < 1000;


   // MANEJA LA APERTURA DEL MANU HAMBURGUESA y CAMBIO DE ICONOS

   const [icono, setIcono] = useState(<BsListUl color='white' size={50} />);

   const [isOpen, setIsOpen] = useState(false);


   const toggleMenu = () => {
     setIsOpen(!isOpen);
     if (icono.type === BsListUl) {
      setIcono(<BsXLg  color='white' size={50}/>);
    } else {
      setIcono(<BsListUl color='white' size={50}/>);
    }
   };

  
  return (
    <header className={styles.header}>
       <nav>
        {!isMobile ?        
        <div className={styles.nav}>
          {children}          
        </div> 
        :<div>
          <div className={styles.hamurguesa}   onClick={toggleMenu}>{icono}
          {isOpen ?<div className={styles.mobile}>
                                  {children}          
                                </div> : ""}                
          </div> 
 
        </div>}

        <div className={styles.redes}>
          <Link href={red1.link} >{red1.name}</Link>
          <Link href={red2.link} >{red2.name}</Link>
          <Link href={red3.link} >{red3.name}</Link>
        </div>
      </nav>
      <p className={styles.logo}>Tu<span>Logo</span></p>
    </header>
  );
};


export default HeaderThree;

