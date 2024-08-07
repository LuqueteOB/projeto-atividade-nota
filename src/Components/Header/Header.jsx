/* import React, { useEffect, useRef, useState } from "react";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Logo from "./Logo";
import "primeflex/primeflex.css";
import "./Header.css";
import { InputText } from "primereact/inputtext";
import "primeicons/primeicons.css";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { Button } from "primereact/button";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ onSearch }) => {
  // Adicione a prop onSearch
  const [entrarAtivo, setEntrarAtivo] = useState(false);
  const [cadastrarAtivo, setCadastrarAtivo] = useState(false);
  const [carrinhoAtivo, setCarrinhoAtivo] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para o termo de pesquisa
  const [isClicked, setIsClicked] = useState(false);

  const entrarButtonRef = useRef(null);
  const cadastrarButtonRef = useRef(null);
  const carrinhoButtonRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        entrarButtonRef.current &&
        !entrarButtonRef.current.contains(event.target) &&
        cadastrarButtonRef.current &&
        !cadastrarButtonRef.current.contains(event.target) &&
        carrinhoButtonRef.current &&
        !carrinhoButtonRef.current.contains(event.target)
      ) {
        setEntrarAtivo(false);
        setCadastrarAtivo(false);
        setCarrinhoAtivo(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleEntrarClick = () => {
    setEntrarAtivo(!entrarAtivo);
    setCadastrarAtivo(false);
  };

  const handleCadastrarClick = () => {
    setCadastrarAtivo(!cadastrarAtivo);
    setEntrarAtivo(false);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value); // Chama a função de pesquisa
  };

  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do link
    setIsClicked(true);
    handleRedirectWithDelay("/carrinho");
  };

  useEffect(() => {
    // Atualiza o estado activeLink com base no caminho atual
    switch (location.pathname) {
      case "/":
        setActiveLink(0);
        break;
      case "/produtos":
        setActiveLink(1);
        break;
      case "/categorias":
        setActiveLink(2);
        break;
      case "/meus-pedidos":
        setActiveLink(3);
        break;
      default:
        setActiveLink(-1); // Opcional, para lidar com caminhos desconhecidos
        break;
    }
  }, [location.pathname]); // Reage às mudanças no caminho da URL

  const navigate = useNavigate();

  const handleRedirectWithDelay = (to) => {
    setTimeout(() => {
      navigate(to);
    }, 500); // 2 segundos de atraso
  };

  return (
    <header className="w-full bg-white border-round h-auto p-3 ">
      <div className="flex items-center justify-between sm:ml-1 xl:ml-8 pb-6 p-4">
        <Logo />
        <div className="ml-4 xl:w-full">
          <IconField>
            <InputIcon className="pi pi-search cursor-pointer absolute" />
            <InputText
              type="text"
              className="p-inputtext-lg border-round-md w-12"
              placeholder="Pesquisar Produto..."
              value={searchTerm} // Valor do input é o estado searchTerm
              onChange={handleSearchChange} // Atualiza o estado searchTerm
              style={{
                textDecoration: "none",
                width: "100%",
              }}
            />
          </IconField>
        </div>
        <div className="flex flex-col items-start space-y-4 xl:space-y-0 xl:flex-row xl:space-x-4">
          <Button
            label="Cadastre-se"
            text
            className={`p-button-sm  h-2rem xl:mt-2 xl:ml-6 text-400 w-6 ${
              cadastrarAtivo ? "bg-pink-500 text-white" : "hover:bg-pink-500"
            } outline-none`}
            onClick={() => {
              handleCadastrarClick();
              handleRedirectWithDelay("/cadastre-se");
            }}
          />
          <Button
            label="Entrar"
            text
            className={`p-button-sm h-2rem xl:mt-2 ml-5 pr-5 text-400 ${
              entrarAtivo ? "bg-pink-500 text-white" : "hover:bg-pink-500"
            } outline-none `}
            onClick={() => {
              handleEntrarClick();
              handleRedirectWithDelay("/entrar");
            }}
          />

          <Link to="#" className="no-blue-link list-none">
            <InputIcon
              ref={carrinhoButtonRef}
              className={`pi pi-shopping-cart cursor-pointer mt-2 ml-7 large-cart-icon ${
                isClicked
                  ? "text-pink-500"
                  : carrinhoAtivo
                  ? "text-pink-500"
                  : "icon-hover-pink"
              }`}
              onClick={handleClick}
              style={{ fontSize: "25px" }}
            />
          </Link>
        </div>
      </div>
      <nav className="flex flex-row font-bold text-center p-1 border-round mt-2 ml-8 xl:w-6 text-2xl">
        <Link
          to="/"
          className={`m-2 cursor-pointer ${
            activeLink === 0 ? "text-pink-500" : "text-300 hover:text-pink-500"
          }`}
          style={{ textDecoration: "none" }}
        >
          Home
        </Link>
        <Link
          to="/produtos"
          className={`m-2 cursor-pointer ${
            activeLink === 1 ? "text-pink-500" : "text-300 hover:text-pink-500"
          }`}
          style={{ textDecoration: "none" }}
        >
          Produtos
        </Link>
        <Link
          to="/categorias"
          className={`m-2 cursor-pointer ${
            activeLink === 2 ? "text-pink-500" : "text-300 hover:text-pink-500"
          }`}
          style={{ textDecoration: "none" }}
        >
          Categorias
        </Link>
        <Link
          to="/meus-pedidos"
          className={`m-2 cursor-pointer ${
            activeLink === 3 ? "text-pink-500" : "text-300 hover:text-pink-500"
          }`}
          style={{ textDecoration: "none" }}
        >
          Meus Pedidos
        </Link>
      </nav>
    </header>
  );
};

export default Header;
 */

