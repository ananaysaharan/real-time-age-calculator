const dateInput = document.getElementById('dateinput');
const resultElement = document.getElementById('result');

dateInput.addEventListener('input', () => {
    const dateValue = dateInput.value;
    const dateValue2 = new Date(dateValue);
    const ageInSeconds = (new Date() - dateValue2) / 1000;
    let ageInSecondsRounded = Math.floor(ageInSeconds);
  
    function incrementAge() {
      resultElement.textContent = `Age is ${ageInSecondsRounded} seconds`;
      ageInSecondsRounded++;
      if (ageInSecondsRounded > 0) {
        setTimeout(incrementAge, 1000);
      }
    }
  
    incrementAge();
  });