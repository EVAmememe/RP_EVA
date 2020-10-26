function Graph (options) {
    options = options || {};

    var id = options.id;
    var width = options.width || 300;
    var height = options.height || 300;
    var WINDOW = options.WINDOW || {};
    var canvas;
    if (id) {
        canvas = document.getElementById(id);
    } else {
        canvas = document.createElement('canvas');
        document.querySelector('body').appendChild(canvas);
    }
    canvas.width = width;
    canvas.height = height;
    var context = canvas.getContext('2d');

    function xs(x) {
        return (x-WINDOW.LEFT)/WINDOW.WIDTH*canvas.width;
    }
    
    function ys(y) {
        return canvas.height - (y-WINDOW.BOTTOM)/WINDOW.HEIGHT*canvas.height;
    }

    this.clear = function() {
        context.fillStyle = '#EEE';
        context.fillRect(0,0,canvas.width,canvas.height);
    }

    this.line = function(x1,y1,x2,y2,color,width) {
        //console.log(xs(x1),' ',ys(y1),xs(x2),' ',ys(y2));
        context.beginPath();
        context.strokeStyle = color || '#0F0';
        context.lineWidth = width || 2;
        context.moveTo(xs(x1),ys(y1));
        context.lineTo(xs(x2),ys(y2));
        context.stroke();    
    }

    /*this.printOXY = function() {
        //console.log(xs(WINDOW.LEFT),' ',ys(0),' ',xs(WINDOW.LEFT+WINDOW.HEIGHT),' ',ys(0));
        context.beginPath();
        context.strokeStyle = '#0F0';
        context.lineWidth =  2;
        //гориз
        context.moveTo( xs(WINDOW.LEFT) , ys(0) );
        context.lineTo(xs(WINDOW.LEFT+WINDOW.HEIGHT),ys(0));
        //верт
        context.moveTo( xs(0) , ys(WINDOW.BOTTOM) );
        context.lineTo(xs(0),ys(WINDOW.BOTTOM+WINDOW.WIDTH));

        context.moveTo( xs(0),ys(WINDOW.BOTTOM+WINDOW.WIDTH) );
        context.lineTo(xs(0)+5,ys(WINDOW.BOTTOM+WINDOW.WIDTH)+5);
        context.moveTo( xs(0),ys(WINDOW.BOTTOM+WINDOW.WIDTH) );
        context.lineTo(xs(0)-5,ys(WINDOW.BOTTOM+WINDOW.WIDTH)+5);
        
        context.moveTo( xs(WINDOW.LEFT+WINDOW.HEIGHT),ys(0) );
        context.lineTo(xs(WINDOW.LEFT+WINDOW.HEIGHT)-5,ys(0)-5);
        context.moveTo( xs(WINDOW.LEFT+WINDOW.HEIGHT),ys(0) );
        context.lineTo(xs(WINDOW.LEFT+WINDOW.HEIGHT)-5,ys(0)+5);

        var ny = WINDOW.LEFT;
        var nx = WINDOW.BOTTOM;
        while (ny<WINDOW.LEFT+WINDOW.HEIGHT) {
            context.moveTo( xs(ny) , ys(0) +5);
            context.lineTo(xs(ny),ys(0)-5); 
            ny++;
        }
        while (nx<WINDOW.BOTTOM+WINDOW.WIDTH) {
            context.moveTo( xs(0)-5 , ys(nx));
            context.lineTo(xs(0)+5,ys(nx)); 
            nx++;
        }

        context.stroke();    
    }*/

    this.text  = function(text,x,y,align,color) {
        console.log(text,' ',xs(x),' ',ys(y));
        context.fillStyle = color || '#000';
        context.textAlign = align || "start" ;
        context.font = 'bold 6pt Arial';
        context.fillText(text, xs(x) , ys(y)-2);
    }



}