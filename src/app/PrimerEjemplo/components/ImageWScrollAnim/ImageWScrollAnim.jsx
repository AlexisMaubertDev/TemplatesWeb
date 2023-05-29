import styles from "./ImageWScrollAnim.module.css";
import React, { useEffect, useState } from "react";

export default function ImageWScrollAnim({ img, texto }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("image");
      if (element) {
        const position = element.getBoundingClientRect(); //Calculamos la posición del elemento en relación con la ventana
        const windowHeight = window.innerHeight;

        if (position.top <= windowHeight * 0.9) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.imgContainer}>
      <img
        id="image"
        className={
          isVisible ? styles.image + " " + styles.visible : styles.image
        }
        src={img.src}
        alt="Template Cuadrado"
      />
      <div className={styles.textoImg}>{texto}</div>
    </div>
  );
}
