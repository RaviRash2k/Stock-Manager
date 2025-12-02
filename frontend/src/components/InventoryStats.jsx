import React from 'react'

const InventoryStats = () => {
  return (
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 my-6 mx-auto px-4 max-w-6xl'>
        <div className='border rounded-2xl py-6 px-4 sm:px-5 text-center hover:shadow-lg transition duration-300 bg-white'>
          <p className='text-sm sm:text-base text-gray-600'>Total products</p>
          <p className='text-2xl sm:text-3xl font-semibold text-theme mt-2'>50</p>
        </div>

        <div className='border rounded-2xl py-6 px-4 sm:px-5 text-center hover:shadow-lg transition duration-300 bg-white'>
          <p className='text-sm sm:text-base text-gray-600'>Stock value</p>
          <p className='text-2xl sm:text-3xl font-semibold text-theme mt-2'>$40,000</p>
        </div>

        <div className='border rounded-2xl py-6 px-4 sm:px-5 text-center hover:shadow-lg transition duration-300 bg-white'>
          <p className='text-sm sm:text-base text-gray-600'>Out of stock</p>
          <p className='text-2xl sm:text-3xl font-semibold text-theme mt-2'>6</p>
        </div>

        <div className='border rounded-2xl py-6 px-4 sm:px-5 text-center hover:shadow-lg transition duration-300 bg-white'>
          <p className='text-sm sm:text-base text-gray-600'>Categories</p>
          <p className='text-2xl sm:text-3xl font-semibold text-theme mt-2'>10</p>
        </div>
      </div>
  )
}

export default InventoryStats
