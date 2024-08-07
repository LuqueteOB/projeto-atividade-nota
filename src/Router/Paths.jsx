import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ProductListingPage from "../Pages/ProductListingPage";
import ProductViewPage from "../Pages/ProductViewPage";
import NotFound from "../Components/NotFound/NotFound";

//=============================================================

const Paths = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produtos/" element={<ProductListingPage />} />
          <Route path="/detalhes/:name" element={<ProductViewPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Paths;
