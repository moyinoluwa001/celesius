let celsius = document.getElementById('celesius');
let fahrenheit = document.getElementById('fahrenheit');



celesius.oninput = () => {
  let output = (parseFloat(celesius.value) *9) / 5 + 32;
  fahrenheit.value = parseFloat(output.toFixed(2));
};

fahrenheit.oninput = () => {
    let output = (parseFloat(fahrenheit.value) - 32) * 5 / 9;
    celesius.value = parseFloat(output.toFixed(2));
};