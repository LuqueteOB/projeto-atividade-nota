import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex items-center justify-content-center h-screen bg-gray-100">
      <div className="bg-gray-100  align-content-center">
        <h1 className="text-6xl font-extrabold text-pink-700 mb-6">404</h1>
        <p className="text-2xl font-semibold mb-4">Página não encontrada</p>
        <p className="text-lg mb-8">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <Link
          to="/"
          className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out no-underline"
        >
          Voltar para a Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
