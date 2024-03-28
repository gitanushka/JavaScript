const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    //preventing the the values to go the server since we have to calculate it
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height<0 || isNaN(height)){
        results.innerHTML = `Please give a valid height`;
    }
    else if(weight === '' || weight<0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight`;
    }
    else{
      const bmi = (weight/((height * height)/10000)).toFixed(2);
      //show the result
      results.innerHTML = `<span>${bmi}</span>`;
      if(bmi<=18.6){
        results.innerHTML += `<br><span>You are underweight!<span>`;
    }
    else if(bmi>=18.6 && bmi<=24.9){
        results.innerHTML += `<br><span>You are Good enough!<span>`;
    }
    else if(bmi>24.9){
        results.innerHTML += `<br><span>You are overweight!<span>`;
    }
    //Used results.innerHTML += to append the category message without overriding the BMI value display.
    }
});