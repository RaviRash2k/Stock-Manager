import React, { useState, useContext } from 'react'
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';

const LoginPage = () => {

  const {url, setToken} = useContext(StoreContext)

  // create login state for change page design
  const [state, setState] = useState("Login");

  //form data
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: ""
  });

  const handleChange = (e) => {
    setData({ 
      ...data, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    //create url
    const endpoint = state === "Register" ? "/api/user/register" : "/api/user/login";
    const newUrl = `${url}${endpoint}`;

    const response = await axios.post(newUrl, data);
    
    if(response.data.success){
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token)
      setData({
        name: "",
        email: "",
        password: "",
        rePassword: ""
      })

    }else{
      alert(response.data.message)
    }
  };

  return (
    <div className="min-h-screen mx-auto w-full flex justify-center items-center bg-gray-100 p-4">
      
      <div className="bg-white w-full max-w-md rounded-xl p-6 shadow-lg">

        <h1 className="text-2xl font-bold text-center mb-6 text-theme">
          {state === "Register" ? "Create an Account" : "Login to Account"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {state === "Register" ? 
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-theme"
              placeholder="Enter your name"
              required
            />
          </div> : <></>}   

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-theme"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-theme"
              placeholder={state === "Register" ? "Create password" : "Enter your password"}
              required
            />
          </div>

          {state === "Register" ? 
            <div>
              <label className="block mb-1 font-medium">Re-Password</label>
              <input
                type="password"
                name="rePassword"
                value={data.rePassword}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-theme"
                placeholder="Enter password again"
                required
              />
            </div>
          : 
          <></>
          }

          {state === "Login" && (
            <p className="text-right text-sm text-theme cursor-pointer hover:underline">
              Forgot Password?
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-theme text-white py-2 rounded-lg hover:opacity-90 transition"
          >
            {state}
          </button>

        </form>

        {state === "Register" ? 
          <p className="text-center mt-4 text-sm">
            Already have an account?{" "}
            <span onClick={()=> {setState('Login')}} className="text-theme cursor-pointer hover:underline">login here</span>
          </p>
        : 
          <p className="text-center mt-4 text-sm">
            Not have an account?{" "}
            <span onClick={()=> {setState('Register')}} className="text-theme cursor-pointer hover:underline">register here</span>
          </p>
        }
        

      </div>

    </div>
  )
}

export default LoginPage
