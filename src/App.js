
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './pages/Navbar';
import Notfont from './pages/Notfont';

function App() {

  return (
    <div className={`App`}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/*' element={<Notfont />} />
        </Routes>
      </BrowserRouter>
    </div>
  ); 

}
export default App;