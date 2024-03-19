"use client";
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory for redirection
import { useUserAuth } from './useUserAuth'; // Import useUserAuth hook
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import Items from './items';

// Initialize Firebase with your Firebase project configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

const Page = () => {
  const [selectedItemName, setSelectedItemName] = useState('');
  const [items, setItems] = useState(Items);
  const user = useUserAuth(); // Get the user object from useUserAuth hook
  const history = useHistory(); // Get history for redirection

  useEffect(() => {
    if (!user) {
      // User is not logged in, redirect to landing page
      history.push('/');
    }
  }, [user, history]);

  useEffect(() => {
    // Perform any Firebase related operations here, such as fetching data from Firestore
    // For example:
    // const db = getFirestore();
    // const itemsCollection = collection(db, 'items');
    // const unsubscribe = onSnapshot(itemsCollection, (snapshot) => {
    //   const itemsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    //   setItems(itemsData);
    // });

    // Cleanup function
    // return () => unsubscribe();
  }, []);

  const handleItemSelect = (itemName) => {
    console.log('Selected item:', itemName);
    
    const cleanedItemName = itemName.name.replace(/🥛|🍞|🥚|🍌|🥦|🍗|🍝|🍝|🧻|🍽|🧼/g, '').split(",")[0];
    setSelectedItemName(cleanedItemName);
  };

  const handleSortByName = () => {
    const sortedItemsByName = [...items].sort((a, b) => a.name.localeCompare(b.name));
    setItems(sortedItemsByName);
  };

  const handleSortByCategory = () => {
    const sortedItemsByCategory = [...items].sort((a, b) => a.category.localeCompare(b.category));
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
