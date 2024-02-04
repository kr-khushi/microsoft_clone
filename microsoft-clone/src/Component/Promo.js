import React from 'react'

const Promo = () => {
    return (
        <>
            <div className="mt-4 md:flex md:justify-center">
                <div className="promo space-y-4 flex flex-col md:flex-row">
                    <div className="item flex items-center mx-4 mt-4 space-x-2 md:flex md:flex-col">
                        <img className='w-10' src='/img/Squres.svg' alt='' />
                        <span className='font-medium text-center'>Choose Your Microsoft 365</span>
                    </div>
                    <div className="item flex items-center mx-4 space-x-2  md:flex md:flex-col">
                        <img className='w-10' src='/img/Xbox.svg' alt='' />
                        <span className='font-medium text-center'>Shop Xbox games and consoles</span>
                    </div>
                    <div className="item flex items-center mx-4 space-x-2  md:flex md:flex-col">
                        <img className='w-10' src='/img/Squres.svg' alt='' />
                        <span className='font-medium text-center'>Get Windows 11</span>
                    </div>
                    <div className="item flex items-center mx-4 space-x-2  md:flex md:flex-col">
                        <img className='w-12' src='/img/tab.svg' alt='' />
                        <span className='font-medium text-center'>Explore Surface Devices</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Promo