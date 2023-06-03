import styled from "styled-components";
import styles from "./HeaderOne.module.css";

export default function HeaderOne({ color, hoverStyle }) {
  const Link = styled.a`
    ${hoverStyle}
  `;
  return (
    <header
      className={styles.containerHeader}
      style={{
        backgroundColor: `rgba(${color.metaColor.r}, ${color.metaColor.g}, ${color.metaColor.b} , ${color.metaColor.a})`,
      }}
    >
      <div className={styles.logo}>LOGO</div>

      <nav className={styles.containerNav}>
        <Link>link1</Link>
        <Link>link2</Link>
        <Link>link3</Link>
      </nav>
    </header>
  );
}
