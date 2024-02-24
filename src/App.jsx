import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ObjectArraySample3 from './jsx/ObjectArraySample3'
import SupplierDetail from "./pages/SupplierDetail";
import StateIntro from "./state/StateIntro";
import StateRandomColor from "./state/StateRandomColor";
import StateArraySample from "./state/StateArraySample";
import ProductsTable from "./state/ProductsTable";
import StateRandomNumbers from "./state/StateRandomNumbers";
import EffectSample from "./effectSample/EffectSample";
import Categories from "./axiosSample/Categories";
import ProductsPage from "./axiosSample/ProductsPage";
import CustomerPage from "./axiosSample/CustomerPage";
import AddProduct from "./axiosSample/AddProduct";
import AddProduct2 from "./axiosSample/AddProduct2";
import Intro from "./muiSample/Intro";
import GridSample from "./components/GridSample";
import ProductsDataGrid from "./muiSample/ProductsDataGrid";
import SuppliersTable from "./axiosSample/SuppliersTable";
import Todos from "./react-query-sample/Todos";
import CategoryPage from "./react-query-sample/CategoryPage";
import AddCategoryPage from "./react-query-sample/AddCategoryPage";
import Orders from "./axiosSample/Orders";
import ProductPage from "./pages/ProductPage";


function App() {


  return <>
    <h1>Site Header</h1>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to='/suppliers'>Suppliers</Link></li>
      <li><Link to='/stateintro'>State Intro</Link></li>
      <li><Link to='/categories'>Categories</Link></li>
      <li><Link to='/addcategory'>Add Category</Link></li>
      <li><Link to='/products'>Products</Link></li>
      
    </ul>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/suppliers" element={<ObjectArraySample3/>} />
      <Route path="/suppliers/:id" element={<SupplierDetail/>} />
      <Route path="/stateintro" element={<StateIntro/>} />
      <Route path="/categories" element={<CategoryPage/>} />
      <Route path="/addcategory" element={<AddCategoryPage/>} />
      <Route path="/products" element={<ProductPage/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    <p>Site Footer</p>
  </>


}

export default App;

//props, state



