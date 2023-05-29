import ImageWScrollAnim from "../../ImageWScrollAnim/ImageWScrollAnim";
import styles from "./SectionTwo.module.css";

export default function SectionTwo({ color, fontColor, secondaryColor, img }) {
  return (
    <main
      className={styles.nosotrosContainer}
      style={{
        backgroundColor: `rgb(${secondaryColor.metaColor.r}, ${secondaryColor.metaColor.g}, ${secondaryColor.metaColor.b})`,
      }}
    >
      <h1>Nosotros</h1>
      <p
        style={{
          color: `rgb(${color.metaColor.r}, ${color.metaColor.g}, ${color.metaColor.b})`,
        }}
      >
        met consectetur adipisicing elit. Distinctio rem sunt ab laboriosam,
        conseq Distinctio rem sunt ab laboriosam.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio rem
        repellendus excepturi, culpa nulla ab nihil aspernatur velit in quae
        explicabo dolor quidem illum totam doloribus. Inventore sint quo at.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima quas
        est voluptate vitae? Fuga ipsam facere quo praesentium eos explicabo et
        dolorum sunt ab laboriosam, consequuntur similique natus voluptatum
        maxime.
      </p>
      <div className={styles.imagenes}>
        <ImageWScrollAnim img={img} texto="Texto de Prueba" />
        <ImageWScrollAnim img={img} texto="Texto de Prueba" />
        <ImageWScrollAnim img={img} texto="Texto de Prueba" />
      </div>
      <button
        style={{
          borderColor: `rgb(${secondaryColor.metaColor.r}, ${secondaryColor.metaColor.g}, ${secondaryColor.metaColor.b})`,
          backgroundColor: `rgb(${color.metaColor.r}, ${color.metaColor.g}, ${color.metaColor.b})`,
          color: `rgb(${fontColor.metaColor.r}, ${fontColor.metaColor.g}, ${fontColor.metaColor.b})`,
        }}
      >
        Ver Más
      </button>
    </main>
  );
}
