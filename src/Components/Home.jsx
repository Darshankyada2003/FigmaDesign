import React from 'react'
import watch_video from '../assets/watch_video.svg'
import circle from '../assets/circle.svg'
import i_phone3 from '../assets/i_phone_3.svg'
import i_phone2 from '../assets/i_phone_2.svg'
import i_phone1 from '../assets/i_phone_1.svg'
import z_image from '../assets/z_image.svg'

const Home = () => {
    return (
        <div className='container min-h-screen mx-auto md:px-20 lg:px-0 w-full' id='Home'>
            {/* Right Section */}
            <div>
                <p className='text-black font-extrabold py-10 px-10 text-4xl ml-10 mt-20'>
                    Make The Best<br />
                    Financial Decisions
                </p>
                <p className='px-20 -top-5 relative text-black text-sm'>
                    Cum Et Convallis Risus Placerat Aliquam,
                    Nunc. Scelerisque Aliquet
                    <br />Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
                </p>
                <button className='bg-black text-white px-6 py-2 rounded-sm ml-20'>Get Started →</button>
                <img src={watch_video} alt='' className='max-w-5 ml-63 -top-7 relative' />
                <p className='text-sm font-semibold px-70 relative -top-12'>Watch Video</p>
            </div>

            {/* Left section */}
            <div className='relative flex container min-h-screen mx-auto justify-end'>
                <img src={i_phone1} alt="" className="w-80 z-10 relative -top-100" />
                <img src={i_phone2} alt="" className="w-full max-w-[200px] absolute left-[150px] bottom-[60px] z-20" />
                <img src={i_phone3} alt="" className="w-full max-w-[200px] absolute left-[87px] bottom-[50px] z-30" />
                <img src={circle} alt="" className="w-full max-w-[200px] absolute bottom-[70px] right-[10px]" />
            </div>
            <img src={z_image} alt='' className='max-w-sm px-10 py-10' />
        </div >
    )
}

export default Home
