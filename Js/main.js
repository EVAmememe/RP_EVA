var array = [-12,135,47,-64,38,-19,17];
for (var i=0;i<array.length;i++) {
    console.log (array[i]); 
    }
console.log (' ');
/*
while (1) {
    var answer = prompt("Выбери способ сортировки?(1-7) (8 - выход)");
    switch (answer) {
        case '1': 
            for (var i=0;i<(a.length/2);i++) {
                t = a[i];
                a[i] = a[a.length-1-i];
                a[a.length-1-i] = t;
            }
            for (var i=0;i<a.length;i++) {
                console.log (a[i]); 
            }
            console.log (' '); 
        break;
        case '2':  
            for (var i=1;i<a.length;i +=2) {
                t = a[i];
                a[i] = a[i-1];
                a[i-1] = t; 
            }
            for (var i=0;i<a.length;i++) {
                console.log (a[i]); 
            }
            console.log (' '); 
        break;
        case '3':
            min = a[0], max = a[0], imin = 0, imax = 0 
            for (var i=1; i<a.length; i++ ) {
                if (a[i]<= min) {
                    min = a[i];
                    imin = i;
                }
                if (a[i]>= max) {
                    max = a[i];
                    imax = i;
                }   
            } 
            t = a[imin];
            a[imin] = a[imax];
            a[imax] = t; 
            for (var i=0;i<a.length;i++) {
                console.log (a[i]); 
            }
            console.log (' ');
        break;
        case '4': 
            for (var i=0;i<a.length-1;i++) {
                for (var j=0;j<a.length-1-i;j++) {
                    if (a[j]>a[j+1]) {
                        t = a[j];
                        a[j] = a[j+1];
                        a[j+1] = t;   
                    }
                } 
            }
            for (var i=0;i<a.length;i++) {
                console.log (a[i]); 
            }
            console.log (' '); 
        break;
        case '5': 
            for (var i=0;i<a.length-1;i++) {
                for (var j=0;j<a.length-1-i;j++) {
                    if (a[j]<a[j+1]) {
                        t = a[j];
                        a[j] = a[j+1];
                        a[j+1] = t;   
                    }
                } 
            }
            for (var i=0;i<a.length;i++) {
                console.log (a[i]); 
            }
            console.log (' '); 
        break;
        case '6': 
            sum = 0;
            for (var i=0;i<a.length;i++) {
                sum += a[i];
            }
            console.log ('сумма = ',sum );
            console.log (' ');
        break;
        case '7': 
            sumP=0;sumM=0;
            for (var i=0;i<a.length;i++) {
                if (a[i] > 0)
                    sumP += a[i];
                else
                    sumM += a[i];
            }
            console.log ('сумма положительных = ',sumP );
            console.log ('сумма отрицательных = ',sumM );
            console.log (' ');
        break;
        case '8': fl = false; break;
        default: alert('Ошибка!');  break;
    } 
    if (!fl) {  break;  }
}
*/
function button0() {
    document.getElementById('oldM').innerHTML = array.join(',');
    for (var i=0;i<(array.length/2);i++) {
        var t = array[i];
        array[i] = array[array.length-1-i];
        array[array.length-1-i] = t;
    }
    for (var i=0;i<array.length;i++) {
        console.log (array[i]); 
    }
    console.log (' ');
    document.getElementById('newM').innerHTML = array.join(',');
}
function button1() {
    document.getElementById('oldM').innerHTML = array.join(',');
    for (var i=1;i<array.length;i +=2) {
        var t = array[i];
        array[i] = array[i-1];
        array[i-1] = t; 
    }
    for (var i=0;i<array.length;i++) {
        console.log (array[i]); 
    }
    console.log (' ');
    document.getElementById('newM').innerHTML = array.join(','); 
}
function button2() {
    document.getElementById('oldM').innerHTML = array.join(',');
    var min = array[0], max = array[0], imin = 0, imax = 0,t; 
            for (var i=1; i<array.length; i++ ) {
                if (array[i]<= min) {
                    min = array[i];
                    imin = i;
                }
                if (array[i]>= max) {
                    max = array[i];
                    imax = i;
                }   
            } 
            t = array[imin];
            array[imin] = array[imax];
            array[imax] = t; 
            for (var i=0;i<array.length;i++) {
                console.log (array[i]); 
            }
            console.log (' ');
            document.getElementById('newM').innerHTML = array.join(',');
}
function button3() {
    document.getElementById('oldM').innerHTML = array.join(',');
    for (var i=0;i<array.length-1;i++) {
        for (var j=0;j<array.length-1-i;j++) {
            if (array[j]>array[j+1]) {
                var t = array[j];
                array[j] = array[j+1];
                array[j+1] = t;   
            }
        } 
    }
    for (var i=0;i<array.length;i++) {
        console.log (array[i]); 
    }
    console.log (' ');
    document.getElementById('newM').innerHTML = array.join(',');
}
function button4() {
    document.getElementById('oldM').innerHTML = array.join(',');
    for (var i=0;i<array.length-1;i++) {
        for (var j=0;j<array.length-1-i;j++) {
            if (array[j]<array[j+1]) {
                var t = array[j];
                array[j] = array[j+1];
                array[j+1] = t;   
            }
        } 
    }
    for (var i=0;i<array.length;i++) {
        console.log (array[i]); 
    }
    console.log (' ');
    document.getElementById('newM').innerHTML = array.join(',');
}
function button5() {
    document.getElementById('oldM').innerHTML = array.join(',');
    var sum = 0;
    for (var i=0;i<array.length;i++) {
        sum += array[i];
    }
    console.log ('сумма = ',sum );
    console.log (' ');
    document.getElementById('newM').innerHTML = 'Сумма элементов массива = ' + sum;
}
function button6() {
    document.getElementById('oldM').innerHTML = array.join(',');
    var sumP=0,sumM=0;
    for (var i=0;i<array.length;i++) {
        if (array[i] > 0)
            sumP += array[i];
         else
             sumM += array[i];
    }
    console.log ('сумма положительных = ',sumP );
    console.log ('сумма отрицательных = ',sumM );
    console.log (' ');
    document.getElementById('newM').innerHTML = 'Сумма пол. элементов  = ' + sumP + ' Сумма отр. элементов  = ' + sumM;
}
//function print1() {
//    document.getElementById('oldM').innerHTML = array.join(',');    document.getElementById('newM').innerHTML = array.join(',');
//}
function buttonM() {
    console.log ('smenaM');
    var str = document.getElementById('inpM').value;
    array = str.split(',');
    for (var i = 0;i<array.length;i++){
        array[i] = array[i] - 0;
    }
    document.getElementById('oldM').innerHTML = array.join(',');
    document.getElementById('newM').innerHTML = '';
}


