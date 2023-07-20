import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Bus from './components/pages/Bus';
import Signin from './components/pages/Signin';
import Signup from './components/pages/Signup';
import Sidebar from './components/Layout/vender/Sidebar';
import VenderSignup from './components/Features/vender/VenderSignup';
import VenderLogin from './components/Features/vender/VenderLogin';

function App() {
  return (
    <>
   <Routes>
    <Route path='/' element= {<Home/>}></Route>
    <Route path='/about' element= {<About/>}></Route>
    <Route path='/contact' element= {<Contact/>}></Route>
    <Route path='/bus' element= {<Bus/>}></Route>
    <Route path='/signin' element= {<Signin/>}></Route>
    <Route path='/signup' element= {<Signup/>}></Route>
    <Route path='/dashboard' element={<Sidebar />}></Route> 

    <Route path='/vendersignup' element={<VenderSignup/>}/>
    <Route path='/venderlogin' element={<VenderLogin/>}/>
   </Routes>
   </>
  );
}

export default App;