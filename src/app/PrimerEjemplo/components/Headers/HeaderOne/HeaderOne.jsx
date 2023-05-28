import styles from "./HeaderOne.module.css";

export default function HeaderOne({ color }) {
  return (
    <header
      className={styles.containerHeader}
      style={{
        backgroundColor: `rgb(${color.metaColor.r}, ${color.metaColor.g}, ${color.metaColor.b})`,
      }}
    >
      <div className={styles.logo}>LOGO</div>
      <nav className={styles.containerNav}>
        <ul>
          <li>Opcion 1</li>
          <li>Opcion 2</li>
          <li>Opcion 3</li>
        </ul>
      </nav>
    </header>
  );
}
