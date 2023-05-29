import { Drawer, Select } from "antd";
import styles from "./DrawerSections.module.css";

export default function DrawerSections({
  open,
  onClose,
  setSelectedBanner,
  setSelectedHeader,
  setSelectedSection,
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
          defaultValue={1}
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
          defaultValue={1}
          options={[
            { value: 0, label: "Sin Banner" },
            { value: 1, label: "Carrusel e imágenes" },
            { value: 2, label: "Banner Carrusel completo" },
          ]}
          style={{ minWidth: "50%" }}
        />
        <p>Banner</p>
      </div>
      <div className={styles.itemContainer}>
        <Select
          mode="multiple"
          allowClear
          onSelect={(value) =>
            setSelectedSection((current) => [...current, value])
          }
          onDeselect={(value) =>
            setSelectedSection((current) => current.filter((x) => x !== value))
          }
          onClear={() => setSelectedSection([])}
          defaultValue={2}
          placeholder="Elegí las secciones"
          options={[
            { value: 0, label: "Sin secciones" },
            { value: 1, label: "Sección 1" },
            { value: 2, label: "Sección 2" },
          ]}
          style={{ minWidth: "50%" }}
        />
        <p>Secciones</p>
      </div>
    </Drawer>
  );
}
