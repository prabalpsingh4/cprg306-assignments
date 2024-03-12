"use client";
import React, { useState } from 'react';

const NewItem = ({ onAddItem }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();
    
   
    const newItem = {
      name: name,
      quantity: quantity,
      category: category
    };

    
    onAddItem(newItem);

    
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <div className="flex justify-start h-screen">
      <form onSubmit={handleSubmit} className="bg-gradient-to-r from-pink-700 via-purple-700 to-sexy-700 p-6 m-4 w-80 rounded-lg">
        <div>
          <input type='text' value={name} placeholder='item name' onChange={(e) => { setName(e.target.value) }} required className='text-black rounded-lg mb-2 text-l w-full h-9 placeholder:p-2' />
        </div>
        <div className="flex justify-between items-center">
          <div>
            <input type='number' min={1} max={99} value={quantity} onChange={(e) => { setQuantity(Number(e.target.value)) }} required className='text-black  rounded-lg p-2 h-9' />
          </div>
          <div>
            <select id="category" value={category} onChange={(e) => { setCategory(e.target.value) }} className='text-black rounded-lg p-2 h-9'>
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen-foods">Frozen Foods</option>
              <option value="canned-goods">Canned Goods</option>
              <option value="dry-goods">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <button type='submit' className='bg-purple-500 w-full mt-2 h-9 rounded-md'>Add Item</button>
      </form>
    </div>
  );
};

export default NewItem;
