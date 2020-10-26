function f(x) {

    return  Math.log(x);
}

function g(x) {
    return Math.sin(x);
}

window.onload = function () {
    var WINDOW = {
        LEFT: -20,
        BOTTOM: -20,
        WIDTH: 40,
        HEIGHT: 40,
    }
    var graph = new Graph({
        id: 'canvas', width: 600, height: 600, WINDOW: WINDOW
    });

    function printOXY() {
        var long = 0.2;
        //Ox
        graph.line(WINDOW.LEFT, 0, WINDOW.LEFT + WINDOW.WIDTH, 0, 'black', 1);
        graph.line(WINDOW.LEFT + WINDOW.WIDTH, 0, WINDOW.LEFT + WINDOW.WIDTH - long, -long, 'black', 1);
        graph.line(WINDOW.LEFT + WINDOW.WIDTH, 0, WINDOW.LEFT + WINDOW.WIDTH - long, long, 'black', 1);
        for (var i = 1; i < WINDOW.LEFT + WINDOW.WIDTH; i++) {
            if (i%10 === 0) {
                graph.line(i, 2*long, i, -2*long, 'black', 3);
                graph.text( i , i, 2*long,'center');
            } else if (i%5 === 0) {
                graph.line(i, 1.5*long, i, -1.5*long, 'black', 2);
                graph.text( i , i, 1.5*long,'center');
            } else {
                graph.line(i, long, i, -long, 'black', 2);
                graph.text( i , i, long,'center');
            }
        }
        for (var i = -1; i > WINDOW.LEFT; i--) {
            if (i%10 === 0) {
                graph.line(i, 2*long, i, -2*long, 'black', 3);
                graph.text( i , i, 2*long,'center');
            } else if (i%5 === 0) {
                graph.line(i, 1.5*long, i, -1.5*long, 'black', 2);
                graph.text( i , i, long,'center');
            } else {
                graph.line(i, long, i, -long, 'black', 2);
                graph.text( i , i, long,'center');
            }
        }
        //Oy
        graph.line(0, WINDOW.BOTTOM, 0, WINDOW.BOTTOM + WINDOW.HEIGHT, 'black', 1);
        graph.line(0, WINDOW.BOTTOM + WINDOW.HEIGHT, long, WINDOW.BOTTOM + WINDOW.HEIGHT - long, 'black', 1);
        graph.line(0, WINDOW.BOTTOM + WINDOW.HEIGHT, -long, WINDOW.BOTTOM + WINDOW.HEIGHT - long, 'black', 1);
        for (var i = 1; i < WINDOW.BOTTOM + WINDOW.HEIGHT; i++) {
            if (i%10 === 0) {
                graph.line( 2*long, i, -2*long, i, 'black', 3);
                graph.text( i , 2*long, i);
            } else if (i%5 === 0) {
                graph.line(1.5*long, i, -1.5*long, i, 'black', 2);
                graph.text( i , 1.5*long, i);
            } else {
                graph.line(long, i, -long, i, 'black', 2);
                graph.text( i , long, i);
            }
        }
        for (var i = -1; i > WINDOW.BOTTOM; i--) {
            if (i%10 === 0) {
                graph.line(2*long, i, -2*long, i, 'black', 3);
                graph.text( i , 2*long, i);
            } else if (i%5 === 0)  {
                graph.line(1.5*long, i, -1.5*long, i, 'black', 2);
                graph.text( i , 1.5*long, i);
            } else {
                graph.line(long, i, -long, i, 'black', 2);
                graph.text( i , long, i);
            }
        }

        graph.text( 0 , long , long);
    }

    function printFunction(f,color,width) {
        var x = WINDOW.LEFT;
        var dx = WINDOW.WIDTH / 1000;
        while (x < WINDOW.WIDTH + WINDOW.LEFT) {
            if (1) {
                graph.line(x, f(x), x + dx, f(x + dx), color, width);
            }
            x += dx;
        }
    }


    function render() {
        graph.clear();
        printFunction(f,'#0F0',2);
        printFunction(g,'#F00',3);
        printOXY();
    }

    render();

}