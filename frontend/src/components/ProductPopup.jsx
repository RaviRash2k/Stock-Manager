import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext';

const ProductPopup = ({product}) => {

    const {productPopup, setProductPopup} = useContext(StoreContext);

    const [data, setData] = useState({
      name: product?.name,
      category: product?.category,
      price: product?.price,
      quantity: product?.quantity
    });

    const onChangeHandler = (e) => {
      setData({...data, [e.target.name] : e.target.value})
    }

  return (
    
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-[400px] rounded-xl shadow-lg p-5 animate-scaleIn">

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Product Details</h2>

          {/* Close button */}
          <button
            onClick={() => setProductPopup("no")}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            ✖
          </button>
        </div>


        {/* Product Image */}
        <div className="w-full h-40 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center mb-4">
          <img
            src={product?.image}
            alt="Product"
            className="h-full object-cover"
          />
        </div>


        {/* click view button */}
        {productPopup === "view" && (
          <div className="space-y-2 text-gray-700">
            <p><span className="font-semibold">Name:</span> {product?.name}</p>
            <p><span className="font-semibold">Category:</span> {product?.category}</p>
            <p><span className="font-semibold">Price:</span> ${product?.price}</p>
            <p><span className="font-semibold">Quantity:</span> {product?.quantity}</p>
            <p><span className="font-semibold">Value:</span> ${product?.price * product?.quantity}</p>
          </div>
        )}


        {/* click edit button */}
        {productPopup === "edit" && (
          <form className="space-y-3 text-gray-700">

            <input
              name="name"
              value={data.name}
              onChange={onChangeHandler}
              className="w-full border p-2 rounded"
              placeholder="Product Name"
            />

            <input
              name="category"
              value={data.category}
              onChange={onChangeHandler}
              className="w-full border p-2 rounded"
              placeholder="Category"
            />

            <input
              name="price"
              value={data.price}
              onChange={onChangeHandler}
              className="w-full border p-2 rounded"
              placeholder="Price"
              type="number"
            />

            <input
              name="quantity"
              value={data.quantity}
              onChange={onChangeHandler}
              className="w-full border p-2 rounded"
              placeholder="Quantity"
              type="number"
            />

            <button className='w-full bg-blue-500 rounded h-10 mt-6 text-white'>Update</button>
          </form>
        )}

      </div>
    </div>
  )
}

export default ProductPopup
