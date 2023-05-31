import { Drawer, Select } from "antd";
import styles from "./DrawerSections.module.css";

export default function DrawerSections({
  open,
  onClose,
  setSelectedBanner,
  setSelectedHeader,
  setSelectedSection,
  setSelectedFooter,
  setSelectedForms,
  setSelectedSliders,
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
          onChange={(value) => setSelectedFooter(value)}
          defaultValue={0}
          options={[{ value: 0, label: "Sin Pie de Página" }]}
          style={{ minWidth: "50%" }}
        />
        <p>Pie de Página</p>
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
            setSelectedFormularios((current) => [...current, value])
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
            { value: 3, label: "Sección 3" },
          ]}
          style={{ minWidth: "50%" }}
        />
        <p>Secciones</p>
      </div>
      <div className={styles.itemContainer}>
        <Select
          mode="multiple"
          allowClear
          onSelect={(value) =>
            setSelectedForms((current) => [...current, value])
          }
          onDeselect={(value) =>
            setSelectedForms((current) => current.filter((x) => x !== value))
          }
          onClear={() => setSelectedForms([])}
          defaultValue={0}
          placeholder="Elegí los Sliders"
          options={[{ value: 0, label: "Sin Sliders" }]}
          style={{ minWidth: "50%" }}
        />
        <p>Sliders</p>
      </div>
      <div className={styles.itemContainer}>
        <Select
          mode="multiple"
          allowClear
          onSelect={(value) =>
            setSelectedSliders((current) => [...current, value])
          }
          onDeselect={(value) =>
            setSelectedSliders((current) => current.filter((x) => x !== value))
          }
          onClear={() => setSelectedSliders([])}
          defaultValue={0}
          placeholder="Elegí los formularios"
          options={[{ value: 0, label: "Sin formularios" }]}
          style={{ minWidth: "50%" }}
        />
        <p>Formularios</p>
      </div>
    </Drawer>
  );
}
