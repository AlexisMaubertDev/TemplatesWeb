import { Drawer, ColorPicker, Select } from "antd";
import styles from "./DrawersColors.module.css";
import { useState } from "react";

export default function DrawerColors({
  open,
  onClose,
  colores,
  setSelectedFont,
}) {
  const [format, setFormat] = useState("rgb");

  return (
    <Drawer
      title="Personalizá los colores como desees"
      placement="right"
      onClose={onClose}
      open={open}
    >
      <div className={styles.colorContainer}>
        <Select
          onChange={(value) => setSelectedFont(value)}
          defaultValue={"roboto"}
          options={[
            { value: "roboto", label: "Roboto" },
            { value: "boogaloo", label: "Boogaloo" },
            { value: "enriqueta", label: "Enriqueta" },
          ]}
          style={{ minWidth: "50%" }}
        />
        <p>Fuente</p>
      </div>
      {colores.map((item) => {
        return (
          <div className={styles.colorContainer} key={item.titulo}>
            <ColorPicker
              value={item.color}
              onChange={item.setColor}
              format={format}
              onFormatChange={setFormat}
            />
            <p>{item.titulo}</p>
          </div>
        );
      })}
      <div className={styles.colorContainer}>
        <p>Color Terciario</p>
      </div>
    </Drawer>
  );
}
