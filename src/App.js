import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import{BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Getproducts from './components/Getproducts'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Addproducts from './components/Addproducts'
import Mpesapayment from './components/Mpesapayment'
import Navbar from './components/Navbar'




function App() {
  return (

    <BrowserRouter>

    {/* Navigation bar */}
    <Navbar />

    

      <h1 className="text-dark text-center">Welcome to Soko garden</h1>
      {/* navigation goes here */}

      <nav className= 'm-2 d-flex justify-content-center'>
        <Link to={"/"} className="btn btn-primary btn-sm mx-2">Getproducts</Link>
        <Link to={"/addproducts"} className="btn btn-primary btn-sm mx-2">Addproducts</Link>
        <Link to={"/signup"} className="btn btn-primary btn-sm mx-2">Signup</Link>
        <Link to={"/signin"} className="btn btn-primary btn-sm mx-2">Signin</Link>
      </nav>


      <Routes>
        <Route path = '/' element={<Getproducts />} />
        <Route path = '/addproducts' element={<Addproducts />} />
        <Route path = '/signup' element={<Signup />} />
        <Route path = '/signin' element={<Signin />} />
        <Route path = '/makepayment' element={<Mpesapayment />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App;
