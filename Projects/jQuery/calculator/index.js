
$(".clear").click(()=>{
  clearDisplay();  
})

let display = document.getElementById('display');

    function appendValue(val) {
      if (display.innerText === '0') {
        display.innerText = val;
      } else {
        display.innerText += val;
      }
    }

    function clearDisplay() {
      display.innerText = '0';
    }

    function calculate() {
      try {
        display.innerText = eval(display.innerText);
      } catch {
        display.innerText = 'Error';
      }
    }