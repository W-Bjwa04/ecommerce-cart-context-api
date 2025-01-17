import React from 'react'
import {useItem} from "../context/ItemContext"
const Card = ({name, price}) => {

  const {items, setItems} = useItem()
  const addToCart = (name, price)=>{
    setItems([...items, {name, price}])
  }
  return (
    <div className="rounded-2xl text-xl border border-gray-300 bg-white shadow-md hover:shadow-lg p-6 flex items-center justify-center flex-col gap-4 transition duration-200">
      <h3 className="text-gray-700 font-semibold">
        <span className="text-blue-600">Name:</span> {name}
      </h3>
      <h3 className="text-gray-700 font-semibold">
        <span className="text-green-600">Price:</span> ${price}
      </h3>
      <button
        className="bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white font-medium rounded-lg shadow-sm border border-blue-700 transition duration-150"
        onClick={() => addToCart(name, price)}
      >
        Add To Cart
      </button>
    </div>
  )
}

export default Card