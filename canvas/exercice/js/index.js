var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

context.fillstyle = '#333';
context.fillRect(20, 20, 600, 600);
context.strokeStyle = '#FFF';

context.strokeStyle = '#999';
context.lineWidth = 5;
context.setLineDash([20, 20]);
context.lineDashOffset = 10;


context.beginPath();
context.moveTo(220, 20);
context.lineTo(220, 620);
context.stroke();
context.closePath();

context.beginPath();
context.moveTo(420, 20);
context.lineTo(420, 620);
context.stroke();
context.closePath();

context.beginPath();
context.moveTo(20, 220);
context.lineTo(620, 220);
context.stroke();
context.closePath();

context.beginPath();
context.moveTo(20, 420);
context.lineTo(620, 420);
context.stroke();
context.closePath();


function rond(x, y){

    context.setLineDash([])
    context.beginPath();
    context.arc(x, y, 80, 0, Math.PI*2, true);
    context.stroke();

}

function croix(x, y){

    context.setLineDash([])
    context.beginPath();
    context.moveTo(x-80, y+80);
    context.lineTo(x+80, y-80);
    context.stroke();

    context.beginPath();
    context.moveTo(x-80, y-80);
    context.lineTo(x+80, y+80);
    context.stroke();
}

for (var i = 0; i < 3; i++){
    
    
    for ( var j = 0; j < 3; j++){

        rond((200 * i) + 120, (200 * j) + 120);
        croix((200 * i) + 120, (200 * j) + 120);

    }
}