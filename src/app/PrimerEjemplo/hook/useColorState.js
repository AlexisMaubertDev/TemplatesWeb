import { useState } from "react";

const useColorState = () => {
  const [fontColor, setFontColor] = useState({
    metaColor: {
      r: 0,
      g: 0,
      b: 0,
      a: 1,
    },
  });

  const [bgColor, setBgColor] = useState({
    metaColor: {
      r: 100,
      g: 100,
      b: 100,
      a: 1,
    },
  });

  const [mainColor, setMainColor] = useState({
    metaColor: {
      r: 255,
      g: 255,
      b: 255,
      a: 1,
    },
  });

  const [secondaryColor, setSecondaryColor] = useState({
    metaColor: {
      r: 255,
      g: 255,
      b: 255,
      a: 1,
    },
  });

  const colores = [
    { titulo: "Color de Fuente", color: fontColor, setColor: setFontColor },
    { titulo: "Color de Fondo", color: bgColor, setColor: setBgColor },
    { titulo: "Color Principal", color: mainColor, setColor: setMainColor },
    {
      titulo: "Color Secundario",
      color: secondaryColor,
      setColor: setSecondaryColor,
    },
  ];

  return {
    fontColor,
    setFontColor,
    bgColor,
    setBgColor,
    mainColor,
    setMainColor,
    secondaryColor,
    setSecondaryColor,
    colores,
  };
};

export default useColorState;
