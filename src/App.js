import "./style.css"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Blog from "./pages/Blog"; 
import Navigation from "./pages/Navigation";
import Error from "./pages/Error";

import {Routes, Route}  from "react-router-dom";

import Product from "./pages2/Products"; 
import Apple from "./pages2/Apple";
import Samsung from "./pages2/Samsung";
import Jio from "./pages2/Jio";



const App = () => {


  return(
    <div>
      {/* <Navigation /> */}
          {/* <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blog1" element={<Blog />} />
                  <Route path="/blog2" element={<Blog />} />
                  <Route path="*" element={<Error />} />
          </Routes> */}
             
         



            <Routes>
                  <Route path="/product" element={<Product />} > 
                      <Route index element={<Apple />} />
                      <Route path="samsung" element={<Samsung />} />
                      <Route path="jio" element={<Jio />} />
                  </Route>


            </Routes>


    </div>
  )
}

export default App;


