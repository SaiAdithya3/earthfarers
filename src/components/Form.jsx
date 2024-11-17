import React from 'react'

const Form = ({width}) => {
  return (
    <div className={`bg-white w-full  ${width} h-full p-6 rounded-3xl shadow-lg`}>
            <h3 className="text-3xl font-semibold intern bluet mb-2 mt-2">
              Get a Quote
            </h3>
            <p className="mb-4 text-sm text-black">We only send essential and relevant emails—no spam, ever.</p>
            <form className="space-y-6 bluet">
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#064185] focus:ring-[#064185] focus:ring-1"
                  placeholder="Your email"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="company"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#064185] focus:ring-[#064185] focus:ring-1"
                  placeholder="Company name"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="product"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  id="product"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#064185] focus:ring-[#064185] focus:ring-1"
                  placeholder="Product name"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="quantity"
                >
                  Quantity
                </label>
                <input
                  type="text"
                  id="quantity"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#064185] focus:ring-[#064185] focus:ring-1"
                  placeholder="Quantity"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bluex text-white font-semibold py-3 rounded-2xl hover:bg-[#064185d9] transition"
              >
                Submit
              </button>
            </form>
          </div>
  )
}

export default Form