let currentInput = '';
    let operator = '';
    let display = document.getElementById('display');

    function appendNumber(number) {
      currentInput += number;
      display.value = currentInput;
    }

    function setOperator(op) {
      operator = op;
      currentInput += ' ' + op + ' ';
      display.value = currentInput;
    }

    function clearDisplay() {
      currentInput = '';
      operator = '';
      display.value = '';
    }

    function calculateResult() {
      try {
        display.value = eval(currentInput);
        currentInput = display.value;
        operator = '';
      } catch (error) {
        display.value = 'Error';
      }
    }