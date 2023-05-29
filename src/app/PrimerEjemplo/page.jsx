"use client";
import DrawerColors from "./components/Drawers/DrawerColors/DrawerColors";
import DrawerSections from "./components/Drawers/DrawerSections/DrawerSections";
import styles from "./page.module.css";
import HeaderOne from "./components/Headers/HeaderOne/HeaderOne";
import HeaderTwo from "./components/Headers/HeaderTwo/HeaderTwo";
import { useState } from "react";
import { Button } from "antd";
import sqrImg from "../../../public/img/sqr1.jpeg";
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
import SectionTwo from "./components/Sections/SectionTwo/SectionTwo";
import useColorState from "./hook/useColorState";

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
    searchParams.get("header") || 1
  );
  const [selectedBanner, setSelectedBanner] = useState(
    searchParams.get("banner") || 1
  );
  const sections = searchParams.getAll("section");
  const [selectedSection, setSelectedSection] = useState(
    sections.length === 0 ? [2] : sections
  );

  const { fontColor, bgColor, mainColor, secondaryColor, colores } =
    useColorState();

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
        {selectedSection.map((section) => {
          return {
            0: null,
            1: <SectionOne color={secondaryColor} img={img2} />,
            2: (
              <SectionTwo
                color={mainColor}
                fontColor={fontColor}
                secondaryColor={secondaryColor}
                img={sqrImg}
              />
            ),
          }[section];
        })}
      </main>
      <aside>
        <DrawerColors
          open={openColors}
          onClose={() => setOpenColors(false)}
          colores={colores}
        />
        <DrawerSections
          open={openSections}
          onClose={() => setOpenSections(false)}
          setSelectedHeader={setSelectedHeader}
          setSelectedBanner={setSelectedBanner}
          setSelectedSection={setSelectedSection}
        />
        <div className={styles.containerBotones}>
          <Button
            type="primary"
            onClick={() => setOpenColors(true)}
            className={styles.botonColor}
          >
            Personalizar Colores
          </Button>
          <Button
            type="primary"
            onClick={() => setOpenSections(true)}
            className={styles.botonColor}
          >
            Personalizar Secciones
          </Button>
        </div>
      </aside>
    </div>
  );
}
