import React from 'react'
import red_color from '../assets/red_color.svg'
import faq_img from '../assets/FAQ_IMG.svg'

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
        <img src={faq_img} alt='' className='w-300 -mt-40' />
      </div>
    </div>
  )
}

export default FAQ
