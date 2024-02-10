import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ObjectArraySample3 from './jsx/ObjectArraySample3'
import SupplierDetail from "./pages/SupplierDetail";


function App() {

  return <>
    <h1>Site Header</h1>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to='/suppliers'>Suppliers</Link></li>
    </ul>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/suppliers" element={<ObjectArraySample3/>} />
      <Route path="/suppliers/:id" element={<SupplierDetail/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    <p>Site Footer</p>
  </>


}

export default App;



