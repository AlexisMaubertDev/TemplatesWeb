"use client";
import CustomDrawer from "./components/CustomDrawer/CustomDrawer";
import styles from "./page.module.css";
import HeaderOne from "./components/Headers/HeaderOne/HeaderOne";
import HeaderTwo from "./components/Headers/HeaderTwo/HeaderTwo";
import { useState } from "react";
import { Button, Carousel, Card, Col, Row } from "antd";
import Image from "next/image";
import banner1 from "../../../public/img/1.jpg";
import banner2 from "../../../public/img/2.jpg";
import banner3 from "../../../public/img/3.jpg";
import banner4 from "../../../public/img/4.jpg";
import thumbnail1 from "../../../public/img/t1.png";
import thumbnail2 from "../../../public/img/t2.png";
import thumbnail3 from "../../../public/img/t3.png";
import Meta from "antd/es/card/Meta";
import CarouselOne from "./components/Carousels/CarouselOne";

export default function PrimerEjemplo() {
  const img = [banner1, banner2, banner3, banner4];
  const [open, setOpen] = useState(false);
  const [selectedHeader, setSelectedHeader] = useState(1);
  const [selectedBanner, setSelectedBanner] = useState(2);
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
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
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
          1: <HeaderOne color={mainColor} />,
          2: <HeaderTwo color={mainColor} />,
        }[selectedHeader]
      }
      <main className={styles.mainContainer}>
        {
          {
            1: (
              <Carousel autoplay>
                {img.map((item) => {
                  return (
                    <Image
                      src={item.src}
                      width={4896}
                      height={3264}
                      alt="Template Image"
                      className={styles.bannerImage}
                    />
                  );
                })}
              </Carousel>
            ),
            2: <CarouselOne img={img} />,
          }[selectedBanner]
        }
        <div
          className={styles.firstSection}
          style={{
            backgroundColor: `rgb(${secondaryColor.metaColor.r}, ${secondaryColor.metaColor.g}, ${secondaryColor.metaColor.b})`,
          }}
        >
          <h2>Modificá tanto como quieras</h2>
          <p>
            Jugá con los colores hasta encontrar la combinación que más te
            guste. No dudes en contactarnos si tenés alguna duda.
          </p>
          <h3>Explorá más ejemplos</h3>
          <Row gutter={[16, 16]} justify={"center"}>
            <Col xl={{ span: 8 }} sm={{ span: 12 }} xs={{ span: 22 }}>
              <Card
                hoverable
                cover={
                  <Image
                    src={thumbnail1.src}
                    width={241}
                    height={426}
                    alt="Thumbnail Image"
                    className={styles.thumbnailImage}
                  />
                }
              >
                <Meta
                  title="E-commerce"
                  description="Todo lo que necesitas para tu página de ventas OnLine."
                />
              </Card>
            </Col>
            <Col xl={{ span: 8 }} sm={{ span: 12 }} xs={{ span: 22 }}>
              <Card
                hoverable
                cover={
                  <Image
                    src={thumbnail2.src}
                    width={241}
                    height={426}
                    alt="Thumbnail Image"
                    className={styles.thumbnailImage}
                  />
                }
              >
                <Meta
                  title="Portfolio"
                  description="Toda tu información en un sólo lugar. Galería de tus proyectos y más."
                />
              </Card>
            </Col>
            <Col xl={{ span: 8 }} sm={{ span: 12 }} xs={{ span: 22 }}>
              <Card
                hoverable
                cover={
                  <Image
                    src={thumbnail3.src}
                    width={241}
                    height={426}
                    alt="Thumbnail Image"
                    className={styles.thumbnailImage}
                  />
                }
              >
                <Meta
                  title="Personalizados al 100%"
                  description="Comentanos lo que necesitas y nosotros lo vamos a hacer posible."
                />
              </Card>
            </Col>
          </Row>
        </div>
      </main>
      <aside>
        <CustomDrawer
          open={open}
          onClose={onClose}
          fontColor={fontColor}
          setFontColor={setFontColor}
          bgColor={bgColor}
          setBgColor={setBgColor}
          mainColor={mainColor}
          setMainColor={setMainColor}
          secondaryColor={secondaryColor}
          setSecondaryColor={setSecondaryColor}
          setSelectedHeader={setSelectedHeader}
          setSelectedBanner={setSelectedBanner}
        />
        <Button
          type="primary"
          onClick={showDrawer}
          className={styles.botonColor}
        >
          Personalizar
        </Button>
      </aside>
    </div>
  );
}
