import React from 'react'
import watch_video from '../assets/watch_video.svg'
import circle from '../assets/circle.svg'
import i_phone3 from '../assets/i_phone_3.svg'
import i_phone2 from '../assets/i_phone_2.svg'
import i_phone1 from '../assets/i_phone_1.svg'
import z_image from '../assets/z_image.svg'
import redcolor from '../assets/redcolor.svg'
import star from '../assets/star.svg'
import star2 from '../assets/star2.svg'
import color from '../assets/red_color.svg'

const Home = () => {
    return (
        <div className='flex items-center justify-between w-full h-screen p-8 ml-20' id='Home'>
            {/* Right Section */}
            <div>
                <img src={star} alt='' className='w-7 absolute top-25 left-6' />
                <img src={color} alt='' className='w-60 absolute top-15 left-40' />

                <div className='absolute top-30'>
                    <p className="text-black font-extrabold text-4xl">
                        Make The Best<br />
                        Financial Decisions
                    </p>
                    <p className="text-gray-600 text-sm mt-5">
                        Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet <br />Faucibus
                        Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
                    </p>
                </div>
                <div className=''>
                    <div className="absolute top-70 flex items-center gap-6">
                        <button className="bg-black text-white px-6 py-2 rounded-sm cursor-pointer 
                    hover:bg-transparent hover:text-black transition border border-black">
                            Get Started →
                        </button>
                        <div className="flex items-center gap-2 cursor-pointer">
                            <img src={watch_video} alt="Watch Video" className="w-7 h-7 object-contain" />
                            <p className="text-sm font-semibold">Watch Video</p>
                        </div>
                    </div>
                </div>
                <div className='absolute top-70 left-10'>
                    <img src={z_image} alt='' className='w-120 px-10 py-10' />
                    <img src={star} alt='' className='w-7 absolute top-23 left-44' />
                </div >
            </div>

            {/* Left section */}
            <div className='flex justify-end relative w-1/2 -bottom-10 mr-25'>
                <img src={i_phone1} alt="" className="w-110 h-110  relative -right-225 -top-2 z-30
                transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" />
                <img src={i_phone2} alt="" className=" w-110 h-110 relative -right-160 -bottom-8 z-20
                transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" />
                <img src={i_phone3} alt="" className="w-110 h-110 relative -right-95 -bottom-18 z-10
                transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" />
                <img src={circle} alt="" className="w-100 h-100 relative" />
                <img src={star2} alt="" className="w-10 absolute -top-5 -right-5" />
            </div>
            <div className='absolute top-95 right-40'>
                <img src={redcolor} alt="" className="w-60" />
                <img src={star2} alt="" className="w-7 absolute top-20 left-5" />
            </div>
        </div>
    )
}

export default Home
