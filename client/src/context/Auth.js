import React from 'react'
import { createContext,useContext } from 'react'

const ApiContext = createContext()
const Auth = () => {
  return (
    <>

    </>
  )
}

export default Auth

const ApiProvider = ({ chidren }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch API here and set the data
    fetch('http://localhost:6000/user/signup')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <ApiContext.Provider value={data}>
      {children}
    </ApiContext.Provider>
  );

};

export { ApiContext, ApiProvider };