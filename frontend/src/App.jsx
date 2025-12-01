import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import LoginPage from './pages/LoginPage'
import AddProduct from './pages/AddProduct'
import Profile from './pages/Profile'
import ReportBug from './pages/ReportBug'

const App = () => {
  return (
    <div className='flex'>
      <Sidebar/>

      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/addProduct' element={<AddProduct/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/reporteBug' element={<ReportBug/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </div>
  )
}

export default App
