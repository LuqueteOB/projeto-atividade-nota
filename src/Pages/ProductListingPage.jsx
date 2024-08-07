import React, { useState } from "react";
import Header from "../Components/Header/Header";
import ProducListing from "../Components/Filter/ProducListing";
import Footer from "../Components/Footer/Footer";

const ProductListingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <ProducListing searchTerm={searchTerm} />
      <Footer />
    </>
  );
};

export default ProductListingPage;
