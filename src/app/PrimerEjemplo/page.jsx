"use client";
import DrawerColors from "./components/Drawers/DrawerColors/DrawerColors";
import DrawerSections from "./components/Drawers/DrawerSections/DrawerSections";
import styles from "./page.module.css";
import HeaderOne from "./components/Headers/HeaderOne/HeaderOne";
import HeaderTwo from "./components/Headers/HeaderTwo/HeaderTwo";
import { useState } from "react";
import { Button } from "antd";
import CarouselOne from "./components/Carousels/CarouselOne/CarouselOne";
import { useSearchParams } from "next/navigation";
import CarouselTwo from "./components/Carousels/CarouselTwo/CarouselTwo";
import SectionOne from "./components/Sections/SectionOne/SectionOne";
import SectionTwo from "./components/Sections/SectionTwo/SectionTwo";
import useColorState from "./hook/useColorState";
import useImg from "./hook/useImg";
import { roboto, boogaloo, enriqueta } from "./fonts/fonts";

export default function PrimerEjemplo() {
  const searchParams = useSearchParams();

  const [openColors, setOpenColors] = useState(false);
  const [openSections, setOpenSections] = useState(false);

  const [selectedHeader, setSelectedHeader] = useState(
    searchParams.get("header") || 1
  );
  const [selectedBanner, setSelectedBanner] = useState(
    searchParams.get("banner") || 1
  );
  const [selectedFont, setSelectedFont] = useState("roboto");
  const sections = searchParams.getAll("section");
  const [selectedSection, setSelectedSection] = useState(
    sections.length === 0 ? [2] : sections
  );

  const { fontColor, bgColor, mainColor, secondaryColor, colores } =
    useColorState();

  const { img, img2, sqrImg } = useImg();

  return (
    <div
      className={
        styles.bodyContainer +
        " " +
        {
          roboto: roboto.className,
          boogaloo: boogaloo.className,
          enriqueta: enriqueta.className,
        }[selectedFont]
      }
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
            1: <SectionOne color={secondaryColor} img={img2} key={1} />,
            2: (
              <SectionTwo
                color={mainColor}
                fontColor={fontColor}
                secondaryColor={secondaryColor}
                img={sqrImg}
                key={2}
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
          setSelectedFont={setSelectedFont}
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
            Personalizar
          </Button>
          <Button
            type="primary"
            onClick={() => setOpenSections(true)}
            className={styles.botonColor}
          >
            Secciones
          </Button>
        </div>
      </aside>
    </div>
  );
}
