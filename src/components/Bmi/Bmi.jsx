import { useState, useEffect } from "react";

const Bmi = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiCategory, setBmiCategory] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiArrowPosition, setBmiArrowPosition] = useState(0);

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const calculatedBmi = (
        weight /
        (heightInMeters * heightInMeters)
      ).toFixed(2);
      setBmi(calculatedBmi);
      updateBMIChart(calculatedBmi);
    }
  };

  const updateBMIChart = (bmi) => {
    if (bmi < 18.5) {
      setBmiCategory("Underweight");
      setBmiArrowPosition(15);
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setBmiCategory("Normal");
      setBmiArrowPosition(30);
    } else if (bmi >= 25 && bmi <= 29.9) {
      setBmiCategory("Overweight");
      setBmiArrowPosition(50);
    } else if (bmi >= 30 && bmi <= 34.9) {
      setBmiCategory("Obese");
      setBmiArrowPosition(70);
    } else {
      setBmiCategory("Extremely Obese");
      setBmiArrowPosition(85);
    }
  };

  useEffect(() => {
    // Trigger BMI calculation on input change
    calculateBMI();
  }, [height, weight]);

  return (
    <section id="bmi">
      <div className="bmi-calculator-container">
        <div className="bmi-info">
          <h1>BMI Calculator</h1>
          <p>
            Contrary to popular belief, Lorem ipsum is not simply random text.
            It has roors in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            reprehenderit, reiciendis alias eius fugiat placeat, voluptates fuga
            veniam neque sed nemo dolor suscipit vel eaque. Molestiae,
            consectetur! Officia, eos quia!
          </p>

          <div className="bmi-inputs">
            <span>
              <input
                type="number"
                id="height"
                value={height}
                placeholder="Your Height (cm)"
                onChange={(e) => setHeight(e.target.value)}
                required
              />{" "}
              cm
            </span>
            <span>
              <input
                type="number"
                id="weight"
                value={weight}
                placeholder="Your Weight (kg)"
                onChange={(e) => setWeight(e.target.value)}
                required
              />{" "}
              kg
            </span>
          </div>
        </div>
        <div className="bmi-image">
          <h2 id="bmi-result">Your BMI: {bmi} </h2>
          <h2 id="bmi-category">{bmiCategory}</h2>
          <div className="bmi-chart-container">
            <img
              src="./img/bmi-index.jpg"
              alt="BMI Chart"
              className="bmi-chart"
            />
            <div
              className="bmi-arrow"
              id="bmi-arrow"
              style={{ left: `${bmiArrowPosition}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bmi;
