import React, { useState } from "react";
import emailjs from "emailjs-com";

const ReportBug = () => {
  
  const [data, setData] = useState({
    title: "",
    email: "",
    message: ""
  })

  const changeHandler = (e) => {
    setData({...data, [e.target.name] : e.target.value})
  }

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      title: data.title,
      email: data.email,
      message: data.message,
      to_email: "ravindurashmithapg@gmail.com",
      from_name: data.email
    };

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      alert("Report submitted successfully!");
      setData({ title: "", email: "", message: "" });
    })
    .catch((error) => {
      alert("Failed to send report. Please try again.");
    });
  };

  return (

    <div className="w-full min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
      
      <h1 className="text-2xl sm:text-3xl md:text-4xl my-6 sm:my-8 md:my-10 font-semibold mb-4">Report a Bug</h1>

      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 justify-center max-w-6xl mx-auto">
      
        <div className="bg-white shadow-lg rounded-xl p-5 sm:p-6 md:p-8 w-full lg:w-1/2">
          <div>

            <form onSubmit={sendEmail} className="space-y-4 sm:space-y-5">

              <div>
                <label className="block text-gray-700 mb-2 font-medium text-sm sm:text-base">Bug Title</label>
                <input
                  type="text"
                  name="title"
                  value={data.title}
                  onChange={changeHandler}
                  className="w-full border border-gray-300 rounded-lg p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-theme transition"
                  placeholder="Enter bug title..."
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium text-sm sm:text-base">Email</label>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={changeHandler}
                  className="w-full border border-gray-300 rounded-lg p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-theme transition"
                  placeholder="Enter bug title..."
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium text-sm sm:text-base">Message</label>
                <textarea
                  name="message"
                  value={data.message}
                  onChange={changeHandler}
                  className="w-full h-32 sm:h-40 border border-gray-300 rounded-lg p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-theme transition resize-none"
                  placeholder="Describe the bug clearly..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-theme text-white py-2 sm:py-3 px-4 rounded-lg font-medium transition duration-300"
              >
                Submit Report
              </button>

            </form>
          </div>
        </div>

        <div className="bg-theme text-white border rounded-xl p-5 sm:p-6 md:p-8 w-full lg:w-1/2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4">Our Contact Information</h2>
          <p className="mb-6 text-sm sm:text-base">Fill the form or contact us via other channels listed follow.</p>

          <div className="space-y-4 sm:space-y-5">
            <p className="text-sm sm:text-base">
              <span className="font-semibold block sm:inline">📞 Phone:</span>
              <span className="block sm:inline sm:ml-2">+94 71 123 4567</span>
            </p>

            <p className="text-sm sm:text-base">
              <span className="font-semibold block sm:inline">📧 Email:</span>
              <span className="block sm:inline sm:ml-2">support@yourapp.com</span>
            </p>

            <p className="text-sm sm:text-base">
              <span className="font-semibold block sm:inline">📍 Address:</span>
              <span className="block sm:inline sm:ml-2">No. 25, Main Street, Colombo, Sri Lanka</span>
            </p>
          </div>
        </div>

      </div>

    </div>
    
  );
};

export default ReportBug;
