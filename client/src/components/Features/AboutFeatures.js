import React from 'react'
import img from '../../assest/pexels-scott-webb-1029639.jpg';
import taxis from '../../assest/taxis.jpg';
import man from '../../assest/Rectangle 55.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faPlaneDeparture, faMotorcycle, faCarSide } from '@fortawesome/free-solid-svg-icons'

function AboutFeatures() {
  return (
    <>


      <div className='max-w-[10000px] mx-auto'>
        <div className='w-full bg-cover lg:py-40 lg:px-40' style={{ backgroundImage: `url(${img})` }}>
          <p className='text-5xl  text-blue-300 p-20 text-center '>About</p>
        </div>
      </div>

      <div className='max-w-[1200px] gap-10 mx-auto md:py[80] py-20 flex sm:flex-row flex-col'>
        <div className='basis-[40%]'>
          <img className='w-full' src={taxis} />
        </div>
        <div className='basis-[60%]'>
          <h1 className='text-yellow-500 text-3xl'>Your pick of rides at low prices From Annie Cabs.</h1>
          <p className='py-3'>If you want to use the datepicker component plugin from Flowbite you have to include the datepicker.js file either from NPM or CDN into your project.</p>
          <p className='py-3'>If you want to use the datepicker component plugin from Flowbite you have to include the datepicker.js file either from NPM or CDN into your project.</p>
          <button className='bg-yellow-400 text-white p-3 text-xl mt-2 sm:ml-5 md:ml-5  '>Read More</button>
        </div>
      </div>

      <div className='max-w-[1200px] mx-auto my-4'>
        <h1 className='text-center text-5xl text-yellow-500 ' >Cab Services</h1>
        <p className='text-center my-10'>Justo quam morbi commodo tempus amet sapien: amet, tempus magna eu auctor non adipiscing urna pharetra.</p>
        <div className='max-w-[1200px] mx-auto py-[30px] grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-6'>
          <div className='group shadow-lg p-4 text-center hover:bg-yellow-500 hover:text-white duration-1000'>
            <FontAwesomeIcon className='p-5 text-2xl text-yellow-500 group-hover:text-white duration-1000 animate-bounce' icon={faCar} />
            <h3 className='text-xl py-2'>Taxi</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do.</p>
          </div>
          <div className='group shadow-lg p-4 text-center hover:bg-yellow-500 hover:text-white duration-1000'>
            <FontAwesomeIcon className='p-5 text-2xl text-yellow-500 group-hover:text-white duration-1000 animate-bounce' icon={faCarSide} />
            <h3 className='text-xl py-2'>Car</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do.</p>
          </div>
          <div className='group shadow-lg p-4 text-center hover:bg-yellow-500 hover:text-white duration-1000'>
            <FontAwesomeIcon className='p-5 text-2xl text-yellow-500 group-hover:text-white duration-1000 animate-bounce' icon={faMotorcycle} />
            <h3 className='text-xl py-2'>Bike</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do.</p>
          </div>
          <div className='group shadow-lg p-4 text-center hover:bg-yellow-500 hover:text-white duration-1000'>
            <FontAwesomeIcon className='p-5 text-2xl text-yellow-500 group-hover:text-white duration-1000 animate-bounce' icon={faPlaneDeparture} />
            <h3 className='text-xl py-2'>Aeroplane</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do.</p>
          </div>
        </div>
      </div>

      <div className='max-w-[1200px] mx-auto'>
       <h1 className='text-3xl text-center font-bold text-yellow-500'>Testinomial</h1>
       <div className='grid lg:grid-cols-3 overflow-hidden  md:grid-cols-2 mt-12 sm:grid-cols-2 gap-10 my-10 '>
    
        <div className='p-3 bg-slate-200 hover:bg-slate-300  flex sm:flex-row flex-col gap-5'>
          <div>
          <img src={man} className='rounded-full h-20 w-20 basis-[30%] '/>
          </div>
          <div className='basis-[70%]'>
          <p>Patrick Mills</p>
          <p>Regular Client</p>
          <p>Sem malesuada eros lectus, tempus eros tellus porta auctor amet leo ipsum sed diam amet donec enim, magna eu sed in nec, risus. Cursus nibh nec ultricies nulla.</p>
          </div>
        </div>

        <div className='p-3  bg-slate-200 hover:bg-slate-300  flex sm:flex-row flex-col gap-5'>
          <div>
          <img src={man} className='rounded-full h-20 w-20 basis-[30%]'/>
          </div>
          <div className='basis-[70%]'>
          <p>Patrick Mills</p>
          <p>Regular Client</p>
          <p>Sem malesuada eros lectus, tempus eros tellus porta auctor amet leo ipsum sed diam amet donec enim, magna eu sed in nec, risus. Cursus nibh nec ultricies nulla.</p>
          </div>
        </div>

        <div className='p-3 bg-slate-200 hover:bg-slate-300  flex sm:flex-row flex-col gap-5'>
          <div>
          <img src={man} className='rounded-full h-20 w-20 basis-[30%]'/>
          </div>
          <div className='basis-[70%]'>
          <p>Patrick Mills</p>
          <p>Regular Client</p>
          <p>Sem malesuada eros lectus, tempus eros tellus porta auctor amet leo ipsum sed diam amet donec enim, magna eu sed in nec, risus. Cursus nibh nec ultricies nulla.</p>
          </div>
        </div>
        
       </div>
      </div>

    </>

  )
}
export default AboutFeatures