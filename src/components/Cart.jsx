import React from 'react'
import {useItem} from "../context/ItemContext"
const Cart = () => {
  const {items} = useItem()
  const totalItems = items.reduce((a, b) => a+=1,0)
  const totalPrice = items.reduce((a,b) => a=a+parseInt(b.price) , 0)
  return (
    <div className="mx-4 my-6 p-6 bg-white rounded-xl shadow-md text-center">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">🛒 Your Cart</h1>
      <h2 className="text-2xl font-semibold text-gray-700">
        Total Items: <span className="text-blue-600">{totalItems}</span>
      </h2>
      <h3 className="text-2xl font-semibold text-gray-700">
        Total Price: <span className="text-green-600">${totalPrice}</span>
      </h3>
      {items.length > 0 ? (
        <ul className="mt-4 text-lg text-gray-600 list-disc list-inside">
          {items.map((item, index) => (
            <li key={index} className="mt-1">
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-lg text-gray-500">Your cart is empty.</p>
      )}
    </div>
  )
}

export default Cart