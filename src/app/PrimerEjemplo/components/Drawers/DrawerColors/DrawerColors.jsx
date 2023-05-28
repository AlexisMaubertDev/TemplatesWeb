import { Drawer, ColorPicker } from "antd";
import styles from "./DrawersColors.module.css";
import { useState } from "react";

export default function DrawerColors({ open, onClose, colores }) {
  const [format, setFormat] = useState("rgb");

  return (
    <Drawer
      title="Personalizá los colores como desees"
      placement="right"
      onClose={onClose}
      open={open}
    >
      {colores.map((item) => {
        return (
          <div className={styles.colorContainer}>
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
