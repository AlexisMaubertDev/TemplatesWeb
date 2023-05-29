import styles from "./SectionOne.module.css";
import { Row, Col, Card } from "antd";
import Image from "next/image";
import Meta from "antd/es/card/Meta";

export default function SectionOne({ color, img }) {
  return (
    <div
      className={styles.containerSection}
      style={{
        backgroundColor: `rgb(${color.metaColor.r}, ${color.metaColor.g}, ${color.metaColor.b})`,
      }}
    >
      <h2>Modificá tanto como quieras</h2>
      <p>
        Jugá con los colores hasta encontrar la combinación que más te guste. No
        dudes en contactarnos si tenés alguna duda.
      </p>
      <h3>Explorá más ejemplos</h3>
      <Row gutter={[16, 16]} justify={"center"}>
        {img.map((item) => {
          return (
            <Col
              xl={{ span: 8 }}
              sm={{ span: 12 }}
              xs={{ span: 22 }}
              key={item.title}
            >
              <Card
                hoverable
                cover={
                  <Image
                    src={item.img.src}
                    width={241}
                    height={426}
                    alt="Thumbnail Image"
                    className={styles.thumbnailImage}
                  />
                }
              >
                <Meta title={item.title} description={item.desc} />
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
