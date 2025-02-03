import React from 'react'
import circle_3 from '../assets/circle_3.svg'
import red_color from '../assets/red_color.svg'

const UserTestimonails = () => {
    return (
        <div>
            <div className='flex flex-col text-center justify-center'>
                <h5 className=''>TESTIMONIAL</h5>
                <p className='font-bold text-4xl'>What Our Users
                    <span className='block'>Say About Us?</span></p>
            </div>
            {/* left section */}
            <div className='relative'>
                <img src={circle_3} alt='' className='w-100 ml-20 relative z-10' />
                <img src={red_color} alt='' className='w-100 absolute top-0 left-0' />
            </div>
        </div>
    )
}

export default UserTestimonails
