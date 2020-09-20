var r = 150 ,x = 3,y = 6,x1 = 4,y1 = 6;
r = prompt('Введи R') - 0;
x = prompt('Введи X') - 0;
y = prompt('Введи Y') - 0;                                                   
//Фон 
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.fillStyle = 'yellow';
context.fillRect( 0 , 0 , canvas.width , canvas.height);
//Система координат 
context.beginPath();
context.strokeStyle = 'green';
context.moveTo((canvas.width/2), 0);
context.lineTo((canvas.width/2), (canvas.height));
context.moveTo(0, (canvas.height/2));
context.lineTo((canvas.width), (canvas.height/2));
context.stroke();
//Круг
context.beginPath();
context.strokeStyle = 'black';
context.arc((canvas.width/2) , (canvas.height/2), r , 0, 2*Math.PI);
context.stroke();
//Квадрат
context.beginPath();
context.strokeStyle = 'black';
context.strokeRect((canvas.width/2) - r , (canvas.height/2) - r, 2*r, 2*r);
//Ромб
context.beginPath();
context.strokeStyle = 'black';
context.moveTo((canvas.width/2) - r, (canvas.height/2));
context.lineTo((canvas.width/2), (canvas.height/2) - r);
context.lineTo((canvas.width/2) + r, (canvas.height/2));
context.lineTo((canvas.width/2), (canvas.height/2) + r);
context.lineTo((canvas.width/2) - r, (canvas.height/2) );
context.stroke();
//Хрень
context.beginPath();
context.strokeStyle = 'black';
context.arc((canvas.width/2)-r , (canvas.height/2)-r, r, 0, Math.PI/2 , false);
context.arc((canvas.width/2)+r , (canvas.height/2)-r, r, Math.PI , Math.PI/2 , true);
context.arc((canvas.width/2)+r , (canvas.height/2)+r, r, Math.PI , Math.PI*(3/2) , false);
context.arc((canvas.width/2)-r , (canvas.height/2)+r, r, 0, Math.PI*(3/2) , true);
context.stroke();
//Точка
context.beginPath();
context.fillStyle = 'red';
context.strokeStyle = 'red';
context.arc( (canvas.width/2) + x , (canvas.height/2)-y, 5, 0, 2*Math.PI);
context.fill();

    
if (isNaN(x)|| isNaN(y)) {
    alert('Введены нечисленые значения!');
} else {
/*//стреляем в круг
        if (Math.sqrt(x*x+y*y) <=r ) {
            alert('Попал!');
        } else {
            alert('Промазал!');
        } */
/*//стреляем в квадрат
        if (Math.abs(x)<=a && Math.abs(y)<=a ) {
            alert('Попал!');
        } else {
            alert('Промазал!');
        } */
/*//стреляем в ромб
        if (a*Math.abs(x)+ b*Math.abs(y)<=a*b ) {
            alert('Попал!');
        } else {
            alert('Промазал!');
        }*/
/*//стреляем в прямоугольник
        if (Math.abs(x)<=a && Math.abs(y)<=b ) {
            alert('Попал!');
        } else {
            alert('Промазал!');
        } */
/*//стреляем в хрень
        if (Math.sqrt((Math.abs(x)-1)*(Math.abs(x)-1)+ (Math.abs(y)-1)*(Math.abs(y)-1)) >=r && Math.abs(x)<=r && Math.abs(y)<=r ) {
            alert('Попал!');
        } else {
            alert('Промазал!');
        }*/
 //стреляем во все
    if (Math.sqrt((Math.abs(x)-r)*(Math.abs(x)-r)+ (Math.abs(y)-r)*(Math.abs(y)-r)) >=r && Math.abs(x)<=r && Math.abs(y)<=r ) {
        alert('Попал в хрень!(10 очков)');
    } else if (Math.abs(x)+ Math.abs(y)<=r ){
        alert('Попал в ромб!(5 очков)');
    } else if (Math.sqrt(x*x+y*y) <=r ) {
        alert('Попал в круг!(3 очка)');
    } else if (Math.abs(x)<=r && Math.abs(y)<=r ) {
        alert('Попал в квадрат!(1 очко)');
    } else {
        alert('Промазал!(о очков)')  
    } 
}
    