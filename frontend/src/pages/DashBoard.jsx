import React from 'react'
import InventoryStats from '../components/InventoryStats'
import ProductList from '../components/ProductList'

const DashBoard = ({setProductPopup}) => {
  return (
    <div className='h-screen w-full bg-gray-100'>
      <InventoryStats/>
      <hr/>
      <ProductList setProductPopup={setProductPopup}/>
    </div>
  )
}

export default DashBoard
