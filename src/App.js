import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './pages/Navbar';
import Notfont from './pages/Notfont';
import { QueryClient, QueryClientProvider } from 'react-query';


function App() {

  const client = new QueryClient()

  return (
    <div className={`App`}>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/*' element={<Notfont />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  ); 

}
export default App;