import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  
  return (
    <main className={styles.home}>
      <h1>Visitá nuestros sitios</h1>
      <ul>
        <Link href="/PrimerEjemplo" className={styles.links}>
          Primer Ejemplo
        </Link>
      </ul>
      
      
    </main>
  );
}
