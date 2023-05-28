import styles from "./HeaderTwo.module.css";

export default function HeaderTwo({ color }) {
  return (
    <header
      className={styles.containerHeader}
      style={{
        backgroundColor: `rgb(${color.metaColor.r}, ${color.metaColor.g}, ${color.metaColor.b})`,
      }}
    >
      <nav className={styles.containerNav}>
        <ul>
          <li>Opcion 1</li>
          <li>Opcion 2</li>
        </ul>
      <div className={styles.logo}>LOGO</div>
        <ul>
          <li>Opcion 3</li>
          <li>Opcion 4</li>
        </ul>
      </nav>
    </header>
  );
}
