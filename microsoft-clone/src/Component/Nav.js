import React from "react";

const Nav = () => {
    return (
        <>
            <div className="navbar flex justify-between items-center p-4">
                <div className="flex justify-center items-center md:order-2">
                    <div className="hamburger inline-block p-4 cursor-pointer md:hidden">
                        <div className="line h-0.5 w-6 my-1 bg-black"></div>
                        <div className="line h-0.5 w-6 my-1 bg-black"></div>
                        <div className="line h-0.5 w-6 my-1 bg-black"></div>
                    </div>
                    <div className="search md:hidden w-5">
                        <img src="/img/Search.svg" />
                    </div>
                </div>

                <div className="logo  text-center md:order-1 flex">
                    <div className=""><img className="w-28 md:w-[50%]" src="/img/microsoft2.png" alt="" /></div>
                    <div className="features absolute md:static w-fit md:w-auto bg-gray-200 
                     md:bg-white inset-0 md:flex md:items-center md:-ml-36 md:space-x-3 -translate-x-96 md:translate-x-0">
                        <div className="fitem hover:underline">Microsoft 365</div>
                        <div className="fitem hover:underline">Office</div>
                        <div className="fitem hover:underline">Windows</div>
                        <div className="fitem hover:underline">Surface</div>
                        <div className="fitem hover:underline">Xbox</div>
                        <div className="fitem hover:underline">Support</div>

                    </div>
                </div>
                <div className="cart text-center md:order-3 flex">
                    {/* <div className="search hidden md:block mr-6">All Account</div> */}

                    <img className='w-5 h-5 hidden md:block mr-4' src="/img/Search.svg" />

                    <div className="flex">
                        <img className="w-5 h-5 mr-4" src="/img/cart.png" />
                        <img className="w-5 h-5 mr-4" src="/img/account.png" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;
