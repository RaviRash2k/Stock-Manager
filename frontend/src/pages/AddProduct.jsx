import React, { useState } from 'react'
import upload_area from '../assets/upload_area.png'

const AddProduct = () => {

  const [img, setImg] = useState(false);
  const [data, setData] = useState({
    name: "",
    description:"",
    category:"",
    price:"",
    quantity:""
  })

  const onChangeHandler = (e) => {
    setData({...data, [e.target.name] : e.target.value})
  }

  return (
    <div className="w-full flex bg-gray-100 justify-center px-4">
      <form className="bg-white shadow-lg rounded-xl p-7 w-full max-w-xl mt-10 space-y-5">

        <div>
          <p className="mb-1 font-medium">Upload Image</p>

          <label
            htmlFor="image"
            className="block w-full h-40 border border-dashed rounded-xl flex items-center justify-center cursor-pointer bg-gray-50"
          >
            <img
              src={img ? URL.createObjectURL(img) : upload_area}
              alt=""
              className="h-full object-cover rounded-xl"
            />
          </label>

          <input
            onChange={(e) => setImg(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>

        <div>
          <p className="mb-1 font-medium">Product name</p>
          <input
            onChange={onChangeHandler}
            type="text"
            name="name"
            value={data.name}
            placeholder="Product name"
            className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-theme outline-none"
          />
        </div>

        <div>
          <p className="mb-1 font-medium">Product description</p>
          <textarea
            onChange={onChangeHandler}
            type="text"
            name="description"
            value={data.description}
            placeholder="Product description"
            className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-theme outline-none"
          />
        </div>

        <div>
          <p className="mb-1 font-medium">Product category</p>
          <input
            onChange={onChangeHandler}
            type="text"
            name="category"
            value={data.category}
            placeholder="Category"
            className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-theme outline-none"
          />
        </div>

        <div>
          <p className="mb-1 font-medium">Product price</p>
          <input
            onChange={onChangeHandler}
            type="text"
            name="price"
            value={data.price}
            placeholder="Price"
            className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-theme outline-none"
          />
        </div>

        <div>
          <p className="mb-1 font-medium">Product quantity</p>
          <input
            onChange={onChangeHandler}
            type="text"
            name="quantity"
            value={data.quantity}
            placeholder="Quantity"
            className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-theme outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-theme text-white p-3 rounded-lg font-semibold"
        >
          Add
        </button>

      </form>
    </div>

  )
}

export default AddProduct