var button = []; 
button.push(document.getElementById('button0'));
button.push(document.getElementById('button1'));
button.push(document.getElementById('button2'));
button.push(document.getElementById('button3'));
button.push(document.getElementById('button4'));
button.push(document.getElementById('button5'));
button.push(document.getElementById('button6'));
button[0].addEventListener('click', button0);
button[1].addEventListener('click', button1);
button[2].addEventListener('click', button2);
button[3].addEventListener('click', button3);
button[4].addEventListener('click', button4);
button[5].addEventListener('click', button5);
button[6].addEventListener('click', button6);
var buttonV = (document.getElementById('buttonM'));
buttonV.addEventListener('click', buttonM);




/*
 case '1': 
            for (var i=0;i<(a.length/2);i++) {
                t = a[i];
                a[i] = a[a.length-1-i];
                a[a.length-1-i] = t;
            }
            for (var i=0;i<a.length;i++) {
                console.log (a[i]); 
            }
            console.log (' '); 
        break;
        case '2':  
            for (var i=1;i<a.length;i +=2) {
                t = a[i];
                a[i] = a[i-1];
                a[i-1] = t; 
            }
            for (var i=0;i<a.length;i++) {
                console.log (a[i]); 
            }
            console.log (' '); 
        break;
        case '3':
            min = a[0], max = a[0], imin = 0, imax = 0 
            for (var i=1; i<a.length; i++ ) {
                if (a[i]<= min) {
                    min = a[i];
                    imin = i;
                }
                if (a[i]>= max) {
                    max = a[i];
                    imax = i;
                }   
            } 
            t = a[imin];
            a[imin] = a[imax];
            a[imax] = t; 
            for (var i=0;i<a.length;i++) {
                console.log (a[i]); 
            }
            console.log (' ');
        break;
        case '4': 
            for (var i=0;i<a.length-1;i++) {
                for (var j=0;j<a.length-1-i;j++) {
                    if (a[j]>a[j+1]) {
                        t = a[j];
                        a[j] = a[j+1];
                        a[j+1] = t;   
                    }
                } 
            }
            for (var i=0;i<a.length;i++) {
                console.log (a[i]); 
            }
            console.log (' '); 
        break;
        case '5': 
            for (var i=0;i<a.length-1;i++) {
                for (var j=0;j<a.length-1-i;j++) {
                    if (a[j]<a[j+1]) {
                        t = a[j];
                        a[j] = a[j+1];
                        a[j+1] = t;   
                    }
                } 
            }
            for (var i=0;i<a.length;i++) {
                console.log (a[i]); 
            }
            console.log (' '); 
        break;
        case '6': 
            sum = 0;
            for (var i=0;i<a.length;i++) {
                sum += a[i];
            }
            console.log ('сумма = ',sum );
            console.log (' ');
        break;
        case '7': 
            sumP=0;sumM=0;
            for (var i=0;i<a.length;i++) {
                if (a[i] > 0)
                    sumP += a[i];
                else
                    sumM += a[i];
            }
            console.log ('сумма положительных = ',sumP );
            console.log ('сумма отрицательных = ',sumM );
            console.log (' ');
        break;
        default: alert('Ошибка!');  break;
        */


 