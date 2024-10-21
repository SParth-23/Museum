import { React } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Pottery from './components/Pottery';
import Coins from './components/Coins';
import DynastiesDisplay from './components/DynastiesDisplay';
import VisitUs from './components/VisitUs';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
function App() {

  return (
    <div className='w-full overflow-hidden'>
    <Navbar />
    <Home />
    <AboutUs />
    <Gallery />
    <DynastiesDisplay />
    <Pottery />
    <Coins />
    <VisitUs />
    <Footer />
    </div>
  )
}

export default App
