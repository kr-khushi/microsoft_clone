import React from 'react'

const Slider = () => {
    return (
        <>
            <div className="slider flex flex-col-reverse md:flex-row-reverse bg-[#f2f2f2] mx-2 my-12">
                <div className="left flex flex-col justify-center items-center md:ml-10 md:items-baseline py-12 md:w-[50%]">
                    <h1 className='text-2xl font-medium md:text-4xl mx-5'>Surface Pro 9</h1>
                    <p className='w-3/4 mx-5 text-center md:text-left'>tablet versatility and laptop power - all in one ultra portable device</p>
                    <button className='text-white bg-blue-800 font-bold px-4 py-2 my-6 mx-5'>Learn more</button>
                </div>
                <div className="right md:w-[46%] w-52">
                    <img className='ml-16 w-[50rem] h-[40rem]  md:ml-12 md:h-80' src='/img/Canvas2.avif' alt='canvas2' />

                </div>
            </div>
        </>
    )
}

export default Slider