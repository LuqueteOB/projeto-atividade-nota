import React from 'react';
import Fone1 from './Fone';
import { Button } from 'primereact/button';


const FeaturedCard3 = ({ discount, title, subtitle }) => {
  return (
    <>
    <div className="custom-width bg-blue-100 mx-1 border-round-2xl relative justify-center overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 z-10">
        <Fone1 className="w-full h-full object-contain" />
      </div>
      <div className="bg-green-300 w-3 ml-5 border-round-3xl z-20 relative">
        <h3 className="ml-3 mt-8">{discount}</h3>
      </div>
      <div className="w-6 ml-5 mt-1 z-20 relative">
        <h1 className="text-5xl mt-1">
          {title} <br />
          {subtitle}
        </h1>
        <Button label="Comprar" className="custom-button mt-4" />
      </div>
    </div>
   </>
    
  );
};

export default FeaturedCard3;