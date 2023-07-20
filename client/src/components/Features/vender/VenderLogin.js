import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../../../assest/logo.png";
import { useVenderloginMutation } from '../../../store/services/vender';

const VenderLogin = () => {

  const [email , setEmail] = useState('');
  const [password , setPassword ] = useState('')
  const [responseInfo , response] = useVenderloginMutation();

  const handleLogin =async (e)=>{
    e.preventDefault();
    console.log(email , password);
    const ab = JSON.stringify({email,password})
    if(email && password){
      await responseInfo(ab)
    }else{
     alert("Fill the Form")
    }
  }

  useEffect(()=>{
    if(response.isSuccess == true){
      console.log('response' , response)
    }
  },[response.isSuccess])

  return (
    <div className="p-3 md:p-4">
    <div className="w-full max-w-sm bg-white m-auto flexflex-col p-4">
      <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative">
        <img src={logo} className="w-full h-full " />
      </div>

      <form className="w-full py-3 flex flex-col">

        <label htmlFor="email">Vender Email ID</label>
        <input
          type={"text"}
          id="email"
          name="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
        />

        <label htmlFor="email">Password</label>
        <input
          type={"text"}
          id="email"
          name="email"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
        />
        <button
          type="submit"
          onClick={handleLogin}
          className="w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4"
        >
          Sign IN
        </button>
      </form>
      <p className="text-left text-sm mt-2">
        Don't Have An Account??
        <Link to={"/vendersignup"} className="text-red-500 underline">
          SignUP
        </Link>
      </p>
    </div>
  </div>
  )
}

export default VenderLogin