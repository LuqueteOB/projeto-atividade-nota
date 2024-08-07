import React, { useState } from "react";
import Sapato101 from "./Sapato10";
import Slider from "react-slick";
import "./ProductView.css";
import "primeicons/primeicons.css";
import MeuComponente3 from "./CardDinamico3";
import styles from "../Filter/ListadeProdutos2.module.css";
import Esporte1 from "../Slides/Esporte";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProductView = () => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null); // Novo estado para rastrear o botão de cor selecionado
  const [sliderBackgroundColor, setSliderBackgroundColor] = useState("#E2E3FF"); // Cor de fundo padrão

  const handleThumbnailClick = (index) => {
    setSelectedIndex(index);
    setSliderBackgroundColor(colors[index]); // Atualiza a cor de fundo
  };

  const handleColorClick = (index) => {
    setSelectedColor(index);
  };

  const colors = ["#E2E3FF", "#FFE8BC", "#FFC0BC", "#DEC699", "#E8DFCF"];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Certifique-se de que as setas estão habilitadas
  };

  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (index) => {
    setSelectedSize(index);
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
  ];

  const handleProductClick = (productName) => {
    navigate(`/detalhes/${productName}`);
  };

  const handleRelatedProductsClick = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <MeuComponente3>
      <section className="section-custom surface-100">
        <nav className="text-xs ml-7 text-sm text-500 pb-3 pt-3">
          <Link
            to="/"
            className="no-underline text-gray-500 mx-2 hover:text-gray-700 focus:text-gray-700"
          >
            Home
          </Link>
          /
          <Link
            to="/produtos"
            className="no-underline text-gray-500 mx-2 hover:text-gray-700 focus:text-gray-700"
          >
            Produtos
          </Link>
          /
          <Link
            to="/produtos"
            className="no-underline text-gray-500 mx-2 hover:text-gray-700 focus:text-gray-700"
          >
            Tênis
          </Link>
          /
          <Link
            to="/produtos"
            className="no-underline text-gray-500 mx-2 hover:text-gray-700 focus:text-gray-700"
          >
            Nike
          </Link>
          /
          <Link className="no-underline text-gray-500 mx-2 hover:text-gray-700 focus:text-gray-700">
            Tênis Nike Revolution 6 Next Nature Masculino
          </Link>
        </nav>
        <div className="container ">
          <div
            className="carousel-container2 ml-6"
            style={{ backgroundColor: sliderBackgroundColor }}
          >
            <Slider {...settings} className="slider-custom">
              <div className="mt-8 pt-8 ">
                <Sapato101 />
              </div>
              <div className="mt-8 pt-8">
                <Sapato101 />
              </div>
              <div className="mt-8 pt-8">
                <Sapato101 />
              </div>
            </Slider>
          </div>

          <section className="details-container surface-100">
            <h1 className="text-black text-5xl">
              Tênis Nike Revolution 6 <br />
              Next Nature Masculino
            </h1>
            <p className="info">Casual | Nike | REF:38416711</p>
            <div className="rating flex items-center">
              <span className="pi pi-star-fill text-orange-700 mr-1"></span>
              <span className="pi pi-star-fill text-orange-700 mr-1"></span>
              <span className="pi pi-star-fill text-orange-700 mr-1"></span>
              <span className="pi pi-star-fill text-orange-700 mr-1"></span>
              <span className="pi pi-star text-orange-700 mr-1 "></span>
              <div className="flex align-items-center h-2rem ml-2 -mt-2 bg-yellow-500 border-round-lg">
                <p className="text-lg font-semibold border p-1 ml-2 ">4.7</p>
                <span className="pi pi-star-fill mr-2 text-white"></span>
              </div>
              <p className="text-sm -mt-1 ml-1 ">(90 avaliações)</p>
            </div>

            <div className="flex align-items-center h-2rem ml-2 -mt-2  border-round-lg">
              <p className="text-sm text-black-alpha-50 pt-1">R$</p>
              <h1 className="price ml-1 text-black-alpha-90">219,00</h1>
              <p className="ml-2 pt-1 line-through text-400">219,00</p>
            </div>

            <h2 className="description-title">Descrição do produto</h2>
            <p className="description-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <h3 className="size-title">Tamanho</h3>
            <div className="sizes">
              {[39, 40, 41, 42, 43].map((size, index) => (
                <button
                  key={index}
                  className={`size-btn ${
                    selectedSize === index ? "selected" : ""
                  }`}
                  onClick={() => handleSizeClick(index)}
                >
                  {size}
                </button>
              ))}
            </div>

            <h3>Cor</h3>
            <div>
              {["cyan", "orange", "gray", "purple"].map((color, index) => (
                <button
                  key={index}
                  className={`button-color ${
                    color === "black" ? "bg-black" : `bg-${color}-500`
                  } cursor-pointer ${
                    selectedColor === index ? "selected" : ""
                  }`}
                  onClick={() => handleColorClick(index)}
                ></button>
              ))}
            </div>
            <button className="buy-btn w-13rem border-round-lg">COMPRAR</button>
          </section>
        </div>
        <section className="thumbnails-section ml-7">
          <div className="product-thumbnails cursor-pointer">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`thumbnail ${
                  selectedIndex === index ? "selected" : ""
                }`}
                onClick={() => handleThumbnailClick(index)}
                style={{ backgroundColor: colors[index] }} // Aplicando a cor de fundo
              >
                <Sapato101 />
              </div>
            ))}
          </div>
        </section>

        <section className="w-full">
          <div className="w-13 flex justify-content-between pb-3 pt-7 px-5 w-11 ml-8 mr-8">
            <h1 className="m-0 py-3 ml-4">Produtos Relacionados</h1>
            <h4
              className="m-0 px-8 text-pink-500 cursor-pointer mr-5"
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
            className="flex justify-content-center -mx-6 ml-4 w-full"
            onClick={handleRelatedProductsClick}
          >
            <div className="flex flex-wrap justify-content-around px-4 w-full ml-8">
              {products.slice(0, 4).map((product, index) => (
                <div
                  className={`${styles.productImage} cursor-pointer relative`}
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
      </section>
    </MeuComponente3>
  );
};

export default ProductView;
