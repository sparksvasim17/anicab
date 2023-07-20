import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assest/logo.png";
import { usePostFormMutation } from "../../store/services/api";

const SignupFeatures = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [responseInfo , response ] = usePostFormMutation();
  const [ iq , setIq ] = useState(true);
  const navigate = useNavigate();

  const onHandleClick = async(e)=>{
    e.preventDefault();
    console.log(firstName,lastName,email,password,confirmpassword);
    const ab = JSON.stringify({firstName,lastName,email,password,confirmpassword})

    if(firstName && lastName && email && password && confirmpassword ){
      await responseInfo(ab)
    }else{
       alert('Fill the form.')
    }
  }

  useEffect(() => {
    if (response.isSuccess === true) {
      navigate('/signin')
      console.log(response, 'data')
    }
},[response.isSuccess])

  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flexflex-col p-4">
        <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative">
          <img src={logo} className="w-full h-full " />
        </div>

        <form className="w-full py-3 flex flex-col">
          <label htmlFor="firstName">First Name</label>
          <input
            type={"text"}
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type={"text"}
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
          />

          <label htmlFor="email">Email ID</label>
          <input
            type={"text"}
            id="email"
            name="email"
            value={email || ''}
            onChange={(e) => setemail(e.target.value)}
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
          />

          <label htmlFor="email">Password</label>
          <input
            type={"text"}
            id="email"
            name="email"
            value={password || ''}
            onChange={(e) => setpassword(e.target.value)}
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
          />

          <label htmlFor="email">Confrim Password</label>
          <input
            type={"text"}
            id="email"
            name="email"
            value={confirmpassword || ''}
            onChange={(e) => setconfirmpassword(e.target.value)}
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
          />

          <button
            type="submit"
            onClick={onHandleClick}
            className="w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4"
          >
            Sign Up
          </button>
        </form>
        <p className="text-left text-sm mt-2">
          Already Have An Account??
          <Link to={"/signin"} className="text-red-500 underline">
            LogIN
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupFeatures;
