"use client";

// IMPORTS REACT Y NEXT
import { useEffect, useState } from "react";
import { Button } from "antd";
import { useSearchParams } from "next/navigation";

// DRAWERS
import DrawerColors from "./components/Drawers/DrawerColors/DrawerColors";
import DrawerSections from "./components/Drawers/DrawerSections/DrawerSections";

// ESTILOS
import styles from "./page.module.css";

// HEADERS
import HeaderOne from "./components/Headers/HeaderOne/HeaderOne";
import HeaderTwo from "./components/Headers/HeaderTwo/HeaderTwo";
import HeaderThree from "./components/Headers/HeaderThree/HeaderThree";

// BOTONES
import WhatsApp from "./components/Buttons/Whatsapp/Whatsapp";
import ScrollToTop from "./components/Buttons/scrollToTop/scrollToTop";

// BANNER
import CarouselOne from "./components/Carousels/CarouselOne/CarouselOne";
import CarouselTwo from "./components/Carousels/CarouselTwo/CarouselTwo";

// SECCIONES
import SectionOne from "./components/Sections/SectionOne/SectionOne";
import SectionTwo from "./components/Sections/SectionTwo/SectionTwo";
import SectionThree from "./components/Sections/SectionThree/SectionThree";

//FORMS
import FormOne from "./components/Forms/FormOne/FormOne";

//SLIDERS

//FOOTERS
import FooterOne from "./components/Footers/FooterOne/FooterOne";
import FooterTwo from "./components/Footers/FooterTwo/FooterTwo";

//HOOKS
import useColorState from "./hook/useColorState";
import useImg from "./hook/useImg";

//FONTS y otros
import { roboto, boogaloo, enriqueta } from "./fonts/fonts";
import { GrTwitter, GrFacebookOption, GrInstagram } from "react-icons/gr";

