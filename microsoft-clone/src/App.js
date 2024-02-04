import React from "react";
import Nav from "./Component/Nav";
import Slider from "./Component/Slider";
import Promo from "./Component/Promo";

const App = () => {
  return (
    <>
      <div className="container mx-auto">
        <Nav />
        <Slider />
        <Promo />
      </div>
    </>
  );
};

export default App;
