import React from 'react';

const Item = ({ name, quantity, category, onSelect }) => {
  const handleClick = () => {
    onSelect({name});
  };

  return (
    <div className="w-1/2" onClick={handleClick}>
      <li className="flex bg-gray-100 p-4 m-2 rounded cursor-pointer w-60 mt-10">
        <div>
          <h2 className="text-xl font-bold">{name}</h2>
          <h3 className="text-md text-gray-600">
            Buy {quantity} in {category}
          </h3>
        </div>
      </li>
    </div>
  );
};

export default Item;