import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Navbar} from "./components/navbar/navbar"
import {Home} from "./components/pages/home"
import {About} from "./components/pages/about"
import {Contact} from "./components/pages/contact"

function App() {
  return (
    <>
  <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        
      <Route path='' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/about' element={ <About/>}> </Route>
      <Route path='/contact' element={ <Contact/>}> </Route>



      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