//====================================================

import React, { useEffect, useRef, useState } from "react";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Logo from "./Logo";
import "primeflex/primeflex.css";
import "./Header.css";
import { InputText } from "primereact/inputtext";
import "primeicons/primeicons.css";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { Button } from "primereact/button";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = ({ onSearch }) => {
  const [entrarAtivo, setEntrarAtivo] = useState(false);
  const [cadastrarAtivo, setCadastrarAtivo] = useState(false);
  const [carrinhoAtivo, setCarrinhoAtivo] = useState(false);
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem("searchTerm") || ""
  );
  const [isClicked, setIsClicked] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const entrarButtonRef = useRef(null);
  const cadastrarButtonRef = useRef(null);
  const carrinhoButtonRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        entrarButtonRef.current &&
        !entrarButtonRef.current.contains(event.target) &&
        cadastrarButtonRef.current &&
        !cadastrarButtonRef.current.contains(event.target) &&
        carrinhoButtonRef.current &&
        !carrinhoButtonRef.current.contains(event.target)
      ) {
        setEntrarAtivo(false);
        setCadastrarAtivo(false);
        setCarrinhoAtivo(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActiveLink(0);
        break;
      case "/produtos":
        setActiveLink(1);
        break;
      case "/categorias":
        setActiveLink(2);
        break;
      case "/meus-pedidos":
        setActiveLink(3);
        break;
      default:
        setActiveLink(-1);
        break;
    }
  }, [location.pathname]);

  const handleEntrarClick = () => {
    setEntrarAtivo(!entrarAtivo);
    setCadastrarAtivo(false);
  };

  const handleCadastrarClick = () => {
    setCadastrarAtivo(!cadastrarAtivo);
    setEntrarAtivo(false);
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  const handleSearch = (term) => {
    if (term.trim()) {
      localStorage.setItem("searchTerm", term);
      navigate(`/produtos?search=${encodeURIComponent(term)}`);
      onSearch(term);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (location.pathname === "/") {
        navigate(`/produtos?search=${encodeURIComponent(searchTerm)}`);
        handleSearch(searchTerm);
      } else {
        handleSearch(searchTerm);
      }
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setIsClicked(true);
    handleRedirectWithDelay("/carrinho");
  };

  const handleRedirectWithDelay = (to) => {
    setTimeout(() => {
      navigate(to);
    }, 500);
  };

  return (
    <header className="w-full bg-white border-round h-auto p-3">
      <div className="flex items-center justify-between sm:ml-1 xl:ml-8 pb-6 p-4">
        <Logo />
        <div className="ml-4 xl:w-full">
          <IconField>
            <InputIcon className="pi pi-search cursor-pointer absolute" />
            <InputText
              type="text"
              className="p-inputtext-lg border-round-md w-12"
              placeholder="Pesquisar Produto..."
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
              style={{
                textDecoration: "none",
                width: "100%",
              }}
            />
          </IconField>
        </div>
        <div className="flex flex-col items-start space-y-4 xl:space-y-0 xl:flex-row xl:space-x-4">
          <Button
            label="Cadastre-se"
            text
            className={`p-button-sm h-2rem xl:mt-2 xl:ml-6 text-400 w-6 ${
              cadastrarAtivo ? "bg-pink-500 text-white" : "hover:bg-pink-500"
            } outline-none`}
            onClick={() => {
              handleCadastrarClick();
              handleRedirectWithDelay("/cadastre-se");
            }}
          />
          <Button
            label="Entrar"
            text
            className={`p-button-sm h-2rem xl:mt-2 ml-5 pr-5 text-400 ${
              entrarAtivo ? "bg-pink-500 text-white" : "hover:bg-pink-500"
            } outline-none`}
            onClick={() => {
              handleEntrarClick();
              handleRedirectWithDelay("/entrar");
            }}
          />
          <Link to="#" className="no-blue-link list-none">
            <InputIcon
              ref={carrinhoButtonRef}
              className={`pi pi-shopping-cart cursor-pointer mt-2 ml-7 large-cart-icon ${
                isClicked
                  ? "text-pink-500"
                  : carrinhoAtivo
                  ? "text-pink-500"
                  : "icon-hover-pink"
              }`}
              onClick={handleClick}
              style={{ fontSize: "25px" }}
            />
          </Link>
        </div>
      </div>
      <nav className="flex flex-row font-bold text-center p-1 border-round mt-2 ml-8 xl:w-6 text-2xl">
        <Link
          to="/"
          className={`m-2 cursor-pointer ${
            activeLink === 0 ? "text-pink-500" : "text-300 hover:text-pink-500"
          }`}
          style={{ textDecoration: "none" }}
        >
          Home
        </Link>
        <Link
          to="/produtos"
          className={`m-2 cursor-pointer ${
            activeLink === 1 ? "text-pink-500" : "text-300 hover:text-pink-500"
          }`}
          style={{ textDecoration: "none" }}
        >
          Produtos
        </Link>
        <Link
          to="/categorias"
          className={`m-2 cursor-pointer ${
            activeLink === 2 ? "text-pink-500" : "text-300 hover:text-pink-500"
          }`}
          style={{ textDecoration: "none" }}
        >
          Categorias
        </Link>
        <Link
          to="/meus-pedidos"
          className={`m-2 cursor-pointer ${
            activeLink === 3 ? "text-pink-500" : "text-300 hover:text-pink-500"
          }`}
          style={{ textDecoration: "none" }}
        >
          Meus Pedidos
        </Link>
      </nav>
    </header>
  );
};

export default Header;
