var a = [-12,135,47,-64,38,-19,17];
var t = null, min = a[0], max = a[0], imin = 0, imax = 0,sum=0,sumP=0,sumM=0;
var fl = true;
for (var i=0;i<a.length;i++) {
    console.log (a[i]); 
    }
console.log (' ');
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


 