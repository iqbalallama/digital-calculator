// calculator body
document.getElementById('calculator-body').addEventListener('click',function(e){
    // display part
    const display = document.getElementById('display');
    const displayValue = display.value ;
    const currentNumber = e.target.innerText;
    // display new number
    const newNumber = displayValue + currentNumber;
    // condition check
    if(isNaN(currentNumber)){
        // all clear
        if(currentNumber == 'AC'){
            display.value = ''
        }
        // clear 1 by 1
        else if(currentNumber == 'DC'){
            display.value = display.value.toString().slice(0,-1);
        }
        // calculation part
        else if(currentNumber == '='){
            display.value = eval(display.value);
        }
        // calculation part
        else if(currentNumber == '%'){
            display.value = eval(display.value / 100);
        }
        // else part
        else{
            display.value = newNumber;
        }
    }
    // display else part
    else{
            display.value = newNumber;
    }
    
})