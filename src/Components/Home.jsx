import React from 'react'
import watch_video from '../assets/watch_video.svg'
import circle from '../assets/circle.svg'
import i_phone3 from '../assets/i_phone_3.svg'
import i_phone2 from '../assets/i_phone_2.svg'
import i_phone1 from '../assets/i_phone_1.svg'
import z_image from '../assets/z_image.svg'
import redcolor from '../assets/redcolor.svg'

const Home = () => {
    return (
        <div className='flex items-center justify-between w-full h-screen p-8 ml-20' id='Home'>
            {/* Right Section */}
            <div>
                <p className="text-black font-extrabold text-4xl -bottom-30 relative">
                    Make The Best<br />
                    Financial Decisions
                </p>
                <p className="text-black text-sm -bottom-35 relative">
                    Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus
                    Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
                </p>
                <div className="flex items-center gap-4 -bottom-40 relative ">
                    <button className="bg-black text-white px-6 py-2 rounded-sm">
                        Get Started →
                    </button>
                    <div className="flex items-center gap-2 ">
                        <img src={watch_video} alt="Watch Video" className="w-7 h-7" />
                        <p className="text-sm font-semibold">Watch Video</p>
                    </div>
                </div>

                <div className='flex justify-start relative -bottom-27 -left-18'>
                    <img src={z_image} alt='' className='w-120 px-10 py-10' />
                </div >
            </div>

            {/* Left section */}
            <div className='flex justify-end relative w-1/2 -bottom-10 mr-25'>
                <img src={i_phone1} alt="" className="w-110 h-110  relative -right-225 -top-2 z-30" />
                <img src={i_phone2} alt="" className=" w-110 h-110 relative -right-160 -bottom-8 z-20" />
                <img src={i_phone3} alt="" className="w-110 h-110 relative -right-95 -bottom-18 z-10" />
                <img src={circle} alt="" className="w-100 h-100 relative" />
            </div>
            <div className='absolute top-95 right-40'>
                <img src={redcolor} alt="" className="w-60 " />
            </div>
        </div>
    )
}

export default Home
