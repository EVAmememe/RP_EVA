
    var π = Math.PI;
    var e = Math.E;

    function Setting( x,y) {

        var div = document.getElementById('div');
        var div2 = document.getElementById('div2');
        document.getElementById('input2').style.width = y*50 + 20;
        document.getElementById('input1').style.width =y*50 + 20;
        document.getElementById('divInput').style.width =y*50 + 20;
        div2.style.height = x*45;
        div2.style.width =  y*50 + 10;
        div.style.height = x*45 + 55;
        div.style.width = y*50 + 80;
    }

    function cos(x) {
        return Math.cos(x);
    }
    function sin(x) {
        return Math.sin(x);
    }
    function tan(x) {
        return Math.tan(x);
    }
    function ctan(x) {
        return 1/Math.tan(x);
    }
    function sqr(x) {
        return Math.sqr(x);
    }
    function sqrt(x) {
        return Math.sqrt(x);
    }
    function log(x) {
        return Math.log10(x);
    }
    function abs(x) {
        return Math.abs(x);
    }
    function root(x,y) {
        return Math.pow(x, 1/y);
    }
    function pow(x,y) {
        return Math.pow(x, y);
    }
window.onload = function () {
    Setting(5,8);
    var input1 = document.getElementById('input1');
    var input2 = document.getElementById('input2');
    input2.value = 'Ans = 0';
    //var input2 = document.getElementById('input2');
    var clear = document.getElementById('clear');
    var dot = document.getElementById('dot');
    var equal = document.getElementById('ravno');
    var erase = document.getElementById('erase');
    var ans = document.getElementById('ans');
    //var numberSystem = 'dec';
    var numbers = document.getElementsByClassName('number');
    var operands = document.getElementsByClassName('operand');
    //var radios = document.getElementsByClassName('numberSistem');
    console.log(numbers);
    //input.value = 0;
    //вызов класса
    var calculator = new Calculator();
    //числа
    for (var i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click',function () {
            input1.value = calculator.setValue(this.innerHTML);
            //input2.placeholder = 0;
            //input2.placeholder = eval( input1.value );
        });
    }
    //операторы 
    for (var i = 0; i < operands.length; i++) {
        operands[i].addEventListener('click',function () {
                input1.value = calculator[this.dataset.operand]();
                input2.placeholder = 0;
                //input2.placeholder = eval( input1.value );
            //input.value = calculator.setValue(this.innerHTML);
            //` ${this.innerHTML} `;
        });
    }
    //отчистка
    clear.addEventListener('click', function () {
        input1.value = calculator.clear();
        input2.value = 0;
        //input2.placeholder = 0;
    });
    //точка
    dot.addEventListener('click', function () {
        input1.value = calculator.dot();
    });
    //равно
    equal.addEventListener('click', function () {
        console.log(equal);
        input2.value = calculator.equal();
        input1.value = '';
    });
    //ластик

    //системы счисления
    for (var i = 0; i < radios.length; i++) {
        radios[i].addEventListener('click',function () {
            //input.value = calculator.toNumber (this.dataset.system,input.value);
        });
    }
}
    