import React from "react";
import Nav from "./Component/Nav";
import Slider from "./Component/Slider";
import Promo from "./Component/Promo";
import Cards from "./Component/Cards";
import Business from "./Component/Business";

const App = () => {
  return (
    <>
      <div className="container mx-auto">
        <Nav />
        <Slider />
        <Promo />
        <Cards />
        <Business />
      </div>
    </>
  );
};

export default App;
