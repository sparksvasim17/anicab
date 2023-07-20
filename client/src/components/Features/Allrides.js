import React from 'react'
import { useAllridesQuery } from '../../store/services/api'
import backimg from '../../assest/nav-background.jpg';
import Nav from '../Layout/Nav';

const Allrides = () => {

  const { data , isSuccess , isError} = useAllridesQuery()

  // console.log(data);

  return (
    <>
    <Nav/>
      <section className="text-gray-600 body-font" >
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Rides</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Micro and Mini can seat upto 4 passengers and can accommodate up to 2-3 small size bags. Prime SUV can seat upto 6 passengers and can accommodate up to 3-4 medium size bags or 2 large bags.</p>
          </div>
          <div className="flex flex-wrap -m-2">
          {isSuccess === true ? data.rides?.map ((element , i)=>{return(
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center bg-slate-300 border-gray-200 border p-4 rounded-lg" >
                
                <div className="flex-grow p-3 bg-slate-200 bg-cover bg-center bg-no-repeat" style={{background:`url(${backimg})`}}>
                  <p className="text-black">From :  {element.from} </p>
                  <p className="text-black">To : {element.to}</p>
                  <p className="text-black">Date : {element.date}</p>
                  <p className="text-black">Time :{element.time} </p>
                </div>
            
              </div>
            </div>
            )}) : null } 

        
          </div>
        </div>
      </section>
    </>
  )
}

export default Allrides