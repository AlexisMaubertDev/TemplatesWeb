import styles from "./HeaderOne.module.css";

export default function HeaderOne({ color }) {
  return (
    <header
      className={styles.containerHeader}
      style={{
        backgroundColor: `rgba(${color.metaColor.r}, ${color.metaColor.g}, ${color.metaColor.b} , ${color.metaColor.a})`,
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
