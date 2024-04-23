"use client";
import React, { useState, useEffect } from 'react';

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  
  const fetchMealIdeas = async (ingredient) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      if (!response.ok) {
        throw new Error('Failed to fetch meal ideas');
      }
      const data = await response.json();
      return data.meals;
    } catch (error) {
      console.error('Error fetching meal ideas:', error.message);
      return [];
    }
  };

 
  const loadMealIdeas = async () => {
    try {
      const fetchedMeals = await fetchMealIdeas(ingredient);
      setMeals(fetchedMeals);
    } catch (error) {
      console.error ('Error loading meal ideas:', error.message);
    }
  };

  
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  
  return (
    <div>
      <h2>Meal Ideas with {ingredient}</h2>
      <ul>
        {meals == null ? <li>Loading...</li>:     (meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        )))}
      </ul>
    </div>
  );
};

export default MealIdeas;