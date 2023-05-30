import styles from "./SectionThree.module.css";

export default function SectionThree({
  titulo1,
  parrafo1,
  mapa,
  titulo2,
  parrafo2,
  parrafo3,
  color,
  secondaryColor,
}) {
  return (
    <section
      className={styles.ubicacionContainer}
      style={{
        backgroundColor: `rgb(${color.metaColor.r},${color.metaColor.g},${color.metaColor.b})`,
      }}
    >
      <div className={styles.ubicacionInfo}>
        <h2 className={styles.titulo1}>{titulo1}</h2>
        <p
          className={styles.direccion}
          style={{
            color: `rgb(${secondaryColor.metaColor.r},${secondaryColor.metaColor.g},${secondaryColor.metaColor.b})`,
          }}
        >
          {parrafo1}
        </p>
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
        <p
          style={{
            color: `rgb(${secondaryColor.metaColor.r},${secondaryColor.metaColor.g},${secondaryColor.metaColor.b})`,
          }}
        >
          {parrafo2}
        </p>
        <p
          style={{
            color: `rgb(${secondaryColor.metaColor.r},${secondaryColor.metaColor.g},${secondaryColor.metaColor.b})`,
          }}
        >
          {parrafo3}
        </p>
      </div>
    </section>
  );
}
