import { Drawer, Select } from "antd";
import styles from "./DrawerSections.module.css";

export default function DrawerSections({
  open,
  onClose,
  setSelectedBanner,
  setSelectedHeader,
}) {
  return (
    <Drawer
      title="Personalizá la página como desees"
      placement="right"
      onClose={onClose}
      open={open}
    >
      <div className={styles.itemContainer}>
        <Select
          onChange={(value) => setSelectedHeader(value)}
          defaultValue={"Selecciona una cabecera"}
          options={[
            { value: 0, label: "Sin cabecera" },
            { value: 1, label: "Separados" },
            { value: 2, label: "Logo en medio" },
          ]}
          style={{ minWidth: "50%" }}
        />
        <p>Encabezado</p>
      </div>
      <div className={styles.itemContainer}>
        <Select
          onChange={(value) => setSelectedBanner(value)}
          defaultValue={"Selecciona un banner"}
          options={[
            { value: 0, label: "Sin Banner" },
            { value: 1, label: "Carrusel e imágenes" },
            { value: 2, label: "Banner Carrusel completo" },
          ]}
          style={{ minWidth: "50%" }}
        />
        <p>Banner</p>
      </div>
    </Drawer>
  );
}
