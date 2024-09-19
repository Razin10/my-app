import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React from'react';
import './App.css';
import Navber from './Navber';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import Blog from './pages/blog';
import About from './pages/about';
import Contacts from './pages/contacts';
import _gsap from 'gsap/gsap-core';

function App() {
  useGSAP(()=>{
    gsap.to(".sadiv",{
      top:"-150%",
      delay:0.05,
      duration:1,
      ease:"circ.in",
  })
    gsap.to(".animation",{
      top:"-150%",
      delay:2,
      duration:0.6,
      ease:"expoScale(0.5,7, power1.in)"
  })
  })
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/Blog',
      element: <Blog/>
    },
    {
      path: '/contacts',
      element: <Contacts/>
    },
    {
      path: '/About',
      element: <About/>
    },
  ])
  return (
    <div className="App">
         <div className="animation">
        <div className="sadiv"></div>
       <h1>RAZIN BLOG</h1>
    </div>
       <Navber/>
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
