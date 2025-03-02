const x = document.querySelector('input');
const button = document.querySelector('button');
const result = document.getElementById('result');
button.addEventListener('click', () => {
 let age = Number(x.value);
  if (isNaN(age) || age < 0 || !Number.isInteger(age)) {
    result.textContent = "Invalid age. Please enter a valid number.";
  } else if (age >= 0 && age <= 12) {
    result.textContent= "Child";
  } else if (age >= 13 && age <= 19){
    result.textContent= "Teenager";
  } else if (age >= 20){
    result.textContent= "Adult";
  }
});    