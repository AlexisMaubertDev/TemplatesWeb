import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./Whatsapp.module.css";

export default function WhatsApp({ numeroTelefono }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleButtonClick = () => {
    window.location.href = `https://api.whatsapp.com/send?phone=${numeroTelefono}`;
  };

  return (
    <div
      className={`${styles.whatsappButton} ${isHovered ? styles.hovered : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleButtonClick}
    >
      <FaWhatsapp className={styles.whatsappIcon} />
      <div className={`${styles.tooltip} ${isHovered ? styles.show : ""}`}>
        Envianos un WhatsApp
      </div>
    </div>
  );
}
