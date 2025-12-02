import React, { useState } from 'react'
import menu from '../assets/menu.png'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

  const [state, setState] = useState("Dashboard")
  const [sidebar, setSidebar] = useState(true)
  const navigate = useNavigate()

  return (
    <div>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebar(!sidebar)}
        className='md:hidden fixed top-9 left-4 z-50 bg-theme text-white p-2 rounded'
      >
        <img src={menu} className='h-6 w-6' alt="Menu" />
      </button>

      {/* Sidebar */}
      <div className={sidebar ? "fixed md:relative h-screen w-70 text-center bg-white transition-all duration-300 z-40" : "fixed md:relative h-screen w-0 overflow-hidden md:w-70 bg-white transition-all text-center duration-300 z-40"}>

        {/* user */}
        <div className='bg-theme items-center flex justify-between sm:justify-center'>
          <h1 className='px-6 py-10 text-2xl text-white font-bold'>Hello, Ravindu</h1>
        </div>

        {/* Navigations */}
        <div className='mt-15 overflow-y-auto h-full pb-20'>
          <div onClick={()=> {setState("Dashboard"); navigate('/'); setSidebar(false)}} className='mx-4 my-6 pb-4 border-b cursor-pointer hover:bg-gray-100 transition'>
            <p className={state==="Dashboard" ? "text-theme font-semibold border-r-5" : ""}>Dashboard</p>
          </div>

          <div onClick={()=> {setState("Add Product"); navigate('/addProduct'); setSidebar(false)}} className='mx-4 my-6 pb-4 border-b cursor-pointer hover:bg-gray-100 transition'>
            <p className={state==="Add Product" ? "text-theme font-semibold border-r-5" : ""}>Add Product</p>
          </div>

          <div onClick={()=> {setState("Profile"); navigate('/profile'); setSidebar(false)}} className='mx-4 my-6 pb-4 border-b cursor-pointer hover:bg-gray-100 transition'>
            <p className={state==="Profile" ? "text-theme font-semibold border-r-5" : ""}>Profile</p>
          </div>

          <div onClick={()=> {setState("Report Bug"); navigate('/reporteBug'); setSidebar(false)}} className='mx-4 my-6 pb-4 border-b cursor-pointer hover:bg-gray-100 transition'>
            <p className={state==="Report Bug" ? "text-theme font-semibold border-r-5" : ""}>Report Bug</p>
          </div>
        </div>
        
      </div>

      {/* <div className={sidebar ? "hidden" : "bg-theme rounded-3xl"}>
        <img src={menu} onClick={() => setSidebar(true)} className='h-10 w-10 mx-4 my-9 p-2' alt="" />
      </div> */}
    </div>
  )
}

export default Sidebar
