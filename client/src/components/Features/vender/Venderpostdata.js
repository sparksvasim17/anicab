import React, { useEffect, useState } from 'react'
import img from '../../../assest/2104039.jpg'
import { usePostdataMutation } from '../../../store/services/vender';

const Venderpostdata = () => {

  const[from , setFrom]= useState('');
  const[to , setTo]= useState('');
  const[date , setDate]= useState('');
  const[time , setTime]= useState('');
  const[responseInfo , response] = usePostdataMutation()

  const tripHandle = async(e)=>{
    e.preventDefault();
    console.log(from,to,time,date);
    const ab = JSON.stringify({from,to,date,time})

    if(from && to && date && time){
      await responseInfo(ab)
    }else{
      console.warn("fill the from")
    }
  }

  useEffect (()=>{
    if(response.isSuccess == true){
      console.log('Trips are veried please wait a min.' , response)
    }
  },[response.isSuccess])


  return (
    <div className='max-w-[1000px]  m-0 bg-no-repeat grid grid-cols-2 lg:ml-[130px] lg:py-40 lg:px-10' style={{ backgroundImage: `url(${img})` }}>
    <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">

            <div className="flex lg:w-2/3 w-full sm:flex-row flex-col  mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
              <div className="relative flex-grow w-full pt-2">
                <label for="full-name" className="leading-7 text-sm text-gray-600">From</label>
                <input value={from} onChange={(e)=>setFrom(e.target.value)} type="text" id="full-name" name="full-name" className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>

              <div className="relative flex-grow w-full">
                <label for="email" className="leading-7 text-sm text-gray-600">To</label>
                <input value={to} onChange={(e)=>setTo(e.target.value)} type="email" id="email" name="email" className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>

            </div>
            <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
              <div className="relative flex-grow w-full">
                <label for="full-name" className="leading-7 text-sm text-gray-600">Date</label>
                <input value={date} onChange={(e)=>setDate(e.target.value)} type="text" id="full-name" name="full-name" className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>

              <div className="relative flex-grow w-full">
                <label for="email" className="leading-7 text-sm text-gray-600">Time</label>
                <input value={time} onChange={(e)=>setTime(e.target.value)} type="email" id="email" name="email" className="w-full bg  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className='max-w-[500px] mt-5 text-center'>
              <button onClick={tripHandle} className='bg-red-500 w-40 p-2 hover:text-black hover:bg-orange-300 text-white rounded'>Post Trip</button>
            </div>
          </div>
          
        </section>
        </div>
  )
}

export default Venderpostdata