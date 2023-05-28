import { Drawer, ColorPicker, Select } from "antd";
import styles from "./CustomDrawer.module.css";
import { useState } from "react";

export default function CustomDrawer({
  open,
  onClose,
  fontColor,
  setFontColor,
  bgColor,
  setBgColor,
  mainColor,
  setMainColor,
  secondaryColor,
  setSecondaryColor,
  setSelectedHeader,
  setSelectedBanner,
}) {
  const [format, setFormat] = useState("rgb");

  return (
    <Drawer
      title="Personalizá la página como desees"
      placement="right"
      onClose={onClose}
      open={open}
    >
      <div className={styles.colorContainer}>
        <ColorPicker
          value={bgColor}
          onChange={setBgColor}
          format={format}
          onFormatChange={setFormat}
        />
        <p>Color de fondo</p>
      </div>
      <div className={styles.colorContainer}>
        <ColorPicker
          value={fontColor}
          onChange={setFontColor}
          format={format}
          onFormatChange={setFormat}
        />
        <p>Color de Fuente</p>
      </div>
      <div className={styles.colorContainer}>
        <ColorPicker
          value={mainColor}
          onChange={setMainColor}
          format={format}
          onFormatChange={setFormat}
        />
        <p>Color Principal</p>
      </div>
      <div className={styles.colorContainer}>
        <ColorPicker
          value={secondaryColor}
          onChange={setSecondaryColor}
          format={format}
          onFormatChange={setFormat}
        />
        <p>Color Secundario</p>
      </div>
      <div className={styles.colorContainer}>
        <p>Color Terciario</p>
      </div>
      <div className={styles.colorContainer}>
        <Select
          onChange={(value) => setSelectedHeader(value)}
          defaultValue={"Selecciona una cabecera"}
          options={[
            { value: 1, label: "Separados" },
            { value: 2, label: "Logo en medio" },
          ]}
          style={{ minWidth: "50%" }}
        />
        <p>Encabezado</p>
      </div>
      <div className={styles.colorContainer}>
        <Select
          onChange={(value) => setSelectedBanner(value)}
          defaultValue={"Selecciona un banner"}
          options={[
            { value: 1, label: "Banner Carrusel completo" },
            { value: 2, label: "Carrusel e imágenes" },
          ]}
          style={{ minWidth: "50%" }}
        />
        <p>Banner</p>
      </div>
    </Drawer>
  );
}
