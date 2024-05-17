import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Report.css"; // Import CSS file for styling

const KFC = () => {
  const history = useHistory();
  const [diseases, setDiseases] = useState([]);
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [exercise, setExercise] = useState("");
  const [veg, setVeg] = useState("");

  const diseaseOptions = [
    "Coeliac disease", "Hypothyroidism", "Hyperthyroidism", "Diabetesinsipidus", "Frozen Shoulder","Trigger Finger","Haemochromatosis","Acute Pancreatitis","Chronic Pancreatitis"
  ]; // Add more diseases as necessary
  const genderOptions = ["Male", "Female", "Other"];
  const exerciseOptions = [
    "Little or no exercise",
    "Exercise 1-3 times/week",
    "Exercise or Intense Exercise 3-4 times/week",
    "Exercise 4-5 times/week",
    "Intense Exercise 6-7 times/week",
    "Intense Exercise daily",
  ];
  const vegOptions = ["Vegetarian", "Non-Vegetarian"];

  const handleDiseaseChange = (e) => {
    const value = e.target.value;
    setDiseases((prev) => {
      if (prev.includes(value)) {
        return prev.filter((disease) => disease !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const req = {
      diseases,
      age,
      height,
      weight,
      gender,
      exercise,
      veg,
    };
    console.log(req);
    axios.post("http://localhost:5000/predict/diabetes", req).then((res) => {
      console.log(res.data.prediction);
      alert(res.data.prediction);
      const prediction = res.data.prediction;
      if (prediction === "Diabetes") {
        history.push('/diabetesdiet');
      } else {
        history.push('/nodiabetesdiet');
      }
    });
  };

  return (
    <div className="report-container">
      <h1 className="report-heading">Health Report Form</h1>
      <form className="report-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input type="text" id="age" name="age" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="height">Height (cm):</label>
          <input type="number" id="height" name="height" value={height} onChange={(e) => setHeight(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="weight">Weight (kg):</label>
          <input type="number" id="weight" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
            {genderOptions.map((option) => (
              <option key={option} value={option.toLowerCase()}>{option}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exercise">Exercise Frequency:</label>
          <select id="exercise" name="exercise" value={exercise} onChange={(e) => setExercise(e.target.value)}>
            {exerciseOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="veg">Diet:</label>
          <select id="veg" name="veg" value={veg} onChange={(e) => setVeg(e.target.value)}>
            {vegOptions.map((option) => (
              <option key={option} value={option.toLowerCase()}>{option}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="diseases">Diseases:</label>
          {diseaseOptions.map((disease) => (
            <div key={disease}>
              <input
                type="checkbox"
                id={disease}
                name="diseases"
                value={disease}
                checked={diseases.includes(disease)}
                onChange={handleDiseaseChange}
              />
              <label htmlFor={disease}>{disease}</label>
            </div>
          ))}
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default KFC;
