import React from 'react';
import bus from '../../assest/bus.jpg'
import taxi from '../../assest/taxi.jpg'


const BusFeatures = () => {
  return (

    <>
      <div class='max-w-[1000px] mx-auto bg-red-300  gap-5'>
        <h1 class='text-white px-10 py-5 text-center'>Welcome Frineds to our cab booking website. </h1>
      </div>

      <div className='max-w-[1000px] gap-10 mx-auto md:py[80] py-5 flex sm:flex-row flex-col'>
        <div className='basis-[40%]'>
          <img className='w-full' src={bus} />
        </div>

        <div className='basis-[60%]'>
          <h1 className='text-blue-300 text-3xl'>Your pick of rides at low prices From Annie Cabs.</h1>
          <p className='py-3'>If you want to use the datepicker component plugin from Flowbite you have to include the datepicker.js file either from NPM or CDN into your project.</p>
          <p className='py-3'>If you want to use the datepicker component plugin from Flowbite you have to include the datepicker.js file either from NPM or CDN into your project.</p>
          <p className='py-3'>If you want to use the datepicker component plugin from Flowbite you have to include the datepicker.js file either from NPM or CDN into your project.</p>
        </div>
      </div>

      <hr />

      <div className='max-w-[1000px] gap-10 mx-auto md:py[80] py-5 flex sm:flex-row flex-col'>
        <div className='basis-[60%]'>
          <h1 className='text-blue-300 text-3xl'>Your pick of rides at low prices From Annie Cabs.</h1>
          <p className='py-3'>If you want to use the datepicker component plugin from Flowbite you have to include the datepicker.js file either from NPM or CDN into your project.</p>
          <p className='py-3'>If you want to use the datepicker component plugin from Flowbite you have to include the datepicker.js file either from NPM or CDN into your project.</p>
          <p className='py-3'>If you want to use the datepicker component plugin from Flowbite you have to include the datepicker.js file either from NPM or CDN into your project.</p>
        </div>

        <div className='basis-[40%]'>
          <img className='w-full' src={taxi} />
        </div>
      </div>

    </>


  )
}

export default BusFeatures