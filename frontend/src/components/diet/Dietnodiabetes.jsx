import React from "react";
import "./mcss.css";

  const Dietnodiabetes = () => {
    const breakfast = [
      {
        name: 'Idli and Samber',
        calories: 250,
        protein: 10,
        carbohydrates: 60,
        fat: 10,
        image: "../images/diabetes/idli.jpeg"
      },
      {
        name: 'Poha',
        calories: 180,
        protein: 5,
        carbohydrates: 50,
        fat: 6,
        image: "../images/diabetes/poha.jpeg"
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
        name: 'Oats',
        calories: 180,
        protein: 5,
        carbohydrates: 25,
        fat: 7,
        image: "../images/diabetes/oats.jpeg"
      },
    ];
  
    const lunch = [
      {
        name: 'Chicken Brest',
        calories: 200,
        protein: 24,
        carbohydrates: 2,
        fat: 15,
        image: "../images/dietprotein/chickebrest.jpeg"
      },
      {
        name: 'Panner with rice',
        calories: 400,
        protein: 15,
        carbohydrates: 60,
        fat: 20,
        image: "../images/diabetes/pannerrice.jpeg"
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
        image: "../images/diabetes/sandwich.jpeg"
      }
    ];
  
    const dinner = [
      {
        name: 'Roti and Egg',
        calories: 400,
        protein: 20,
        carbohydrates: 45,
        fat: 15,
        image: "../images/diabetes/eggsroti.jpg"
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
        <h1>Food Diet for Non Diabetes Persons</h1>
        
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
  
  export default Dietnodiabetes;