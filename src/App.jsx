import { useState, useEffect } from 'react'
import './App.css'
import Toper from './Toper'
import Nav from './Nav'
import {Routes, Route} from 'react-router-dom'
import Home from './home'
import Footer from './Footer'
import AboutUs from './aboutus'
import Contact from './Contact'
import Items from './Items'
import LoginOrSignUp from './MyAccount'
import MyCart from './MyCart'
import ScrollToTop from './Component/STT'
import DishesDetails from './Component/DishesDetails'
function App() {
  const [count, setCount] = useState(0)
  const [mealList, setMealList] = useState([]);
  useEffect(() => {
    const StoragedMealList = localStorage.getItem("Food List");
    setMealList(JSON.parse(StoragedMealList));
  }, []);
  return (
    <>
    <div className="container">
      <ScrollToTop />
      <div className="header">
        <div className="NAV">
            <Toper />
            <Nav />
        </div>
      </div>
      <div className="body">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/items' element={<Items />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login-signup' element={<LoginOrSignUp />} />
          <Route path='/cart' element={<MyCart />} />
          <Route path='/items/:details' element={<DishesDetails />}/>
        </Routes>
      </div>
      <div className="footer">
        <h1 className="OurBranch">OUR BRANCH</h1>
        <Footer />
      </div>
    </div>
    </>
  )
}

export default App
