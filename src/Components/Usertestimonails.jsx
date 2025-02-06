import React from 'react'
import circle_3 from '../assets/circle_3.svg'
import red_color from '../assets/red_color.svg'
import nick_jonas from '../assets/nick_jonas.svg'
import star from '../assets/star.svg'


const UserTestimonails = () => {
    return (
        <div className='-mt-10'>
            <div className='flex flex-col text-center justify-center'>
                <h5 className=''>TESTIMONIAL</h5>
                <p className='font-bold text-4xl'>What Our Users
                    <span className='block'>Say About Us?</span></p>
            </div>
            {/* left section */}
            <div className='relative'>
                <img src={circle_3} alt='' className='w-100 ml-30 relative z-10 
                transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110' />
                <img src={red_color} alt='' className='w-100 absolute ml-20 top-0 left-0' />
                <img src={star} alt='' className='absolute left-0 w-7 top-90' />
            </div>

            {/* Right section */}
            <div className='relative'>
                <div className="flex justify-end px-10 absolute -top-80 -right-5">
                    <div className="max-w-lg">
                        <ul className="mt-4 space-y-4">
                            <li>
                                <h6 className="text-2xl font-bold flex items-start mb-4">
                                    The Best Financial Accounting App Ever!
                                </h6>
                                <p className="text-gray-600">
                                    "Arou At Dictum Sapien, Mollis. Vulputate Sit id Accumsan, Ultricies.
                                    In Ultrices Malesuada Elit Mauris Etiam Odio. Dute Tristique Lacus,
                                    Et Blandit Viverro Nial Vollt. Sed Mattis Rhoncus, Diam Suspendisse
                                    Sit Nung, Gravicia Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien,
                                    Suspendisse Aliquam."
                                </p>
                                <img src={nick_jonas} alt='' className='mt-4 max-w-sm' />
                                <p className='font-bold mt-4'>Nick Jonas</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserTestimonails
