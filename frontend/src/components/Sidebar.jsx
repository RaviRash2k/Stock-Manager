import React, { useState } from 'react'
import menu from '../assets/menu.png'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

  const [state, setState] = useState("Dashboard")
  const [sidebar, setSidebar] = useState(true)
  const navigate = useNavigate()

  return (
    

    <div>
      <div className={sidebar ? "h-screen md:w-70 text-center" : "hidden"}>

        {/* user */}
        <div className='bg-theme items-center flex'>
          <img src={menu} onClick={() => setSidebar(false)} className='h-10 w-10 p-2 ml-4' alt="" />
          <h1 className='px-6 py-10 text-2xl text-white font-bold'>Hello, Ravindu</h1>
        </div>

        {/* Navigations */}
        <div className='mt-15'>
          <div onClick={()=> {setState("Dashboard"); navigate('/')}} className='mx-4 my-6 pb-4 border-b'>
            <p className={state==="Dashboard" ? "text-theme font-semibold border-r-5" : ""}>Dashboard</p>
          </div>

          <div onClick={()=> {setState("Add Product"); navigate('/addProduct')}} className='mx-4 my-6 pb-4 border-b'>
            <p className={state==="Add Product" ? "text-theme font-semibold border-r-5" : ""}>Add Product</p>
          </div>

          <div onClick={()=> {setState("Profile"); navigate('/profile')}} className='mx-4 my-6 pb-4 border-b'>
            <p className={state==="Profile" ? "text-theme font-semibold border-r-5" : ""}>Profile</p>
          </div>

          <div onClick={()=> {setState("Report Bug"); navigate('/reporteBug')}} className='mx-4 my-6 pb-4 border-b'>
            <p className={state==="Report Bug" ? "text-theme font-semibold border-r-5" : ""}>Report Bug</p>
          </div>
        </div>
        
      </div>

      <div className={sidebar ? "hidden" : "bg-theme rounded-3xl"}>
        <img src={menu} onClick={() => setSidebar(true)} className='h-10 w-10 mx-4 my-9 p-2' alt="" />
      </div>
    </div>
  )
}

export default Sidebar