export default function PrimerEjemplo() {
  const { fontColor, bgColor, mainColor, secondaryColor, colores } =
    useColorState();
  const { img, img2, sqrImg } = useImg();
  const searchParams = useSearchParams();

  const [openColors, setOpenColors] = useState(false);
  const [openSections, setOpenSections] = useState(false);

  const [selectedFont, setSelectedFont] = useState("roboto");

  const [selectedModules, setSelectedModules] = useState({
    header: {
      selected: searchParams.get("header") || 1,
      bgColor,
      fontColor,
      mainColor,
      hover: null,
    },
    footer: {
      selected: searchParams.get("footer") || 1,
      bgColor,
      fontColor,
      mainColor,
    },
    banner: {
      selected: searchParams.get("banner") || 1,
      bgColor,
      fontColor,
      mainColor,
    },
    sections: {
      selected:
        searchParams.getAll("section").length === 0
          ? [2]
          : searchParams.getAll("section"),
      bgColor,
      fontColor,
      mainColor,
    },
    forms: {
      selected:
        searchParams.getAll("forms").length === 0
          ? [0]
          : searchParams.getAll("forms"),
      bgColor,
      fontColor,
      mainColor,
    },
    sliders: {
      selected:
        searchParams.getAll("sliders").length === 0
          ? [0]
          : searchParams.getAll("sliders"),
      bgColor,
      fontColor,
      mainColor,
    },
    buttons: {
      selected:
        searchParams.getAll("button").length === 0
          ? [0]
          : searchParams.getAll("button"),
      bgColor,
      fontColor,
      mainColor,
    },
  });

  useEffect(() => {
    if (selectedModules.header.selected === 3) {
      setSelectedModules((current) => ({
        ...current,
        ...{
          banner: {
            selected: 0,
          },
        },
      }));
    }
  }, [selectedModules]);

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
          1: (
            <HeaderOne
              color={mainColor}
              hoverStyle={selectedModules.header.hover}
            />
          ),
          2: <HeaderTwo color={mainColor} />,
          3: (
            <HeaderThree
              red1={{ link: "www.twitter.com", name: <GrTwitter /> }}
              red2={{ link: "www.facebook.com", name: <GrFacebookOption /> }}
              red3={{ link: "www.instagram.com", name: <GrInstagram /> }}
              color={mainColor}
            >
              <a href="">OpcionA</a>
              <a href="">OpcionB</a>
              <a href="">OpcionC</a>
            </HeaderThree>
          ),
        }[selectedModules.header.selected]
      }
      <main
        className={styles.mainContainer}
        style={
          selectedModules.header.selected != 0 &&
          selectedModules.header.selected != 3
            ? { marginTop: "64px" }
            : null
        }
      >
        {
          {
            0: null,
            1: <CarouselOne img={img} />,
            2: <CarouselTwo img={img} />,
          }[selectedModules.banner.selected]
        }

        {selectedModules.sections.selected.map((section) => {
          return {
            0: null,
            1: (
              <SectionOne
                color={selectedModules.sections.bgColor}
                img={img2}
                key={1}
              />
            ),
            2: (
              <SectionTwo
                color={selectedModules.sections.bgColor}
                fontColor={selectedModules.sections.fontColor}
                secondaryColor={selectedModules.sections.mainColor}
                img={sqrImg}
                key={2}
              />
            ),
            3: (
              <SectionThree
                color={selectedModules.sections.mainColor}
                secondaryColor={selectedModules.sections.bgColor}
                key={3}
                titulo1={"Ubicación"}
                parrafo1={"Avenida Siempre Viva 123"}
                titulo2={"Horarios"}
                parrafo2={"Lunes a Viernes de 9hs a 18hs"}
                parrafo3={"Sabados de 9hs a 13hs"}
                mapa={
                  "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d49866.050276885915!2d-71.50660211503384!3d-42.06531157655123!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2sus!4v1685391286444!5m2!1ses-419!2sus"
                }
              />
            ),
          }[section];
        })}
        {selectedModules.forms.selected.map((form) => {
          return {
            0: null,
            1: (
              <FormOne
                titulo="Contacto"
                parrafo1="¿Como podemos ayudarte?"
                parrafo2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi doloribus, doloremque expedita possimus dicta fugit animi, molestias optio minima repellat modi ipsa omnis, totam itaque perspiciatis sit atque quod cupiditate."
                color={selectedModules.forms.mainColor}
                fontColor={selectedModules.forms.fontColor}
                secondaryColor={selectedModules.forms.bgColor}
              />
            ),
          }[selectedModules.forms.selected];
        })}
      </main>
      {
        {
          0: null,
          1: (
            <FooterOne
              red1={{ link: "www.facebook.com", name: "Facebook" }}
              red2={{ link: "www.instagram.com", name: "Instagram" }}
              red3={{ link: "www.twitter.com", name: "Twitter" }}
            >
              <a>Opción 1</a>
              <a>Opción 2</a>
              <a>Opción 3</a>
            </FooterOne>
          ),
          2: (
            <FooterTwo
              red1={{ link: "www.facebook.com", name: "Facebook" }}
              red2={{ link: "www.instagram.com", name: "Instagram" }}
              red3={{ link: "www.twitter.com", name: "Twitter" }}
              terms="Terminos y condiciones"
              copy="Copyright © 1999-2023 NombreEmpresa"
            />
          ),
        }[selectedModules.footer.selected]
      }
      {selectedModules.buttons.selected.includes(0) ? null : (
        <aside>
          {selectedModules.buttons.selected.map((boton) => {
            return {
              0: null,
              1: <WhatsApp numeroTelefono={1161746234} />,
              2: <ScrollToTop />,
            }[boton];
          })}
        </aside>
      )}
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
          selectedModules={selectedModules}
          setSelectedModules={setSelectedModules}
        />
        <div className={styles.containerBotones}>
          <Button
            type="primary"
            onClick={() => setOpenSections(true)}
            className={styles.botonColor}
          >
            Secciones
          </Button>
          <Button
            type="primary"
            onClick={() => setOpenColors(true)}
            className={styles.botonColor}
          >
            Personalizar
          </Button>
        </div>
      </aside>
    </div>
  );
}
