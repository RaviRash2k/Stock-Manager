import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import LoginPage from './pages/LoginPage'

const App = () => {
  return (
    <div className='flex'>
      <Sidebar/>

      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </div>
  )
}

export default App
