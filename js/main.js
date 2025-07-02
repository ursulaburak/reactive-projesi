function openTab(evt, tabName) {
  // Hide all tab-content elements
  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach((tab) => {
    tab.classList.remove("active");
  });

  // Remove "active" class from all tab buttons
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  // Show the active tab-content
  document.getElementById(tabName).classList.add("active");

  // Add "active" class to the active tab button
  evt.currentTarget.classList.add("active");
}

function calculateBMI() {
  const heightInput = document.getElementById("height").value;
  const weightInput = document.getElementById("weight").value;

  if (heightInput && weightInput) {
    const heightInMeters = heightInput / 100;
    const bmi = (weightInput / (heightInMeters * heightInMeters)).toFixed(2);

    // Display the BMI result
    document.getElementById("bmi-result").innerText = `Your BMI: ${bmi}`;

    // Update the BMI category
    updateBMIChart(bmi);
  }
}

function updateBMIChart(bmi) {
  const categoryText = document.getElementById("bmi-category");
  const arrow = document.getElementById("bmi-arrow");

  let leftPosition;

  if (bmi < 18.5) {
    categoryText.innerText = "Underweight";
    leftPosition = 15;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    categoryText.innerText = "Normal";
    leftPosition = 30;
  } else if (bmi >= 25 && bmi <= 29.9) {
    categoryText.innerText = "Overweight";
    leftPosition = 50;
  } else if (bmi >= 30 && bmi <= 34.9) {
    categoryText.innerText = "Obese";
    leftPosition = 70;
  } else {
    categoryText.innerText = "Extremely Obese";
    leftPosition = 85;
  }
  arrow.style.left = `${leftPosition}%`;
}

// Automatic calculation when input changes
document.getElementById("height").addEventListener("input", calculateBMI);
document.getElementById("weight").addEventListener("input", calculateBMI);

// Will run when the page has finished loading
window.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  // Check scroll height
  if (window.scrollY > 50) {
    // Change the background after 50px scroll
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});

const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
