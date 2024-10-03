
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './pages/Navbar';
import Notfont from './pages/Notfont';
import { useState } from 'react';
import { ProvideContext } from './pages/Context';


function App() {

  const [name , setName  ] = useState("HRweb")
  return (
    <div className={`App`}>
      <ProvideContext.Provider value={{name,setName}}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home name={name} />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/*' element={<Notfont />} />
          </Routes>
        </BrowserRouter>
      </ProvideContext.Provider>
    </div>
  ); 

}
export default App;