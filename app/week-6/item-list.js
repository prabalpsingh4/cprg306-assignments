"use client";
import React, { useState, useEffect } from "react";
import Item from "./item";

const ItemList = ({ items }) => {
  const [sortedItems, setSortedItems] = useState([]);
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    handleSort(items);
  }, [items, sortBy]); 

  const handleSort = (itemsToSort) => {
    const sortedItemsCopy = [...itemsToSort].sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });
    setSortedItems(sortedItemsCopy);
  };

  const handleSortByName = () => {
    setSortBy("name");
  };

  const handleSortByCategory = () => {
    setSortBy("category");
  };

  return (
    <div className="container px-3" style={{ width: "30%", marginTop: "-20px" }}>
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

      <ul className="w-auto">
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
