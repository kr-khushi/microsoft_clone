import React from "react";

const Business = () => {
  return (
    <>
      <div className="business-cards mt-3 mx-3">
        <h1 className="font-medium text-2xl md:text-4xl">For business</h1>
        <div className="cards ">
          <div className="grid md:grid-cols-4 md:gap-5 grid-cols-1 ">
            <div className="item mt-4">
              <img src="/img/business1.avif" alt=""></img>
              <div className="content flex flex-col space-y-3 my-3">
                <h4 className="font-medium text-xl  md:text-3xl ">
                  Surface for Business
                </h4>
                <p>
                  No matter what you do, there’s a Surface to help you do it.
                </p>
                <span className="text-blue-500">Shop now ></span>
              </div>
            </div>
            <div className="item mt-4">
              <img src="/img/business2.webp" alt=""></img>
              <div className="content flex flex-col space-y-3 my-3">
                <h4 className="font-medium text-xl  md:text-3xl ">
                  Get Microsoft Teams for free
                </h4>
                <p>
                  Online meetings, chat and shared cloud storage – all in one
                  place.
                </p>
                <span className="text-blue-500">Sign up for free ></span>
              </div>
            </div>
            <div className="item mt-4">
              <img src="/img/business3.jpeg" alt=""></img>
              <div className="content flex flex-col space-y-3 my-3">
                <h4 className="font-medium text-xl  md:text-3xl ">
                  Join the era of AI
                </h4>
                <p>
                  Create, communicate, and code with the latest Microsoft AI
                  solutions.
                </p>
                <span className="text-blue-500">Explore AI solutions ></span>
              </div>
            </div>
            <div className="item mt-4">
              <img src="/img/business4.webp" alt=""></img>
              <div className="content flex flex-col space-y-3 my-3">
                <h4 className="font-medium text-xl  md:text-3xl ">
                  Welcome to your windows 365 Cloud PC
                </h4>
                <p>
                  Securely stream your Windows experience from the Microsoft
                  cloud to any device.
                </p>
                <span className="text-blue-500">Get it today ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Business;
