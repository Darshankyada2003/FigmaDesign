import React from 'react'
import orange_color from '../assets/orange_color.svg'
import circle_2 from '../assets/circle_2.svg'
import iphon_features from '../assets/iphon_features.svg'
import icon1 from '../assets/icon1.svg'
import icon2 from '../assets/icon2.svg'
import icon3 from '../assets/icon3.svg'


const Features = () => {
  return (
    <div className='' id='Features'>
      {/* Right section */}
      <div className='relative -top-10'>
        <div>
          <img src={orange_color} alt='' className='px-10 py-10 w-150' />
        </div>
        <div className='-mt-120 px-25'>
          <img src={circle_2} alt='' className='w-1/2 max-w-sm relative' />
          <img src={iphon_features} alt='' className='relative w-70 -mt-100 z-10 -right-25' />
        </div>
      </div>
      {/* Left section */}
      <div className='relative'>
        <div className="flex justify-end px-10 absolute -top-120 -right-5">
          <div className="max-w-lg">
            <h5 className="text-red-500 text-sm font-semibold tracking-wider">FEATURES</h5>
            <h2 className="text-3xl font-bold text-black mt-2">Uifry Premium</h2>

            <ul className="mt-4 space-y-4">
              <li>
                <h6 className="text-lg font-semibold flex items-start">
                  <img src={icon1} className='w-4 h-4 mr-2 mt-1' />
                  Budgeting Intervals
                </h6>
                <p className="text-gray-600">
                  Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu
                  Adipiscing Sociis Arcu Lorem Porttitor.
                </p>
              </li>
              <li>
                <h6 className="text-lg font-semibold flex items-start">
                  <img src={icon2} className='w-4 h-4 mr-2 mt-1' />
                  Budgeting Intervals</h6>
                <p className="text-gray-600">
                  Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu
                  Adipiscing Sociis Arcu Lorem Porttitor.
                </p>
              </li>
              <li>
                <h6 className="text-lg font-semibold flex items-center">
                  <img src={icon3} className='w-3 h-3 mr-2 mt-1' />
                  Budgeting Intervals</h6>
                <p className="text-gray-600">
                  Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu
                  Adipiscing Sociis Arcu Lorem Porttitor.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Features
