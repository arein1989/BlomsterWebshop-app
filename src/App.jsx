import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import Forside from './pages/Forside'
import Produkter from './pages/Produkter'
import Kurv from './pages/Kurv'
import TjekUd from './pages/TjekUd'
import Tak from './pages/Tak'
import OmwebShop from './pages/OmwebShop';

function App() {
  

  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<Forside />} />
            <Route path="/omwebshop" element={<OmwebShop />} />
            <Route path="/produkter" element={<Produkter/>} />
            <Route path="/kurv" element={<Kurv />} />
            <Route path="/tjekud" element={<TjekUd />} />
            <Route path="/tak" element={<Tak />} />
          </Routes>
        </Router>
    </>
  )
}

export default App

