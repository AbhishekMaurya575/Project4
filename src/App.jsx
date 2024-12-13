import { Outlet } from "react-router-dom"
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar"


function App() {

  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  
  console.log('API URL:', apiUrl);
  console.log('API Key:', apiKey);
  
  return (

<div className="h-screen">
<Navbar/>
<Outlet/>
<Footer/>
</div>

  )
}

export default App
