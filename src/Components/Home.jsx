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
import { motion } from "framer-motion"

const Home = () => {
    return (
        <div className='flex items-center justify-between w-full h-screen p-8 ml-20' id='Home'>
            {/* Right Section */}
            <div className=''>
                <img src={star} alt='' className='w-7 absolute top-25 left-6 hidden sm:block' />
                <img src={color} alt='' className='w-60 absolute top-15 left-40 hidden sm:block' />

                <div className='absolute top-30 left-7 sm:left-27'>
                    <p className="text-black font-extrabold text-4xl">
                        Make The Best<br />
                        Financial Decisions
                    </p>
                    <p className="text-gray-600 text-sm mt-5">
                        Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet <br />Faucibus
                        Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
                    </p>
                </div>
                <div className="absolute top-80 flex items-center gap-6 left-7 sm:top-70 sm:left-27">
                    <button className="bg-black text-white px-9 py-2 rounded-sm cursor-pointer 
                    hover:bg-transparent hover:text-black transition border border-black">
                        Get Started
                        <svg
                            width="25"
                            height="8"
                            viewBox="0 0 25 8"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute top-4.5 left-32 w-5 transition-all fill-current"
                        >
                            <path d="M24.3536 4.35355C24.5488 4.15829 24.5488 3.84171 24.3536 3.64645L21.1716 0.464466C20.9763 0.269204 20.6597 0.269204 20.4645 0.464466C20.2692 0.659728 20.2692 0.976311 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53553C20.6597 7.7308 20.9763 7.7308 21.1716 7.53553L24.3536 4.35355ZM0 4.5H24V3.5H0V4.5Z" />
                        </svg>
                    </button>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <img src={watch_video} alt="Watch Video" className="w-7 h-7 object-contain" />
                        <p className="text-sm font-semibold">Watch Video</p>
                    </div>
                </div>

                <img src={z_image} alt='' className='w-100 absolute top-80 left-20 hidden sm:block' />
                <img src={star} alt='' className='w-7 absolute top-95 left-44 hidden sm:block' />
            </div>

            {/* Left section */}
            <motion.div className='hidden sm:flex justify-end relative w-1/2 -bottom-10 mr-25'
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} >
                <img src={i_phone1} alt="" className="w-110 h-110  relative -right-225 -top-2 z-30" />
                <img src={i_phone2} alt="" className=" w-110 h-110 relative -right-160 -bottom-8 z-20" />
                <img src={i_phone3} alt="" className="w-110 h-110 relative -right-95 -bottom-18 z-10" />
                <img src={circle} alt="" className="w-100 h-100 relative" />
                <img src={redcolor} alt="" className="w-60 absolute top-70 left-60" />
            </motion.div>
            <img src={star2} alt="" className="w-10 absolute top-20 right-10" />
            <img src={star2} alt="" className="w-7 absolute top-110 right-90" />
        </div>
    )
}

export default Home
