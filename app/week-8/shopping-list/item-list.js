import React from 'react';
import Item from './item'; 

const ItemList = ({ items, onItemSelect }) => {
    const items_copy = items;
  return (
    <div className="container px-3" style={{ width: "30%", marginTop: "-20px" }}>
      <div style={{ display: "flex", marginBottom: "10px" }}>
      
      </div>

      <ul className="w-auto">
      
        {items_copy.map((item) => (
          <Item 
            key={item.id} 
            {...item} 
            onSelect={onItemSelect} 
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;