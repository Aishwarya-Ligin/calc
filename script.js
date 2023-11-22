let display = document.getElementById('display');

function calculate(event) {
  if (event.target.tagName === 'BUTTON') {
    display.value += event.target.textContent;
  }
}

function evaluate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

function clearDisplay() {
  display.value = '';
}
