import { useEffect, useState } from "react";
import Slider from "react-slick";
import Sapato1 from "./Sapato1";
import Ornament from "./Ornament 11";
import { Button } from "primereact/button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SaleSection.css";
import { PiTShirtThin, PiPantsThin, PiHeadphonesThin } from "react-icons/pi";
import MeuComponente from "./CardDinamico";
import Blusa1 from "./Blusa1";
import Tenis1 from "./Tenis";
import Fone1 from "./Fone";
import FeaturedCard1 from "./FeaturedCard";
import FeaturedCard2 from "./FeaturedCard2";
import FeaturedCard3 from "./FeaturedCard3";
import Esporte1 from "./Esporte";
import styles from "./ListadeProdutos.module.css";
import Ellipse1 from "./Ellipse11";
import Laye1 from "./Jordan1";
import { useNavigate } from "react-router-dom";

const SaleSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div className="custom-dots">
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (i) => <button className="custom-dot"></button>,
  };

  const [clickedIcon, setClickedIcon] = useState(null);

  const handleIconClick = (icon) => {
    setClickedIcon(icon);
  };

  const navigate = useNavigate();

  const handleProductClick = (productname) => {
    navigate(`/detalhes/${productname}`);
  };

  const products = [
    {
      id: 1,
      name: "Tênis K-Swiss V1 - Masculino",
      category: "Esporte",
      price: "$100",
      originalPrice: "$200",
    },
    {
      id: 2,
      name: "Tênis K-Swiss V2 - Masculino",
      category: "Esporte",
      price: "$100",
      originalPrice: "$200",
    },
    {
      id: 3,
      name: "Tênis K-Swiss V3 - Masculino",
      category: "Esporte",
      price: "$100",
      originalPrice: "$200",
    },
    {
      id: 4,
      name: "Tênis K-Swiss V4 - Masculino",
      category: "Esporte",
      price: "$100",
      originalPrice: "$200",
    },
    {
      id: 5,
      name: "Tênis K-Swiss V5 - Masculino",
      category: "Esporte",
      price: "$100",
      originalPrice: "$200",
    },
    {
      id: 6,
      name: "Tênis K-Swiss V6 - Masculino",
      category: "Esporte",
      price: "$100",
      originalPrice: "$200",
    },
    {
      id: 7,
      name: "Tênis K-Swiss V7 - Masculino",
      category: "Esporte",
      price: "$100",
      originalPrice: "$200",
    },
    {
      id: 8,
      name: "Tênis K-Swiss V8 - Masculino",
      category: "Esporte",
      price: "$100",
      originalPrice: "$200",
    },
    {
      id: 9,
      name: "Tênis K-Swiss V9 - Masculino",
      category: "Esporte",
      price: "$100",
      originalPrice: "$200",
    },
    {
      id: 10,
      name: "Tênis K-Swiss V10 - Masculino",
      category: "Esporte",
      price: "$100",
      originalPrice: "$200",
    },
    {
      id: 11,
      name: "Tênis K-Swiss V11 - Masculino",
      category: "Esporte",
      price: "$100",
      originalPrice: "$200",
    },
    {
      id: 12,
      name: "Tênis K-Swiss V12 - Masculino",
      category: "Esporte",
      price: "$100",
      originalPrice: "$200",
    },
    {
      id: 13,
      name: "Tênis K-Swiss V13 - Masculino",
      category: "Esporte",
      price: "$100",
      originalPrice: "$200",
    },
    {
      id: 14,
      name: "Tênis K-Swiss V14 - Masculino",
      category: "Esporte",
      price: "$100",
      originalPrice: "$200",
    },
    {
      id: 15,
      name: "Tênis K-Swiss V15 - Masculino",
      category: "Esporte",
      price: "$100",
      originalPrice: "$200",
    },
    {
      id: 16,
      name: "Tênis K-Swiss V16 - Masculino",
      category: "Esporte",
      price: "$100",
      originalPrice: "$200",
    },
    {
      id: 17,
      name: "Tênis K-Swiss V17 - Masculino",
      category: "Esporte",
      price: "$100",
      originalPrice: "$200",
    },
    {
      id: 18,
      name: "Tênis K-Swiss V18 - Masculino",
      category: "Esporte",
      price: "$100",
      originalPrice: "$200",
    },
    {
      id: 19,
      name: "Tênis K-Swiss V19 - Masculino",
      category: "Esporte",
      price: "$100",
      originalPrice: "$200",
    },
    {
      id: 20,
      name: "Tênis K-Swiss V20 - Masculino",
      category: "Esporte",
      price: "$100",
      originalPrice: "$200",
    },
    {
      id: 21,
      name: "Tênis K-Swiss V21 - Masculino",
      category: "Esporte",
      price: "$100",
      originalPrice: "$200",
    },
    {
      id: 22,
      name: "Tênis K-Swiss V22 - Masculino",
      category: "Esporte",
      price: "$100",
      originalPrice: "$200",
    },
    {
      id: 23,
      name: "Tênis K-Swiss V23 - Masculino",
      category: "Esporte",
      price: "$100",
      originalPrice: "$200",
    },
  ];

  const handleRelatedProductsClick = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };
  return (
    <>
      <MeuComponente>
        <div className="carousel-container">
          <Slider {...settings}>
            <div className=" w-full h-30rem text-white text-start p-4 relative surface-200">
              <div className="absolute top-1/3 right-0 xl:w-6 xl:pr-8 pb-8">
                <div className="absolute top-[-3rem] right-0 xl:mr-3">
                  <Ornament />
                </div>
                <div className="absolute top-[-9rem] right-0 xl:right-[-9rem] xl:w-auto">
                  <Sapato1 />
                </div>
              </div>
              <div>
                <h3 className="text-yellow-500 ml-8">
                  Melhores ofertas personalizadas
                </h3>
                <h1 className="font-inter text-gray-900 ml-8 text-7xl mt-1">
                  Queima de <br />
                  Estoque Nike
                </h1>
                <p className="text-600 ml-8 mt-0">
                  Consequat culpa exercitation mollit nisi excepteur do <br />
                  do tempor laboris eiusmod irure consectetur.
                </p>
                <Button
                  label="Ver Ofertas"
                  text
                  className="h-4rem ml-8 mt-5 text-4xl bg-pink-600 text-white border-round"
                />
              </div>
            </div>
            <div className="w-full h-30rem text-white text-start p-4 relative surface-200">
              <div className="absolute top-1/3 right-0 xl:w-6 xl:pr-8 pb-8">
                <div className="absolute top-[-3rem] right-0 xl:mr-3">
                  <Ornament />
                </div>
                <div className="absolute top-[-9rem] right-0 xl:right-[-9rem] xl:w-auto">
                  <Sapato1 />
                </div>
              </div>
              <div>
                <h3 className="text-yellow-500 ml-8">
                  Melhores ofertas personalizadas
                </h3>
                <h1 className="font-inter text-gray-900 ml-8 text-7xl mt-1">
                  Queima de <br />
                  Estoque Nike
                </h1>
                <p className="text-600 ml-8 mt-0">
                  Consequat culpa exercitation mollit nisi excepteur do <br />
                  do tempor laboris eiusmod irure consectetur.
                </p>
                <Button
                  label="Ver Ofertas"
                  text
                  className="h-4rem ml-8 mt-5 text-4xl bg-pink-600 text-white border-round"
                />
              </div>
            </div>
            <div className="w-full h-30rem text-white text-start p-4 relative surface-200">
              <div className="absolute top-1/3 right-0 xl:w-6 xl:pr-8 pb-8">
                <div className="absolute top-[-3rem] right-0 xl:mr-3">
                  <Ornament />
                </div>
                <div className="absolute top-[-9rem] right-0 xl:right-[-9rem] xl:w-auto">
                  <Sapato1 />
                </div>
              </div>
              <div>
                <h3 className="text-yellow-500 ml-8">
                  Melhores ofertas personalizadas
                </h3>
                <h1 className="font-inter text-gray-900 ml-8 text-7xl mt-1">
                  Queima de <br />
                  Estoque Nike
                </h1>
                <p className="text-600 ml-8 mt-0">
                  Consequat culpa exercitation mollit nisi excepteur do <br />
                  do tempor laboris eiusmod irure consectetur.
                </p>
                <Button
                  label="Ver Ofertas"
                  text
                  className="h-4rem ml-8 mt-5 text-4xl bg-pink-600 text-white border-round"
                />
              </div>
            </div>
            <div className="w-full h-30rem text-white text-start p-4 relative surface-200">
              <div className="absolute top-1/3 right-0 xl:w-6 xl:pr-8 pb-8">
                <div className="absolute top-[-3rem] right-0 xl:mr-3">
                  <Ornament />
                </div>
                <div className="absolute top-[-9rem] right-0 xl:right-[-9rem] xl:w-auto">
                  <Sapato1 />
                </div>
              </div>
              <div>
                <h3 className="text-yellow-500 ml-8">
                  Melhores ofertas personalizadas
                </h3>
                <h1 className="font-inter text-gray-900 ml-8 text-7xl mt-1">
                  Queima de <br />
                  Estoque Nike
                </h1>
                <p className="text-600 ml-8 mt-0">
                  Consequat culpa exercitation mollit nisi excepteur do <br />
                  do tempor laboris eiusmod irure consectetur.
                </p>
                <Button
                  label="Ver Ofertas"
                  text
                  className="h-4rem ml-8 mt-5 text-4xl bg-pink-600 text-white border-round"
                />
              </div>
            </div>
          </Slider>
        </div>

        <section className="w-full flex-col  surface-100 ">
          <div className="surface-50-900 h-3 pt-5">
            <h2 className="mt-0 mb-5 text-600 text-center">
              Coleções em destaque
            </h2>
          </div>
          <div className="flex mx-8 justify-content-center">
            <FeaturedCard1
              imageSrc={Blusa1} // Caminho para a primeira imagem
              discount="30% OFF"
              title="Novo drop"
              subtitle="Supreme"
            />
            <FeaturedCard2
              imageSrc={Tenis1} // Caminho para a segunda imagem
              discount="20% OFF"
              title="Coleção"
              subtitle="Adidas"
            />
            <FeaturedCard3
              imageSrc={Fone1} // Caminho para a terceira imagem
              discount="50% OFF"
              title="Beats"
              subtitle="Bass"
            />
          </div>
        </section>

        <section className="w-full flex-col p-8 surface-100">
          <div>
            <h2 className="mt-0 text-600 text-center">Coleções em destaque</h2>
            <div className="flex justify-content-center mt-8">
              <div
                className={`bg-white border-circle p-4 flex items-center justify-center cursor-pointer ${
                  clickedIcon === "tshirt" ? "text-pink-500" : ""
                }`}
                onClick={() => handleIconClick("tshirt")}
              >
                <PiTShirtThin className="text-8xl" />
              </div>
              <div
                className={`bg-white border-circle p-4 ml-4 flex items-center justify-center cursor-pointer ${
                  clickedIcon === "pants1" ? "text-pink-500" : ""
                }`}
                onClick={() => handleIconClick("pants1")}
              >
                <PiPantsThin className="text-8xl" />
              </div>
              <div
                className={`bg-white border-circle p-4 ml-4 flex items-center justify-center cursor-pointer ${
                  clickedIcon === "pants2" ? "text-pink-500" : ""
                }`}
                onClick={() => handleIconClick("pants2")}
              >
                <PiPantsThin className="text-8xl" />
              </div>
              <div
                className={`bg-white border-circle p-4 ml-4 flex items-center justify-center cursor-pointer ${
                  clickedIcon === "headphones" ? "text-pink-500" : ""
                }`}
                onClick={() => handleIconClick("headphones")}
              >
                <PiHeadphonesThin className="text-8xl" />
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden px-5 w-20 surface-100">
          <div className="flex justify-content-between">
            <h1 className="m-0 py-5 ml-8 pl-8">Produtos em alta</h1>
            <h4
              className="m-0 pb-5 px-8 text-pink-500 cursor-pointer mr-8"
              style={{
                marginLeft: "1rem",
                marginRight: "auto",
                paddingLeft: "50rem",
              }}
            >
              Ver todos
              <i className="pi pi-arrow-right ml-2"></i>
            </h4>
          </div>

          <div
            id="related-products"
            className="flex justify-content-center md:px-4 w-full"
            onClick={handleRelatedProductsClick}
          >
            <div className="flex flex-wrap justify-content-center gap-6">
              {Array.from(products)
                .slice(0, 12)
                .map((product, index) => (
                  <div
                    className={`${styles.productImage} cursor-pointer`}
                    key={product.id}
                    onClick={() => handleProductClick(product.name)}
                  >
                    <div
                      className={styles.productImage}
                      style={{
                        position: "absolute",
                        background: "white",
                        padding: "1rem",
                        textAlign: "center",
                        borderRadius: "2%",
                      }}
                    >
                      <Esporte1 style={{ width: "100%", height: "auto" }} />
                      {index < 2 && (
                        <h4 className="absolute top-0 right-1 bg-green-300 w-3 ml-5 border-round-3xl z-20">
                          30% OFF
                        </h4>
                      )}
                    </div>
                    <div
                      className="cursor-pointer"
                      style={{ paddingTop: "1rem" }}
                    >
                      <h6
                        style={{ marginTop: "17.5rem", marginBottom: "0.5rem" }}
                      >
                        Tênis
                      </h6>
                      <h2 className="text-500" style={{ margin: "0" }}>
                        {product.name}
                      </h2>
                      <div
                        style={{
                          marginLeft: "auto",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <h4
                          className="text-400 text-2xl"
                          style={{
                            textDecoration: "line-through",
                            marginRight: "0.5rem",
                          }}
                        >
                          {product.originalPrice}
                        </h4>
                        <h3 className="text-2xl" style={{ margin: 0 }}>
                          {product.price}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        <section className="relative section-container">
          <div className="absolute ml-8">
            <Ellipse1 />
          </div>
          <Laye1 />
          <div className="div-custom flex-column">
            <h4 className="align-items-start text-pink-600">Oferta especial</h4>
            <h1 className="m-0  align-items-start text-5xl">
              Air Jordan edição de <br />
              colecionador
            </h1>
            <h3 className="text-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </h3>
            <Button label="Ver Oferta" className="button-class mt-4 w-5" />
          </div>
        </section>
      </MeuComponente>
    </>
  );
};

export default SaleSection;
