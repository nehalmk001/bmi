// Get references to the input elements and the submit button
const ageInput = document.getElementById('age');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('centimeters');
const submitButton = document.querySelector('.btn-primary');
const resultElement = document.querySelector('h2');
const message = document.querySelector('h4');

// Add an event listener to the submit button
submitButton.addEventListener('click', calculateBMI);

// Function to calculate the BMI and display it in the <h2> element
function calculateBMI() {
  // Get the values from the input fields
  const age = Number(ageInput.value);
  const weight = Number(weightInput.value);
  const height = Number(heightInput.value) / 100; // Convert cm to meters

  // Perform the BMI calculation
  const bmi = weight / (height * height);

  // Display the BMI in the <h2> element
  resultElement.textContent = 'Your BMI Value: ' + bmi.toFixed(2);

  if (bmi < 18.5) {
    message.textContent = 'You are Underweight ';
    message.style.backgroundColor = 'orange';

  } 
  
  else if (bmi >= 18.5 && bmi < 25) {
    message.textContent = 'Your Weight is Normal ';
    message.style.backgroundColor = 'green';
  } 
  
  else if (bmi >= 25 && bmi < 30) {
    message.textContent = 'You are Overweight ';
    message.style.backgroundColor = 'orange';
  } 
  
  else {
    message.textContent = 'You are Obese ';
    message.style.backgroundColor = 'red';
  }

}
