let display = document.getElementById('display');

function appendNumber(num) {
    if (display.value === '0') {
        display.value = num;
    } else {
        display.value += num;
    }
}

function appendOperator(op) {
    const lastChar = display.value[display.value.length - 1];
    
    if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
        return;
    }
    
    if (display.value === '') {
        return;
    }
    
    display.value += op;
}

function appendDecimal() {
    const lastNumber = display.value.split(/[+\-*/]/).pop();
    
    if (!lastNumber.includes('.')) {
        if (display.value === '') {
            display.value = '0.';
        } else {
            display.value += '.';
        }
    }
}

function clearDisplay() {
    display.value = '0';
}

function deleteLast() {
    if (display.value.length > 0) {
        display.value = display.value.slice(0, -1);
        if (display.value === '') {
            display.value = '0';
        }
    }
}

function calculate() {
    try {
        const result = eval(display.value);
        
        if (isNaN(result) || !isFinite(result)) {
            display.value = 'Error';
        } else {
            display.value = parseFloat(result.toFixed(10));
        }
    } catch (error) {
        display.value = 'Error';
    }
    
    setTimeout(() => {
        if (display.value === 'Error') {
            display.value = '0';
        }
    }, 1500);
}