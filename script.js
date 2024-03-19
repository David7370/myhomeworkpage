let display = document.getElementById('display');

function appendToDisplay(value) {
  
  if ('+-*/'.includes(display.value[display.value.length - 1]) && '+-*/'.includes(value)) {
    return; 
  }

  
  if (value === '0' && display.value === '0') {
    return; 
  }

  
  if (value === '.' && display.value.includes('.')) {
    return; 
  }

  
  if (value.match(/[+*/]/) && (display.value === '' || display.value === '-')) {
    return; 
  }

  
  if (value === '-' && !(display.value === '' || '+-*/'.includes(display.value[display.value.length - 1]))) {
    return; 
  }

  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  let result;
  try {
    result = eval(display.value);
    if (isNaN(result) || !isFinite(result)) {
      result = 'Error';
    }
  } catch (error) {
    result = 'Error';
  }
  display.value = result;
}