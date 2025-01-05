import './App.css'
import Admin from './AdminPanel/Admin'
import Footer from './Components/Footer'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import Signup from './Components/Signup'
import Home from './Components/Home'
import Users from './AdminPanel/Users'
import { Routes,Route } from 'react-router-dom'
import Games from './AdminPanel/Games'
import Downloads from './AdminPanel/Downloads'
import Reviews from './AdminPanel/Reviews'
import Earnings from './AdminPanel/Earnings'
import Contact from './Components/Contact'
import Wishlist from './Components/Wishlist'
import Cart from './Components/Cart'
import Profile from './Components/Profile'
import Genre from './Components/Genre'
import GameDetails from './Components/GameDetails'
import ForgotPassword from './Components/ForgotPassword'
import ResetPassword from './Components/ResetPassword'
import OrderPage from './Components/OrderPage'
import Allorders from './Components/Allorders'


function App() {
  return (
    <>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/admin" element={<Admin/>} />
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/admin/users' element={<Users/>}/>
      <Route path='/admin/games' element={<Games/>}/>
      <Route path='/admin/downloads' element={<Downloads/>}/>
      <Route path='/admin/reviews' element={<Reviews/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/admin/earnings' element={<Earnings/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/puzzle' element={<Genre  genre={'Puzzle'} />}/>
      <Route path='/action' element={<Genre  genre={'Action'} />}/>
      <Route path='/racing' element={<Genre  genre={'Racing'} />}/>
      <Route path='/story' element={<Genre  genre={'story'}/>}/>
      <Route path='/details/:id' element={<GameDetails/>}/>
      <Route path='/forgotpassword' element={<ForgotPassword/>}/> 
      <Route path='/resetpassword/:token' element={<ResetPassword/>}/>
      <Route path='/order/:id' element={<OrderPage/>}/>
      <Route path='/all-orders' element={<Allorders/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
