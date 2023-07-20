import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import logo from "../../../assest/logo.png";
import { useVendersignupMutation } from '../../../store/services/vender';

const VenderSignup = () => {
  const [name, setName ] = useState("")
  const [email, setEmail ] = useState("")
  const [password, setPassword ] = useState("")
  const [confrimpassword, setConfrimpassword ] = useState("")
  const [responseInfo , response] = useVendersignupMutation("");

  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(name,email,password,confrimpassword);
    const data = JSON.stringify({name,email,password,confrimpassword});

    if(name && email && password && confrimpassword){
      await responseInfo(data)
    }else{
      alert('Fill the form.')
    }
  }

useEffect(()=>{
  if(response.isSuccess == true){
    console.log(response , 'response');
    console.warn('Signup Successfully.')
  }
},[response.isSuccess])

  return (
<div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flexflex-col p-4">
        <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative">
          <img src={logo} className="w-full h-full " />
        </div>

        <form className="w-full py-3 flex flex-col">
          <label htmlFor="firstName">Vender Name</label>
          <input
            type={"text"}
            id="name"
            name="nName"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
          />

          <label htmlFor="email">Email ID</label>
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

          <label htmlFor="email">Confrim Password</label>
          <input
            type={"text"}
            id="email"
            name="email"
            value={confrimpassword}
            onChange={(e)=>setConfrimpassword(e.target.value)}
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
          />

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4"
          >
            Sign Up
          </button>
        </form>
        <p className="text-left text-sm mt-2">
          Already Have An Account??
          <Link to={"/venderlogin"} className="text-red-500 underline">
            LogIN
          </Link>
        </p>
      </div>
    </div>
  )
}

export default VenderSignup
