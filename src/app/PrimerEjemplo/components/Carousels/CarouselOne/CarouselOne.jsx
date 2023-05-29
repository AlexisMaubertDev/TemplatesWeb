import { Carousel, Col, Row } from "antd";
import Image from "next/image";
import styles from "./CarouselOne.module.css";
import { useRef } from "react";

export default function CarouselOne({ img }) {
  const ref = useRef();

  return (
    <section className={styles.container}>
      <Row gutter={16}>
        <Col span={5}>
          {img.map((item) => {
            const index = img.indexOf(item);
            return (
              <Image
                src={item.src}
                key={item.src}
                width={4896}
                height={3264}
                alt="Thumbnail Image"
                className={styles.thumbnailImage}
                onClick={() => {
                  ref.current.goTo(index, true);
                }}
              />
            );
          })}
        </Col>
        <Col span={19}>
          <Carousel ref={ref} dotPosition="left">
            {img.map((item) => {
              return (
                <Image
                  src={item.src}
                  key={item.src}
                  width={4896}
                  height={3264}
                  alt="Template Image"
                  className={styles.bannerImage}
                />
              );
            })}
          </Carousel>
        </Col>
      </Row>
    </section>
  );
}
