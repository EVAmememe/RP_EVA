window.onload = function () {
    var input = document.getElementById('input');
    var clear = document.getElementById('clear');
    var dot = document.getElementById('dot');
    input.value = 0;
    var numberSystem = 'dec';
    var numbers = document.getElementsByClassName('number');
    var operands = document.getElementsByClassName('operand');
    var radios = document.getElementsByClassName('numberSistem');
    console.log(numbers);
    //вызов класса
    var calculator = new Calculator();
    //числа
    for (var i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click',function () {
            input.value = calculator.setValue(this.innerHTML);
        });
    }
    //системы счисления
    for (var i = 0; i < radios.length; i++) {
        radios[i].addEventListener('click',function () {
            //input.value = calculator.toNumber (this.dataset.system,input.value);
        });
    }
    

                /*
            //var contains = value.contains('.');
            console.log(input.value.includes('.'));
            if (input.value === '0' && this.innerHTML !='.') {
                input.value = this.innerHTML;
            } else if (this.innerHTML !='.' || !input.value.includes('.') ) {
                //parent.contains(child);
                input.value += this.innerHTML;
            }*/
    //операторы 
    for (var i = 0; i < operands.length; i++) {
        operands[i].addEventListener('click',function () {
            if ( 1 ) {
            input.value = calculator[this.dataset.operand]();
            }
        });
    }
    //отчистка
    clear.addEventListener('click', function () {
        input.value = calculator.clear();
    });
    //точка
    dot.addEventListener('click', function () {
        input.value = calculator.dot();
    });
}
    