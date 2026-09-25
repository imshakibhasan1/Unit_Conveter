// Grab HTML for using DOM
// Input element garb
const valueInput = document.getElementById("valueInput");
const getInputValue= Number(valueInput.value);
const btnInput = document.getElementById("btnInput");
// result Display element grab
const inputValue = document.querySelectorAll(".inputValue")
const meterToFeet = document.getElementById("meterToFeet");
const feetToMeter = document.getElementById("feetToMeter");
const litersToGallons = document.getElementById("litersToGallons");
const gallonsToLiters = document.getElementById("gallonsToLiters");
const kgToPound = document.getElementById("kgToPound");
const poundToKg = document.getElementById("poundToKg");



btnInput.addEventListener("click", function calculate(){
    const value = Number(valueInput.value)
    inputValue.forEach(span => {
        span.textContent = value;
    })
    

     meterToFeet.textContent = value * 3.281;
     feetToMeter.textContent = value * 0.305;
     litersToGallons.textContent = value * 0.264;
     gallonsToLiters.textContent = value * 3.785;
     kgToPound.textContent = value * 2.205;
     poundToKg.textContent = value * 0.454;
     valueInput.value = "";
     

})






