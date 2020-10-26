function Calculator () {
    var value = 0,
        value2 = 0;
    var operation;

    this.toNumber = function (system,val) {
        val = parseInt(val, system);
        return val.toString(system);
    };
            //var number = input.value;
            //number = parseInt(number, numberSystem);
            //numberSystem = system-0;
            //return number.toString(numberSystem);    

    this.setValue = function (symvol) {
        if (value) {
            value  = (value.toString() + symvol) - 0;
        }   else {
            value = symvol-0;
        }  
        return value; 
    };

    this.dot = function () {
        if ( value.toString().indexOf('.') === -1 ) {
            value += '.';   
        }
        return value;
    };

    this.clear = function() {
        value = 0;
        value2 = 0;
        operation = null;
        return value;
    };

    this.add = function() {
        operation = 'add';
        if (value && value2) {
            value = value-0;
            //value2 = value2-0;
            //var t = value;
            value = value + value2;
            //value2 = value - t;
            //console.log(t, value, value2 );
        } else {
            value2 = value-0;
            value = 0;
        }
        return value;
    };

    this.sub = function() {
        operation = 'sub';
        if (value && value2) {
            value = value2 - value;
        } else {
            value2 = value-0;
            value = 0;
        }
        return value;
    };

    this.mult = function() {
        operation = 'mult';
        if (value && value2) {
            value = value2 * value;
        } else {
            value2 = value-0;
            value = 0;
        }
        return value;
    };

    this.divi = function() {
        operation = 'divi';
        if (value && value2) {
            value = value2 / value;
        } else {
            value2 = value-0;
            value = 0;
        }
        return value;
    };

    this.pow = function() {
        operation = 'pow';
        if (value && value2) {
            value = Math.pow(value2,(value-0));
        } else {
            value2 = value-0;
            value = 0;
        }
        return value;
    };

    this.root = function() {
        operation = 'root';
        if (value && value2) {
            value = Math.pow(value2,1/(value-0));
        } else {
            value2 = value-0;
            value = 0;
        }
        return value;
    };

    this.sqr = function() {
        operation = 'sqr';
        if (value) {
            value =  value*value;
        } else {
            value = 0;
        }
        return value;
    };

    this.sqrt = function() {
        operation = 'sqrt';
        if (value) {
            value =  Math.sqrt(value);
        } else {
            value = 0;
        }
        return value;
    };

    this.pm = function() {
        operation = 'pm';
        if (value) {
            value =  -value;
        } else {
            value = 0;
        }
        return value;
    };

    this.rev = function() {
        operation = 'rev';
        if (value) {
            if (value == 0) {
                value = 0;
            } else {
                value =  1/value;
            }
        } else {
            value = 0;
        }
        return value;
    };

    this.sin = function() {
        operation = 'sin';
        if (value) {
           value = Math.sin(value*(Math.PI / 180)); 
        } else {
            value = 0;
        }
        return value;
    };

    this.cos = function() {
        operation = 'cos';
        if (value) {
           value = Math.cos(value*(Math.PI / 180)); 
        } else {
            value = 0;
        }
        return value;
    };

    this.tan = function() {
        operation = 'tan';
        if (value) {
           value = Math.tan(value*(Math.PI / 180)); 
        } else {
            value = 0;
        }
        return value;
    };

    this.ctan = function() {
        operation = 'ctan';
        if (value) {
           value = 1/Math.tan(value*(Math.PI / 180)); 
        } else {
            value = 0;
        }
        return value;
    };

    this.log = function() {
        operation = 'log';
        if (value) {
            if (value <= 0) {
                value = 0;
            } else {
                value =  Math.log10(value);
            }
        } else {
            value = 0;
        }
        return value;
    };

    this.mod = function() {
        operation = 'mod';
        if (value) {
                value =  Math.abs(value);
        } else {
            value = 0;
        }
        return value;
    };

    this.e = function() {
        operation = 'e';
        value  = Math.E; 
        return value;
    };

    this.pi = function() {
        operation = 'pi';
        value  = Math.PI; 
        return value;
    };

    this.equal = function() {
        if (operation && this[operation] instanceof Function) {
            value = this[operation]();
            operation = null;
        }
        value2 = 0;
        return value;
    };
}