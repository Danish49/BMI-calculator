import { useState } from "react";
export default function Form() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "height") {
      setHeight(value);
    } else {
      setWeight(value);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);

      const message =
        bmi < 18.5
          ? "Your BMI suggests You are underweight"
          : bmi < 25
          ? "Your BMI suggests You are normal"
          : bmi < 30
          ? "Your BMI suggests You are overweight"
          : "You are obese";
      document.querySelector(".bmi").innerHTML = `Your BMI is ${bmi}`;
      document.querySelector(".message").innerHTML = message;
      calculateIdealWeight();
    }
  };

  const calculateIdealWeight = () => {
    const heightInMeters = height / 100;
    const idealWeight = (21.75 * heightInMeters * heightInMeters).toFixed(2);
    const idealWeightRange = (idealWeight * 0.1).toFixed(2);
    const idealWeightMin = (idealWeight - idealWeightRange).toFixed(2);
    const idealWeightMax = (idealWeight * 1.1).toFixed(2);
    document.querySelector(
      ".message"
    ).innerHTML += ` Your ideal weight is between ${idealWeightMin}kg and ${idealWeightMax}kg`;
  };

  return (
    <form id="BMI-form">
      <h2>Enter your details below</h2>

      <div className="inputGroup">
        <div className="inputSet">
          <label className="label" htmlFor="height">
            Height
          </label>
          <div className="inputBg">
            <input
              type="text"
              placeholder="0"
              id="height"
              value={height}
              onChange={handleChange}
              onKeyDown={handleKeyPress}
            />
            <h3>cm</h3>
          </div>
        </div>

        <div className="inputSet">
          <label className="label" htmlFor="weight">
            Weight
          </label>
          <div className="inputBg">
            <input
              type="text"
              placeholder="0"
              id="weight"
              value={weight}
              onChange={handleChange}
              onKeyDown={handleKeyPress}
            />
            <h3>kg</h3>
          </div>
        </div>
      </div>

      <div className="result">
        <h2 className="bmi">Welcome!</h2>
        <p className="message">
          Enter your height and weight and you’ll see your BMI result here
        </p>
      </div>
      {/* <button type="submit">submit</button> */}
    </form>

    
  );
}
