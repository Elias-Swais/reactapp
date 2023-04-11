import Header from './components/Header'
import MainContent from './components/MainContent';
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom';
import {Home} from './pages/Home';
import {Shop} from './pages/Shop'
import {Contactus} from './pages/Contactus';
import {About} from './pages/About';
function App(){
  return(
    <div>
      <Routes>
        <Route path ="/" element={<Home />}/>
        <Route path ="/Shop" element={<Shop />}/>
        <Route path ="/Contactus" element={<Contactus />}/>
        <Route path ="/About" element={<About />}/>
        <Route />
      </Routes> 
    </div>
  )
}

export default App