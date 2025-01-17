import React from 'react'
import {Cart, Card} from "./components"
const App = () => {


  const items = [
    {"name": "Product A", "price": "1500"},
    {"name": "Product B", "price": "2500"},
    {"name": "Product C", "price": "1800"},
    {"name": "Product D", "price": "1200"},
    {"name": "Product E", "price": "2000"},
    {"name": "Product F", "price": "900"}
  ]


  return (
    <div className="grid h-screen w-screen grid-cols-1 gap-4 bg-gray-100 px-4 py-4">
    {/* Product Grid */}
    <div className="row-span-2 grid grid-rows-2 gap-4">
      {/* Top Row */}
      <div className="row-span-1 grid h-full w-full grid-cols-3 gap-6">
        {items.map((item, index) => {
          if (index < 3) {
            return (
              <Card
                key={item.name} // Using `item.name` as the key since `Math.random()` can cause rendering issues.
                name={item.name}
                price={item.price}
                className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-200"
              />
            );
          }
        })}
      </div>

      {/* Bottom Row */}
      <div className="row-span-1 grid h-full w-full grid-cols-3 gap-6">
        {items.map((item, index) => {
          if (index >= 3 && index < 6) {
            return (
              <Card
                key={item.name}
                name={item.name}
                price={item.price}
                className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-200"
              />
            );
          }
        })}
      </div>
    </div>

    {/* Cart Section */}
    <div className="row-span-1 bg-white shadow-lg rounded-lg p-6">
      <Cart />
    </div>
  </div>
  )
}

export default App