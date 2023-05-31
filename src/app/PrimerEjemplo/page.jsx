"use client";
import DrawerColors from "./components/Drawers/DrawerColors/DrawerColors";
import DrawerSections from "./components/Drawers/DrawerSections/DrawerSections";
import styles from "./page.module.css";
import HeaderOne from "./components/Headers/HeaderOne/HeaderOne";
import HeaderTwo from "./components/Headers/HeaderTwo/HeaderTwo";
import WhatsApp from "./components/Buttons/Whatsapp/Whatsapp";
import ScrollToTop from "./components/Buttons/scrollToTop/scrollToTop";
import { useState } from "react";
import { Button } from "antd";
import CarouselOne from "./components/Carousels/CarouselOne/CarouselOne";
import { useSearchParams } from "next/navigation";
import CarouselTwo from "./components/Carousels/CarouselTwo/CarouselTwo";
import SectionOne from "./components/Sections/SectionOne/SectionOne";
import SectionTwo from "./components/Sections/SectionTwo/SectionTwo";
import SectionThree from "./components/Sections/SectionThree/SectionThree";
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
  const [selectedFooter, setSelectedFooter] = useState(
    searchParams.get("footer") || 1
  );
  const [selectedBanner, setSelectedBanner] = useState(
    searchParams.get("banner") || 1
  );

  const [selectedFont, setSelectedFont] = useState("roboto");
  const sections = searchParams.getAll("section");
  const [selectedSection, setSelectedSection] = useState(
    sections.length === 0 ? [2] : sections
  );

  const forms = searchParams.getAll("forms");
  const [selectedForms, setSelectedForms] = useState(
    forms.length === 0 ? [0] : forms
  );
  const sliders = searchParams.getAll("sliders");
  const [selectedSliders, setSelectedSliders] = useState(
    sliders.length === 0 ? [0] : sliders
  );
  const buttons = searchParams.getAll("button");
  const [selectedButtons, setSelectedButtons] = useState(
    buttons.length === 0 ? [0] : buttons
  );

  const { fontColor, bgColor, mainColor, secondaryColor, colores } =
    useColorState();

  const { img, img2, sqrImg } = useImg();

  return (
    <div
      // FUENTES
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
            3: (
              <SectionThree
                color={secondaryColor}
                secondaryColor={mainColor}
                key={3}
                titulo1={"Ubicación"}
                titulo2={"No se que poner acá"}
                parrafo1={"Tantos párrafos vas a poner"}
                parrafo2={"lorem ipsum"}
                parrafo3={"lorem ipsum"}
                mapa={
                  "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d49866.050276885915!2d-71.50660211503384!3d-42.06531157655123!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2sus!4v1685391286444!5m2!1ses-419!2sus"
                }
              />
            ),
          }[section];
        })}
        {selectedButtons.includes(0) ? null : (
          <aside>
            {selectedButtons.map((boton) => {
              return {
                0: null,
                1: <WhatsApp numeroTelefono={1161746234} />,
                2: <ScrollToTop />,
              }[boton];
            })}
          </aside>
        )}
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
          setSelectedButtons={setSelectedButtons}
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
