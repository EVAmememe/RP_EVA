var r = 300 ,x = 0,y = 0,x1 = 0,y1 = 0,x_st,y_st;                                            
//Фон 
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.fillStyle = 'grey';
context.fillRect( 0 , 0 , canvas.width , canvas.height );
//Система координат 
context.beginPath();
context.strokeStyle = 'green';
context.moveTo( (canvas.width/2) , 0);
context.lineTo( (canvas.width/2) , (canvas.height) );
context.moveTo( 0 , (canvas.height/2));
context.lineTo( (canvas.width) , (canvas.height/2) );
context.stroke();
x1 = prompt('Введи X центра мишени') - 0; 
y1 = prompt('Введи Y центра мишени') - 0;
x2 = x1 - 0 + (canvas.width/2); 
y2 =  (canvas.height/2) - y1  - 0; 
r = prompt('Введи R мишени') - 0;
x = prompt('Введи X выстрела') - 0;
y = prompt('Введи Y выстрела') - 0;   
x_st = x;
y_st = y;
//Круг
context.beginPath();
context.fillStyle = 'white';
context.arc( x2 , y2 , r , 0 , 2*Math.PI );
context.fill(); 

context.beginPath();
context.fillStyle = 'black';
context.arc( x2 , y2 , r*0.8 , 0 , 2*Math.PI );
context.fill();
     
context.beginPath();
context.fillStyle = 'blue';
context.arc( x2 , y2 , r*0.6 , 0 , 2*Math.PI );
context.fill();

context.beginPath();
context.fillStyle = 'red';
context.arc( x2 , y2 , r *0.4 , 0 , 2*Math.PI );
context.fill();

context.beginPath();
context.fillStyle = 'yellow';
context.arc( x2 , y2 , r*0.2 , 0 , 2*Math.PI );
context.fill();

context.beginPath(); 
context.strokeStyle = 'black';
context.arc( x2 , y2 , r*0.9 , 0 , 2*Math.PI );
context.stroke();

context.beginPath(); 
context.strokeStyle = 'white';
context.arc( x2 , y2 , r*0.7 , 0 , 2*Math.PI );
context.stroke();

context.beginPath();
context.strokeStyle = 'black';
context.arc( x2 , y2 , r*0.5 , 0 , 2*Math.PI );
context.stroke(); 

context.beginPath();
context.strokeStyle = 'black';
context.arc( x2 , y2 , r*0.3 , 0 , 2*Math.PI );
context.stroke(); 

context.beginPath();
context.strokeStyle = 'black';
context.arc( x2 , y2 , r*0.1 , 0 , 2*Math.PI );
context.stroke(); 

context.beginPath();
context.strokeStyle = 'black';
context.arc( x2 , y2 , r*0.05 , 0 , 2*Math.PI );
context.stroke(); 

context.beginPath();
context.strokeStyle = 'black';
context.fillStyle = 'black';
context.arc( x2 , y2 , 1 , 0 , 2*Math.PI );
context.fill(); 
//Стрела
var img = new Image();
img.src = "https://pngimg.com/uploads/arrow_bow/arrow_bow_PNG19.png";
img.onload = function() {
	context.drawImage( img , (canvas.width/2)+x_st, (canvas.height/2)-y_st,r*0.66,r*0.55);
};
//Точка
//context.drawImage(img, 10, 10);
context.beginPath();
context.fillStyle = 'pink';
context.strokeStyle = 'pink';
context.arc( (canvas.width/2) + x , (canvas.height/2) - y , 3 , 0 , 2*Math.PI );
context.fill();
//стреляем в круг
x = x - x1;
y = y - y1;
if  ( Math.sqrt(x*x+y*y) <= r*0.05 ) {
    alert('Попал! 10 очков(X)');
} else if ( Math.sqrt(x*x+y*y) <= r*0.1 ) {
    alert('Попал! 10 очков');    
} else if ( Math.sqrt(x*x+y*y) <= r*0.2 ) {
    alert('Попал! 9 очков');  
} else if ( Math.sqrt(x*x+y*y) <= r*0.3 ) {
    alert('Попал! 8 очков');  
} else if ( Math.sqrt(x*x+y*y) <= r*0.4 ) {
    alert('Попал! 7 очков');  
} else if ( Math.sqrt(x*x+y*y) <= r*0.5 ) {
    alert('Попал! 6 очков');  
} else if ( Math.sqrt(x*x+y*y) <= r*0.6 ) {
    alert('Попал! 5 очков');  
} else if ( Math.sqrt(x*x+y*y) <= r*0.7 ) {
    alert('Попал! 4 очка');  
} else if ( Math.sqrt(x*x+y*y) <= r*0.8 ) {
    alert('Попал! 3 очка');  
} else if ( Math.sqrt(x*x+y*y) <= r*0.9 ) {
    alert('Попал! 2 очка');  
} else if ( Math.sqrt(x*x+y*y) <= r ) {
    alert('Попал! 1 очко'); 
} else  {
    alert('Промах! 0 очков');  
}

