import { Drawer, Select } from "antd";
import styles from "./DrawerSections.module.css";
import useHoverStyle from "@/app/PrimerEjemplo/hook/useHoverStyles";

export default function DrawerSections({
  open,
  onClose,
  selectedModules,
  setSelectedModules,
}) {
  const { hoverTransitionUnderLine } = useHoverStyle();
  return (
    <Drawer
      title="Personalizá la página como desees"
      placement="left"
      onClose={onClose}
      open={open}
    >
      <div className={styles.itemContainer}>
        <h2>Encabezado</h2>
        <Select
          onChange={(value) =>
            setSelectedModules((current) => ({
              ...current,
              ...{
                header: {
                  selected: value,
                },
              },
            }))
          }
          defaultValue={selectedModules.header.selected}
          options={[
            { value: 0, label: "Sin cabecera" },
            { value: 1, label: "Separados" },
            { value: 2, label: "Logo en medio" },
            { value: 3, label: "Con banner" },
          ]}
          style={{ minWidth: "100%" }}
        />
        <h3>Estilo</h3>
        <Select
          onChange={(value) =>
            setSelectedModules((current) => ({
              ...current,
              header: {
                ...current.header,
                hover: value,
              },
            }))
          }
          defaultValue={selectedModules.header.hover}
          options={[
            { value: 0, label: "Sin Estilo" },
            {
              value: hoverTransitionUnderLine,
              label: "Subrayado desde la izquierda",
            },
            { value: 2, label: "Logo en medio" },
          ]}
          style={{ minWidth: "100%" }}
        />
      </div>

      <div className={styles.itemContainer}>
        <Select
          onChange={(value) =>
            setSelectedModules((current) => ({
              ...current,
              ...{
                banner: {
                  selected: value,
                },
              },
            }))
          }
          defaultValue={selectedModules.banner.selected}
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
            setSelectedModules((current) => ({
              ...current,
              sections: {
                ...current.sections,
                selected: current.sections.selected.concat(value),
              },
            }))
          }
          onDeselect={(value) =>
            setSelectedModules((current) => ({
              ...current,
              sections: {
                ...current.sections,
                selected: current.sections.selected.filter((x) => x !== value),
              },
            }))
          }
          onClear={() =>
            setSelectedModules((current) => ({
              ...current,
              sections: { ...current, selected: [] },
            }))
          }
          defaultValue={selectedModules.sections.selected}
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
            setSelectedModules((current) => ({
              ...current,
              buttons: {
                ...current.buttons,
                selected: current.buttons.selected.concat(value),
              },
            }))
          }
          onDeselect={(value) =>
            setSelectedModules((current) => ({
              ...current,
              buttons: {
                ...current.buttons,
                selected: current.buttons.selected.filter((x) => x !== value),
              },
            }))
          }
          onClear={() =>
            setSelectedModules((current) => ({
              ...current,
              buttons: { ...current, selected: [] },
            }))
          }
          defaultValue={selectedModules.buttons.selected}
          placeholder="Elegí los botones"
          options={[
            { value: 0, label: "Sin botones" },
            { value: 1, label: "WhatsApp" },
            { value: 2, label: "Scroll Arriba" },
          ]}
          style={{ minWidth: "50%" }}
        />
        <p>Botones</p>
      </div>

      <div className={styles.itemContainer}>
        <Select
          mode="multiple"
          allowClear
          onSelect={(value) =>
            setSelectedModules((current) => ({
              ...current,
              sliders: {
                ...current.sliders,
                selected: current.sliders.selected.concat(value),
              },
            }))
          }
          onDeselect={(value) =>
            setSelectedModules((current) => ({
              ...current,
              sliders: {
                ...current.sliders,
                selected: current.sliders.selected.filter((x) => x !== value),
              },
            }))
          }
          onClear={() =>
            setSelectedModules((current) => ({
              ...current,
              sliders: { ...current, selected: [] },
            }))
          }
          defaultValue={selectedModules.sliders.selected}
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
            setSelectedModules((current) => ({
              ...current,
              forms: {
                ...current.forms,
                selected: current.forms.selected.concat(value),
              },
            }))
          }
          onDeselect={(value) =>
            setSelectedModules((current) => ({
              ...current,
              forms: {
                ...current.forms,
                selected: current.forms.selected.filter((x) => x !== value),
              },
            }))
          }
          onClear={() =>
            setSelectedModules((current) => ({
              ...current,
              forms: { ...current, selected: [] },
            }))
          }
          defaultValue={selectedModules.footer.forms}
          placeholder="Elegí los formularios"
          options={[
            { value: 0, label: "Sin formularios" },
            { value: 1, label: "Formulario de contacto básico" },
          ]}
          style={{ minWidth: "50%" }}
        />
        <p>Formularios</p>
      </div>
      <div className={styles.itemContainer}>
        <Select
          onChange={(value) =>
            setSelectedModules((current) => ({
              ...current,
              ...{
                footer: {
                  selected: value,
                },
              },
            }))
          }
          defaultValue={selectedModules.footer.selected}
          options={[
            { value: 0, label: "Sin Pie de Página" },
            { value: 1, label: "Pie de página con navegación" },
            { value: 2, label: "Pie de página con CopyRight" },
          ]}
          style={{ minWidth: "50%" }}
        />
        <p>Pie de Página</p>
      </div>
    </Drawer>
  );
}
