import sqrImg from "../../../../public/img/sqr1.jpeg";
import banner1 from "../../../../public/img/1.jpg";
import banner2 from "../../../../public/img/2.jpg";
import banner3 from "../../../../public/img/3.jpg";
import banner4 from "../../../../public/img/4.jpg";
import thumbnail1 from "../../../../public/img/t1.png";
import thumbnail2 from "../../../../public/img/t2.png";
import thumbnail3 from "../../../../public/img/t3.png";
const useImg = () => {
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

  return { img, img2, sqrImg };
};

export default useImg;
