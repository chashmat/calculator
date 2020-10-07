function fix() {
    document.querySelector('.operator-btn').click();
    document.querySelector('.clear-btn').click();
}
let useOperator = true;
function input(i) {
    let display = document.querySelector('input');
    if (i == '=') {
        display.value = eval(display.value);
    }
    else if (i == 'c') {
        display.value = '';
    }
    else if (i == '+' || i == '-' || i == '*' || i == '/') {
        if (useOperator == true) {
            display.value += i;
            useOperator = false;
        }
    }
    else if (i == 1 || i == 2 || i == 3 || i == 4 || i == 5 || i == 6 || i == 7 || i == 8 || i == 9 || i == 0 || i == '00' || i == '.') {
        useOperator = true;
        display.value += i;
    }
}

window.addEventListener('keydown', function (event) {
    let display = this.document.querySelector('input');
    let code = event.keyCode;
    let code2 = event.key;
    if (code == 13 || code2 == '=') {
        display.value = eval(display.value);
    }
    else if (code2 == 'C' || code2 == 'c' || code2 == 'Backspace') {
        display.value = '';
    }
    else if (code2 == 1) {
        display.value += 1;
    }
    else if (code2 == 2) {
        display.value += 2;
    }
    else if (code2 == 3) {
        display.value += 3;
    }
    else if (code2 == 4) {
        display.value += 4;
    }
    else if (code2 == 5) {
        display.value += 5;
    }
    
    else if (code2 == 6) {
        display.value += 6;
    }
    else if (code2 == 7) {
        display.value += 7;
    }
    else if (code2 == 8) {
        display.value += 8;
    }
    else if (code2 == 9) {
        display.value += 9;
    }
    else if (code2 == 0) {
        display.value += 0;
    }
    else if (code2 == '.') {
        display.value += '.';
    }
    else if (code2 == '/') {
        display.value += '/';
    }
    else if (code2 == '*') {
        display.value += '*';
    }
    else if (code2 == '-') {
        display.value += '-';
    }
    else if (code2 == '+') {
        display.value += '+';
    }
})


