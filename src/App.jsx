import { Outlet } from "react-router-dom"
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar"


function App() {


  return (

<div className="h-screen">
<Navbar/>
<Outlet/>
<Footer/>
</div>

  )
}

export default App
