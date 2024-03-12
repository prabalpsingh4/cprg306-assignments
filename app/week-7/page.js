"use client";
import React, { useState } from 'react';
import ItemList from './item-list';
import MealIdeas from './meal-ideas'; 
import Items from './items';

const Page = () => {
  const [selectedItemName, setSelectedItemName] = useState('');
  const [items, setItems] = useState(Items);

  
  const handleItemSelect = (itemName) => {
    console.log('Selected item:', itemName);
    
    const cleanedItemName = itemName.name.replace(/🥛|🍞|🥚|🍌|🥦|🍗|🍝|🍝|🧻|🍽|🧼/g, '').split(",")[0];
    setSelectedItemName(cleanedItemName);
  };

 
  const handleSortByName = () => {
    const sortedItemsByName = [...Items].sort((a, b) => a.name.localeCompare(b.name));
    setItems(sortedItemsByName);
  };

 
  const handleSortByCategory = () => {
    const sortedItemsByCategory = [...Items].sort((a, b) => a.category.localeCompare(b.category));
    setItems(sortedItemsByCategory);
  };

  return (
    <div className="flex">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
        
        <div className="mb-4">
          <button onClick={handleSortByName} className="bg-blue-500 text-white px-4 py-2 mr-2">Sort by Name</button>
          <button onClick={handleSortByCategory} className="bg-blue-500 text-white px-4 py-2">Sort by Category</button>
        </div>
        
        <ItemList onItemSelect={handleItemSelect} items={items} />
      </div>
      <div className="container mx-auto p-4">
        
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
};

export default Page;
