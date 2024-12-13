import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import App from './App.jsx'
import About from './Components/About/About.jsx'
import Shop from './Components/Shpo/Shop.jsx'
import Contact from './Components/Contact/Contact.jsx'


const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path="About" element={<About/>}/>
      <Route path="Shop" element={<Shop/>}/>
      <Route path="Contact" element={<Contact/>}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={Router}/>
  </StrictMode>,
)
