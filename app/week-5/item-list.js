"use client";
import React, { useState, useEffect } from "react";
import Item from "./item"; 
import itemsData from "./item.json"; 

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name"); 
  const [items, setItems] = useState(itemsData);

  useEffect(() => {
    handleSort();
  }, [sortBy]); 
  const handleSort = () => {
    setItems([...items].sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name); 
      } else if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      }
      return 0;
    }));
  };

  const handleSortByName = () => {
    setSortBy("name");
  };

  const handleSortByCategory = () => {
    setSortBy("category");
  };

  return (
    <div className="container px-3" style={{ width: "30%" }}>
      <div style={{ display: "flex", marginBottom: "10px" }}>
        <button
          onClick={handleSortByName}
          style={{
            flex: 1,
            backgroundColor: sortBy === "name" ? "orange" : "white",
            border: "1px solid orange",
            marginRight: "5px",
            cursor: "pointer",
          }}
        >
          Sort by Name
        </button>
        <button
          onClick={handleSortByCategory}
          style={{
            flex: 1,
            backgroundColor: sortBy === "category" ? "orange" : "white",
            border: "1px solid orange",
            cursor: "pointer",
          }}
        >
          Sort by Category
        </button>
      </div>

      <div>
        <label htmlFor="sortBy">Sort by:</label>
        <select
          id="sortBy"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={{ width: "100%" }}
        >
          <option value="name">Name</option>
          <option value="category">Category</option>
        </select>
      </div>

      <ul className="w-auto">
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
