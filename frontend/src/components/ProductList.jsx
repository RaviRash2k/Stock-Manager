import React, { useContext, useState } from 'react'
import search from '../assets/search.png'
import { StoreContext } from '../context/StoreContext'

const ProductList = () => {

  const {setProductPopup} = useContext(StoreContext)

  const products = [
    { name: "Product A", category: "Electronics", price: 5000, qty: 10 },
    { name: "Product B", category: "Clothes", price: 2500, qty: 7 },
    { name: "Product C", category: "Kitchen", price: 1200, qty: 20 },
  ];

  return (
    <div className='m-10'>

      {/* Analyze */}
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-semibold'>Inventory Items</h1>
        <div className='flex items-center gap-4 p-3 w-80 rounded-3xl border'>
          <img className='h-5 w-5 ml-2' src={search} alt="" />
          <p className='text-gray-600'>Search by name</p>
        </div>
      </div>

      {/* table */}
      <div className="p-4 mt-5">
      <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-4 border">Name</th>
            <th className="py-3 px-4 border">Category</th>
            <th className="py-3 px-4 border">Price</th>
            <th className="py-3 px-4 border">Quantity</th>
            <th className="py-3 px-4 border">Value</th>
            <th className="py-3 px-4 border">Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((item, i) => (
            <tr key={i} className="text-center">
              <td className="py-3 px-4 border">{item.name}</td>
              <td className="py-3 px-4 border">{item.category}</td>
              <td className="py-3 px-4 border">Rs {item.price}</td>
              <td className="py-3 px-4 border">{item.qty}</td>
              <td className="py-3 px-4 border">Rs {item.price * item.qty}</td>

              <td className="py-3 px-4 border">
                <button onClick={() => setProductPopup("view")} className="bg-green-500 text-white px-3 py-1 rounded mr-2">
                  View
                </button>
                <button onClick={() => setProductPopup("edit")} className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    </div>
  )
}

export default ProductList
