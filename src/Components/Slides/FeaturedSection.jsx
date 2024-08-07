import React from "react";
import FeaturedCard from "./FeaturedCard";
import Blusa1 from "./Blusa1";
import Tenis1 from "./Tenis";
import Fone1 from "./Fone";
import FeaturedCard2 from "./FeaturedCard2";
import FeaturedCard3 from "./FeaturedCard3";

const FeaturedSection = () => {
  return (
    <section className="w-screen h-30rem text-white text-start p-4 relative surface-200">
      <h2 className="mt-5 mb-5 mx-8 text-500">Coleções em destaque</h2>
      <div className="flex justify-between mx-8">
        <FeaturedCard
          imageSrc={Blusa1} // Caminho para a primeira imagem
          discount="30% OFF"
          title="Novo drop"
          subtitle="Supreme"
        />
        <FeaturedCard2
          imageSrc={Tenis1} // Caminho para a segunda imagem
          discount="20% OFF"
          title="coleção"
          subtitle="Adidas"
        />
        <FeaturedCard3
          imageSrc={Fone1} // Caminho para a terceira imagem
          discount="50% OFF"
          title="Novo"
          subtitle="Beast Bass"
        />
      </div>
    </section>
  );
};

export default FeaturedSection;
