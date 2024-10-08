const result = document.getElementById("result");
const hist = document.getElementById("hist");
var number = '', temp1, temp0 = '', operator, histVal = '', resultVal = '';
var isStart = true;

function appendToNumber(button){
    var digit = button.textContent;
    number += digit;
    result.textContent = number;
    if(isStart){
        temp0 = number;
    }
}

function deleteDigit(){
    number = number.substring(0, number.length - 1);
    result.textContent = number;
}

function reset(){
    number = '';
    result.textContent = number;
}

function hardReset(){
    number = '';
    result.textContent = number;
    histVal = '';
    resultVal = '';
    temp0 = ''; temp1 = '';
    hist.textContent = histVal;
    isStart = true;
}

function setOperation(button){
    operator = button.textContent;
    temp1 = result.textContent;
    histVal += temp1 + ' ' + operator + ' ';
    hist.textContent = histVal
    var number1 = temp0;
    var number2 = temp1;
    if(isStart){
        isStart = false;
        resultVal = temp0;
    }else{
        number1 = resultVal;
        resultVal = operation(number1, number2, operator) 
        isStart = false;
    }
    reset()
}

function startOperation(){
    var number1 = resultVal == '' ? temp1 : resultVal;
    var number2 = result.textContent;
    histVal += number2 + ' ';
    hist.textContent = histVal
    var resultValTemp = operation(number1, number2, operator) 
    hardReset()
    result.textContent = resultValTemp;
}
function operation(number1, number2, operator){
    number1 = Number(number1)
    number2 = Number(number2)
    if(operator === '+'){
        return number1 + number2;
    }else if(operator == '-'){
        return number1 - number2;
    }else if(operator === '*'){
        return number1 * number2;
    }else if(operator === '/'){
        if(number2 === 0){
            return "error dengan 0"
        }else{
            return number1 / number2;
        }
    }else{
        return "error operasi"
    }
}