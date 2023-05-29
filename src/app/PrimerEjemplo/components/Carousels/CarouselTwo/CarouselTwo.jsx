import { Carousel } from "antd";
import Image from "next/image";
import styles from "./CarouselTwo.module.css";

export default function CarouselTwo({ img }) {
  return (
    <Carousel autoplay>
      {img.map((item) => {
        return (
          <Image
            src={item.src}
            width={4896}
            height={3264}
            alt="Template Image"
            className={styles.bannerImage}
            key={item.src}
          />
        );
      })}
    </Carousel>
  );
}
