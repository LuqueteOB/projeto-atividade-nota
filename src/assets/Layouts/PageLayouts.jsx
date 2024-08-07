 import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer';




const PageLayouts = ({ children }) => {
    return ( 
        <>
         <Header />
         {children}
         <Footer />
        </>
     );
}
 
export default PageLayouts;





