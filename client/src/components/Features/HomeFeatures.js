import React from 'react'
import img from '../../assest/2104039.jpg'
import img1 from '../../assest/pexels-frans-van-heerden-830829 (1).jpg'
import img2 from '../../assest/pexels-jess-loiterton-4327782.jpg'
import logo from '../../assest/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Venderpostdata from './vender/Venderpostdata'
import Path from './Path'
import vendorImg from '../../assest/vendor_background.png'
import { useTheme } from '../../context/Theme'




const HomeFeatures = () => {

  const [theme,setTheme] = useTheme()

  return (
    <>
      <div className='max-w-[10000px] mx-auto'>
        <div className='w-full bg-cover lg:py-40 lg:px-40' style={{ backgroundImage: theme ? `url(${vendorImg})`: `url(${img})` }}>
          <p className='text-5xl my-5 text-center hover:text-white '>Annie Cabs</p>
          <p className='text-2xl my-5 text-center hover:text-white '>Reliable and Secure Way to Reach Any Point of the City</p>
          <p className='text-2xl my-5 text-center hover:text-white '>We provide affordable and fast way to find a taxi when and where you need it.</p>
        </div>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Annie CAB Path & Parts</h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Travel at low prices by Annie cabs bus form where you want to go in side the city and also we provide the service outdoor the city. </p>
          </div>

          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" ></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Bus</h2>
                <p className="leading-relaxed text-base">Parveen Travels. Parveen Travels headquartered in Chennai and one of the most trusted travel and tourism operator in the South India.</p>
              </div>
            </div>

            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>

              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Auto</h2>
                <p className="leading-relaxed text-base">The president of the Gujarat Auto Rickshaw Driver Action Committee has sent a letter to Gujarat Chief Minister Vijay Rupani.</p>
              </div>
            </div>

            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>

              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Bike</h2>
                <p className="leading-relaxed text-base">Most popular bikes are Yamaha MT-15, Yamaha YZF R15, TVS Apache RTR 160, and TVS Ronin. The top Indian brands are TVS,Bajaj,Hero&Honda Bikes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
{theme ? <Venderpostdata/> :
     <Path/>}
      

      <section className="text-gray-600 mt-20 body-font">
        <div className="container px-5  mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full hover:scale-125 duration-1000 " src={img1} />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Where can I buy bus tickets?</h2>
              <p className="leading-relaxed text-base">In addition to buying tickets online on BlaBlaCar’s website and application, you can also buy tickets at one of our ticket sales points. Find the ticket sales points in your city.</p>
              <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Find Your Route</button>
            </div>

            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full hover:scale-125 duration-1000" src={img2} />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">From city to city, our buses take you everywhere.</h2>
              <p className="leading-relaxed text-base">Want to travel from city to city for next to nothing? Welcome aboard BlaBlaCar bus, your new bus service. Easy and affordable, our buses are always travelling to your next destination.</p>
              <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Book Tickets</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container mx-auto text-center py-10 '>
          <h1 className='text-sky-300 font-bold text-2xl'>Annie CAB provide the service where are you want to go anywhere in india.</h1>
          <p className='text-xl font-bold'>Enjoy the trip with us.</p>
        </div>
      </section>

    </>
  )
}


export default HomeFeatures