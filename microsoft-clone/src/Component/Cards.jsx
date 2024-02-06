import React from "react";

const Cards = () => {
  return (
    <>
      <div className="cards my-14">
        <div className="grid md:grid-cols-4 md:gap-5 grid-cols-1 mx-3">
          <div className="item ">
            <img src="/img/card1.webp" alt=""></img>
            <div className="content flex flex-col space-y-3 my-3">
              <h4 className="font-medium text-2xl  md:text-3xl ">
                Surface Laptop 5
              </h4>
              <p>
                Sophisticated style and multitasking speed powered by 12th Gen
                Intel® Core, with Windows 11.
              </p>
              <span className="text-blue-500">Learn more ></span>
            </div>
          </div>
          <div className="item">
            <img src="/img/card2.webp" alt=""></img>
            <div className="content flex flex-col space-y-3 my-3">
              <h4 className="font-medium text-2xl  md:text-3xl ">
                Surface Laptop Studio
              </h4>
              <p>
                Flex your creative muscle on the most powerful Surface Laptop.
                Now available with Windows 11.
              </p>
              <span className="text-blue-500">Learn more ></span>
            </div>
          </div>
          <div className="item">
            <img src="/img/card3.webp" alt="" className="hover:scale-110"></img>
            <div className="content flex flex-col space-y-3 my-3">
              <h4 className="font-medium text-2xl  md:text-3xl ">
                Xbox Series X
              </h4>
              <p>The fastest, most powerful Xbox ever.</p>
              <span className="text-blue-500">Learn more ></span>
            </div>
          </div>
          <div className="item">
            <img src="/img/card4.avif" alt=""></img>
            <div className="content flex flex-col space-y-3 my-3">
              <h4 className="font-medium text-2xl  md:text-3xl ">
                Xbox Series S
              </h4>
              <p>
                Get online protection, secure cloud storage and innovative apps
                designed to fit your needs – all in one plan.
              </p>
              <span className="text-blue-500">Learn more ></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
