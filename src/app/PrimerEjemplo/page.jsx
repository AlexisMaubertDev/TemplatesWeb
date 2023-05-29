"use client";
import DrawerColors from "./components/Drawers/DrawerColors/DrawerColors";
import DrawerSections from "./components/Drawers/DrawerSections/DrawerSections";
import styles from "./page.module.css";
import HeaderOne from "./components/Headers/HeaderOne/HeaderOne";
import HeaderTwo from "./components/Headers/HeaderTwo/HeaderTwo";
import { useState } from "react";
import { Button } from "antd";
import banner1 from "../../../public/img/1.jpg";
import banner2 from "../../../public/img/2.jpg";
import banner3 from "../../../public/img/3.jpg";
import banner4 from "../../../public/img/4.jpg";
import thumbnail1 from "../../../public/img/t1.png";
import thumbnail2 from "../../../public/img/t2.png";
import thumbnail3 from "../../../public/img/t3.png";
import CarouselOne from "./components/Carousels/CarouselOne/CarouselOne";
import { useSearchParams } from "next/navigation";
import CarouselTwo from "./components/Carousels/CarouselTwo/CarouselTwo";
import SectionOne from "./components/Sections/SectionOne/SectionOne";

export default function PrimerEjemplo() {
  const searchParams = useSearchParams();
  const img = [banner1, banner2, banner3, banner4];
  const img2 = [
    {
      img: thumbnail1,
      title: "E-commerce",
      desc: "Todo lo que necesitas para tu página de ventas OnLine.",
    },
    {
      img: thumbnail2,
      title: "Portfolio",
      desc: "Toda tu información en un sólo lugar. Galería de tus proyectos y más.",
    },
    {
      img: thumbnail3,
      title: "Personalizados al 100%",
      desc: "Comentanos lo que necesitas y nosotros lo vamos a hacer posible.",
    },
  ];

  const [openColors, setOpenColors] = useState(false);
  const [openSections, setOpenSections] = useState(false);

  const [selectedHeader, setSelectedHeader] = useState(
    searchParams.get("header") || 0
  );
  const [selectedBanner, setSelectedBanner] = useState(
    searchParams.get("banner") || 1
  );
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
      r: 255,
      g: 255,
      b: 255,
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

  const showDrawerColors = () => {
    setOpenColors(true);
  };
  const onCloseColors = () => {
    setOpenColors(false);
  };
  const showDrawerSections = () => {
    setOpenSections(true);
  };
  const onCloseSections = () => {
    setOpenSections(false);
  };

  return (
    <div
      className={styles.bodyContainer}
      style={{
        color: `rgb(${fontColor.metaColor.r}, ${fontColor.metaColor.g}, ${fontColor.metaColor.b})`,
        backgroundColor: `rgb(${bgColor.metaColor.r}, ${bgColor.metaColor.g}, ${bgColor.metaColor.b})`,
      }}
    >
      {
        {
          0: null,
          1: <HeaderOne color={mainColor} />,
          2: <HeaderTwo color={mainColor} />,
        }[selectedHeader]
      }
      <main
        className={styles.mainContainer}
        style={
          selectedHeader != 0 && selectedHeader != 3
            ? { marginTop: "64px" }
            : null
        }
      >
        {
          {
            0: null,
            1: <CarouselOne img={img} />,
            2: <CarouselTwo img={img} />,
          }[selectedBanner]
        }
        <SectionOne color={secondaryColor} img={img2} />
      </main>
      <aside>
        <DrawerColors
          open={openColors}
          onClose={onCloseColors}
          colores={colores}
        />
        <DrawerSections
          open={openSections}
          onClose={onCloseSections}
          setSelectedHeader={setSelectedHeader}
          setSelectedBanner={setSelectedBanner}
        />
        <div className={styles.containerBotones}>
          <Button
            type="primary"
            onClick={showDrawerColors}
            className={styles.botonColor}
          >
            Personalizar Colores
          </Button>
          <Button
            type="primary"
            onClick={showDrawerSections}
            className={styles.botonColor}
          >
            Personalizar Secciones
          </Button>
        </div>
      </aside>
    </div>
  );
}
