function Calculator () {
    var value1 = '';
    var value2 = 0;
    var operation;

    this.toNumber = function (system,val) {
        val = parseInt(val, system);
        return val.toString(system);
    };
            //var number = input.value1;
            //number = parseInt(number, numberSystem);
            //numberSystem = system-0;
            //return number.toString(numberSystem);    

    this.setValue = function (symvol) {
        if (value1) {
            value1  = (value1.toString() + symvol);
        }   else {
            value1 = symvol;
        }  
        return value1; 
    };

    this.none = function () {
        return value1;
    };

    this.dot = function () {
        if ( value1.toString().indexOf('.') === -1 ) {
            value1 += '.';   
        }
        return value1;
    };

    this.clear = function() {
        value1 = '';
        value2 = 0;
        operation = null;
        return value1;
    };

    this.ls = function() {
        value1 += '(';
        return value1;
    };

    this.rs = function() {
        value1 += ')';
        return value1;
    };

    this.com = function() {
        value1 += ',';
        return value1;
    };

    this.add = function() {
        if (value1) {
            value1 += '+';
        }   else {       
        }
        return value1;
    };

    this.sub = function() {
        if (value1) {
            value1 += '-';
        }   else {
            value1 = '-';
        }
        return value1;
    };

    this.mult = function() {
        if (value1) {
            value1 += '*';
        }   else {
        }
        return value1;
    };

    this.divi = function() {
        if (value1) {
            value1 += '/';
        }   else {
        }
        return value1;
    };

    this.pow = function() {
        value1 += 'pow(';
        return value1;
    };

    this.root = function() {
        value1 += 'root(';
        return value1;
    };

    this.sqr = function() {
        value1 += 'sqr(';
        return value1;
    };

    this.sqrt = function() {
        if (value1) {
            value1 += 'sqrt(';
        }   else {
            value1 = 'sqrt(';
        }
        return value1;
    };

    this.pm = function() {
        console.log(value1[0]);
        if (value1[0] === '-') {
            value1 = value1.substr(1);
        } else {
            value1 = '-'.concat(value1);
        }
        return value1;
    };

    this.rev = function() {
        value1 += '(1/';
        return value1;
    };

    this.sin = function() {
        value1 += 'sin(';
        return value1;
    };

    this.cos = function() {
        value1 += 'cos(';
        return value1;
    };

    this.tan = function() {
        value1 += 'tan(';
        return value1;
    };

    this.ctan = function() {
        value1 += 'ctan(';
        return value1;
    };

    this.log = function() {
        value1 += 'log(';
        return value1;
    };

    this.mod = function() {
        value1 += 'abs(';
        return value1;
    };

    this.e = function() {
        value1 += 'e';
        return value1;
    };

    this.pi = function() {
        value1 += 'π';
        return value1;
    };

    this.erase = function() {
        value1 = value1.slice(0,-1);
        console.log( value1);
        return value1;
    };

    this.ans = function() {
        value1 += value2;
        return value1;
    };

    this.equal = function() {
        console.log((value1.split("(").length - 1)-(value1.split(")").length - 1));
        var t = (value1.split("(").length - 1)-(value1.split(")").length - 1);
        for (i=0;i< t ; i++) { value1 += ")"}
        console.log (value1);
        value2 = eval(value1);
        value1 = '';
        /*if (operation && this[operation] instanceof Function) {
            value1 = this[operation]();
            operation = null;
        }
        value12 = 0;*/
        return `Ans = ${value2}`;
    };
}