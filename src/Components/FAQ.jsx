import React from 'react'
import red_color from '../assets/red_color.svg'
import circleleft from '../assets/circleleft.svg'
import circleright from '../assets/circleright.svg'
import iphone123 from '../assets/iphone123.svg'
import color123 from '../assets/color123.svg'

const FAQ = () => {
  return (
    <div className='relative p-8 ml-25 mr-25'>
      <div>
        <p className='text-red-400 text-sm font-semibold tracking-wider'>FAQ</p>
        <h3 className='font-bold text-4xl'>Frequently Asked
          <span className='block'>Question</span></h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

        <div className="bg-red-400 text-white p-4 rounded-xl shadow-sm px-5 py-5">
          <h2 className="text-xl font-bold mb-2">The Best Financial Accounting App Ever!</h2>
          <p className="text-sm">
            "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In
            Ultrices Malesuada Elit Mauris."
          </p>
        </div>
        <div className="bg-white text-black p-4">
          <h2 className="text-xl font-bold mb-2">The Best Financial Accounting App Ever!</h2>
          <p className="text-sm">
            "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In
            Ultrices Malesuada Elit Mauris."
          </p>
        </div>

        <div className="bg-white text-black p-4">
          <h2 className="text-xl font-bold mb-2">The Best Financial Accounting App Ever!</h2>
          <p className="text-sm">
            "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In
            Ultrices Malesuada Elit Mauris."
          </p>
        </div>

        <div className="bg-red-400 text-white p-4 rounded-xl shadow-md border">
          <h2 className="text-xl font-bold mb-2">The Best Financial Accounting App Ever!</h2>
          <p className="text-sm">
            "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In
            Ultrices Malesuada Elit Mauris."
          </p>
        </div>

        <div className="bg-red-400 text-white p-4 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-2">The Best Financial Accounting App Ever!</h2>
          <p className="text-sm">
            "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In
            Ultrices Malesuada Elit Mauris."
          </p>
        </div>

        <div className="bg-white text-black p-4">
          <h2 className="text-xl font-bold mb-2">The Best Financial Accounting App Ever!</h2>
          <p className="text-sm">
            "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In
            Ultrices Malesuada Elit Mauris."
          </p>
        </div>
      </div>
      <div>
        <img src={red_color} alt='' className='w-80 -ml-40' />
      </div>
      <div className='bg-black px-10 py-50 rounded-sm -mt-37 relative z-10'>
        <div className='relative'>
          <img src={circleleft} alt='' className='absolute w-80 -top-15 -left-10' />
          <img src={circleright} alt='' className='absolute w-60 -top-50 left-180' />
          <img src={iphone123} alt='' className='absolute -top-40 left-150 w-90 z-10' />
          <div className='relative'>
            <img src={color123} alt='' className='absolute left-190 -top-20 w-50' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
