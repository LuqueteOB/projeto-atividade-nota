import React from "react";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeflex/primeflex.css";

import "primeicons/primeicons.css";
import Logo2 from "../Header/Logo2";
const Footer = () => {
  return (
    <footer className="bg-black-alpha-90 bg-cover md:bg-contain bg-center bg-no-repeat h-20rem w-full">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start font-bold ml-4 mt-4 md:mt-0 text-white">
        <div className="ml-8 mt-5 md:mt-0 text-center">
          <br />
          <br />
          <Logo2 />
          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit, <br />
            sed do eiusmod tempor incididunt <br /> ut labore et dolore.
          </p>
          <i className="pi pi-facebook mx-3 cursor-pointer"></i>
          <i className="pi pi-instagram mx-3 cursor-pointer"></i>
          <i className="pi pi-twitter mx-3 cursor-pointer"></i>
        </div>

        <div className="ml-0 md:ml-8 mt-8 md:mt-0 md:text-center flex-1">
          <div className="mb-4">
            <h3 className="text-white">Informação</h3>
          </div>
          <div className="space-y-2">
            <h5 className="mb-1 text-white">
              <a
                href="#"
                className="text-white hover:text-gray-300"
                style={{ textDecoration: "none" }}
              >
                Sobre Drip Store
              </a>
            </h5>
            <h5 className="mb-1 text-white">
              <a
                href="#"
                className="text-white hover:text-gray-300"
                style={{ textDecoration: "none" }}
              >
                Segurança
              </a>
            </h5>
            <h5 className="mb-1 text-white">
              <a
                href="#"
                className="text-white hover:text-gray-300"
                style={{ textDecoration: "none" }}
              >
                Wishlist
              </a>
            </h5>
            <h5 className="mb-1 text-white">
              <a
                href="#"
                className="text-white hover:text-gray-300"
                style={{ textDecoration: "none" }}
              >
                Blog
              </a>
            </h5>
            <h5 className="mb-1 text-white">
              <a
                href="#"
                className="text-white hover:text-gray-300"
                style={{ textDecoration: "none" }}
              >
                Trabalhe conosco
              </a>
            </h5>
            <h5 className="mb-1 text-white">
              <a
                href="#"
                className="text-white hover:text-gray-300"
                style={{ textDecoration: "none" }}
              >
                Meus pedidos
              </a>
            </h5>
          </div>
        </div>

        <div className="ml-8 md:ml-8 mt-8 md:mt-0 md:text-center flex-1">
          <div className="mb-4">
            <h3 className="text-white">Categorias</h3>
          </div>
          <div className="space-y-2">
            <h5 className="mb-1 text-white">
              <a
                href="#"
                className="text-white hover:text-gray-300"
                style={{ textDecoration: "none" }}
              >
                Camisetas
              </a>
            </h5>
            <h5 className="mb-1 text-white">
              <a
                href="#"
                className="text-white hover:text-gray-300"
                style={{ textDecoration: "none" }}
              >
                Calças
              </a>
            </h5>
            <h5 className="mb-1 text-white">
              <a
                href="#"
                className="text-white hover:text-gray-300"
                style={{ textDecoration: "none" }}
              >
                Bonés
              </a>
            </h5>
            <h5 className="mb-1 text-white">
              <a
                href="#"
                className="text-white hover:text-gray-300"
                style={{ textDecoration: "none" }}
              >
                HeadPhones
              </a>
            </h5>
            <h5 className="mb-1 text-white">
              <a
                href="#"
                className="text-white hover:text-gray-300"
                style={{ textDecoration: "none" }}
              >
                Tênis
              </a>
            </h5>
          </div>
        </div>

        <div className="ml-0 md:ml-8 mt-8 md:mt-0 md:text-center flex-1">
          <div className="mb-4">
            <h3 className="text-white">Contato</h3>
          </div>
          <div className="space-y-2">
            <h5 className="mb-1 text-white">
              <a
                href="#"
                className="text-white hover:text-gray-300"
                style={{ textDecoration: "none" }}
              >
                Av. Santos Dumont, 1510 - 1 <br />
                andar - Aldeota, Fortaleza -<br />
                CE, 60150-161
              </a>
            </h5>
            <h5 className="mb-1 text-white">
              <a
                href="#"
                className="text-white hover:text-gray-300"
                style={{ textDecoration: "none" }}
              >
                (85) 3051-3411
              </a>
            </h5>
          </div>
        </div>
      </div>
      <hr className="border-gray-500 w-9" />
      <h6 className="w-full text-center mt-3 text-white">
        @ 2024 Digital College
      </h6>
    </footer>
  );
};

export default Footer;
