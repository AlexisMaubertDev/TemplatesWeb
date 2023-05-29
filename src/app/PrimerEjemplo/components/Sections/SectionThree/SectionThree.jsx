import styles from "./SectionThree.module.css";

export default function SectionThree({
  titulo1,
  parrafo1,
  mapa,
  titulo2,
  parrafo2,
  parrafo3,
  color,
}) {
  return (
    <section className={styles.ubicacionContainer}>
      <div className={styles.ubicacionInfo}>
        <h2 className={styles.titulo1}>{titulo1}</h2>
        <p className={styles.direccion}>{parrafo1}</p>
      </div>

      <div className={styles.ubicacionMapa}>
        <iframe
          src={mapa}
          width="1000"
          height="400"
          className={styles.mapa}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className={styles.ubicacionInfo}>
        <h2 className={styles.titulo2}>{titulo2}</h2>
        <p>{parrafo2}</p>
        <p>{parrafo3}</p>
      </div>
    </section>
  );
}
