import React from "react";
import "./mcss.css";

const DiabetesDiet = () => {
  const breakfast = [
    {
      name: 'Flaxseed and Fruit Smoothie',
      calories: 250,
      protein: 10,
      carbohydrates: 35,
      fat: 8,
      image: "../images/diabetes/flexseed.jpeg"
    },
    {
      name: 'Ragi Uttapam',
      calories: 180,
      protein: 6,
      carbohydrates: 30,
      fat: 4,
      image: "../images/diabetes/ragiuttapam.jpg"
    },
    {
      name: 'Vegetable Omelette',
      calories: 220,
      protein: 12,
      carbohydrates: 5,
      fat: 16,
      image: "../images/diabetes/vegomellete.jpg"
    },
    {
      name: 'Methi Missi Roti',
      calories: 180,
      protein: 5,
      carbohydrates: 25,
      fat: 7,
      image: "../images/diabetes/methimissiroti.jpg"
    },
  ];

  const lunch = [
    {
      name: 'Daliya Khichdi',
      calories: 300,
      protein: 10,
      carbohydrates: 50,
      fat: 5,
      image: "../images/diabetes/daliya_khichdi.jpeg"
    },
    {
      name: 'Lemon Rice with Leafy Salad',
      calories: 350,
      protein: 8,
      carbohydrates: 60,
      fat: 7,
      image: "../images/diabetes/lemon_rice_salad.jpeg"
    },
    {
      name: 'Rotis with Soya Gravy/Dal/Egg White Omelette',
      calories: 400,
      protein: 20,
      carbohydrates: 45,
      fat: 15,
      image: "../images/diabetes/dalroti.jpg"
    },
    {
      name: 'Chana with Roti',
      calories: 350,
      protein: 12,
      carbohydrates: 40,
      fat: 10,
      image: "../images/diabetes/chanaroti.jpg"
    }
  ];

  const dinner = [
    {
      name: 'Rotis with  Dal/Egg White Omelette/Soya Gravy',
      calories: 400,
      protein: 20,
      carbohydrates: 45,
      fat: 15,
      image: "../images/diabetes/dalroti.jpg"
    },
    {
      name: 'Grilled fish',
      calories: 300,
      protein: 10,
      carbohydrates: 50,
      fat: 5,
      image: "../images/diabetes/salmonfish.jpeg"
    },
    {
      name: ' Salad',
      calories: 350,
      protein: 8,
      carbohydrates: 60,
      fat: 7,
      image: "../images/diabetes/salad.jpeg"
    },
    {
      name: 'Mix Veg',
      calories: 350,
      protein: 12,
      carbohydrates: 40,
      fat: 10,
      image: "../images/diabetes/mixveg.jpeg"
    }
  ];
  
  return (
    <div className="container">
      <h1>Diabetes Food Diet</h1>
      
      <div>
        <h2>Breakfast</h2>
        <div className="food-container">
          {breakfast.map(food => (
            <div key={food.name} className="food-item">
              <img src={food.image} alt={food.name} />
              <div className="food-details">
                <h2>{food.name}</h2>
                <p>Calories: {food.calories}</p>
                <p>Protein: {food.protein}g</p>
                <p>Carbohydrates: {food.carbohydrates}g</p>
                <p>Fat: {food.fat}g</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h2>Lunch</h2>
        <div className="food-container">
          {lunch.map(food => (
            <div key={food.name} className="food-item">
              <img src={food.image} alt={food.name} />
              <div className="food-details">
                <h2>{food.name}</h2>
                <p>Calories: {food.calories}</p>
                <p>Protein: {food.protein}g</p>
                <p>Carbohydrates: {food.carbohydrates}g</p>
                <p>Fat: {food.fat}g</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h2>Dinner</h2>
        <div className="food-container">
          {dinner.map(food => (
            <div key={food.name} className="food-item">
              <img src={food.image} alt={food.name} />
              <div className="food-details">
                <h2>{food.name}</h2>
                <p>Calories: {food.calories}</p>
                <p>Protein: {food.protein}g</p>
                <p>Carbohydrates: {food.carbohydrates}g</p>
                <p>Fat: {food.fat}g</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default DiabetesDiet;
