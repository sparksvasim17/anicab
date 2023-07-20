import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assest/logo.png'
import navBackground from '../../assest/nav-background.jpg'
import navBackground2 from '../../assest/vendor_background.png'
import Switch from '@mui/material/Switch';
import { Stack, Typography } from '@mui/material';
import { useTheme } from '../../context/Theme';


function Nav() {
  const [theme, setTheme] = useTheme(false);

  const onHandle =async (e)=>{
   await localStorage.clear();
  }
  
  return (
    <>
 
<header className="text-gray-600 body-font sticky " style={{background: `url(${navBackground})`,width:'100%',height:'8rem '}}>
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img className='w-20 h-20 rounded-full' src={logo}/>
      <span className="ml-3 text-2xl font-bold">AnnieCabs</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link to={"/"} className="mr-5 hover:text-gray-900">Home</Link>
      <Link to={"/about"} className="mr-5 hover:text-gray-900">About</Link>
      <Link to={"/contact"} className="mr-5 hover:text-gray-900">Contact</Link>
      <Link to={"/bus"} className="mr-5 hover:text-gray-900">Bus</Link>
      
      <Stack sx={{ml:{lg:'8rem'}}} justifyContent={'center'} alignItems={'center'}>
              <Typography variant='h5'>{theme ? 'Vendor' : 'Find Cabs'}</Typography>
              <Switch 
               checked={theme}
               onChange={(e)=>setTheme(e.target.checked)}
              size='large'  
               inputProps={{ 'aria-label': 'controlled' }}
    />
            </Stack>      
     

          </nav>

    <button className="inline-flex items-center mx-2 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      <Link to={"/signin"}>Signin</Link>
    </button>
    <button className="inline-flex items-center mx-2 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      <Link to={"/signup"}>Signup</Link>
    </button>
    <button onClick={onHandle} className="inline-flex items-center mx-2 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      <Link>Logout</Link>
    </button>
  </div>
</header> 

    </>
  )
}

export default Nav