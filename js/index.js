document.getElementById('calculator-body').addEventListener('click',function(e){
    const display = document.getElementById('display');
    const displayValue = display.value ;
    const currentNumber = e.target.innerText;
    const newNumber = displayValue + currentNumber;
    if(isNaN(currentNumber)){
        if(currentNumber == 'AC'){
            display.value = ''
        }
        else if(currentNumber == 'DC'){
            display.value = display.value.toString().slice(0,-1);
        }
        else if(currentNumber == '='){
            display.value = eval(display.value);
        }
        else{
            display.value = newNumber;
        }
    }
    else{
        display.value = newNumber;
    }
    
})