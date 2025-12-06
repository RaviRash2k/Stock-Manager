import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { StoreContext } from './context/StoreContext'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import LoginPage from './pages/LoginPage'
import AddProduct from './pages/AddProduct'
import Profile from './pages/Profile'
import ReportBug from './pages/ReportBug'
import ProductPopup from './components/ProductPopup'

const App = () => {

  const { productPopup, token } = useContext(StoreContext)

  return (
    <>
      {!token ? 
      
      <LoginPage/> 
      :
      <>
        {productPopup !== "no" && <ProductPopup/>}

        <div className='flex'>
          <Sidebar/>

          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/addProduct' element={<AddProduct/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/reporteBug' element={<ReportBug/>}/>
          </Routes>
          
        </div>
      </>
      }
      

    </>
  )
}

export default App
