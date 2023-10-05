const form = document.querySelector("form");
const heightInput = document.getElementById("height");

heightInput.focus()

form.addEventListener("submit", function(e){
    e.preventDefault()

    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    const results = document.querySelector("#results");
    const resultsGuide = document.querySelector("#guide");

    if(height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `please give valid Height ${height}`
    }

    else if(weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `please give valid weight ${weight}`
    }
    else {
        const bmi = ( weight / ((height * height) / 10000)).toFixed(3);
        results.innerHTML = `Your BMI Number is ${bmi}`
        if ( bmi < 18.6) {
            resultsGuide.innerHTML = `You are Under Weight`
        }
        else if ( bmi > 24.9) {
            resultsGuide.innerHTML = `You Weight is height`
        }
        else {
            resultsGuide.innerHTML = `You body is Normal as apr BMI Index`
        }
    }
})