var canvas = document.getElementById("testCanvas");
/** @type {CanvasRenderingContext2D}; */
var ctx = canvas.getContext("2d");
ctx.fillStyle = "blue";
ctx.beginPath();
ctx.arc(100, 100, 50, 0, 2 * Math.PI);
ctx.fill();
ctx.font = "20px sans-serif";
ctx.fillStyle = "black";
ctx.textAlign = "center";
ctx.fillText("Main", 100, 100);

var circLeft = canvas.offsetLeft,
    circTop = canvas.offsetTop,
    elements = [];

canvas.addEventListener("click", function(event) {
    var x = event.pageX - circLeft,
        y = event.pageY - circTop;
    console.log(x, y);
    if ( Math.pow(100-x, 2)+Math.pow(100-y, 2) < 2500 ) {
        window.open("index.html", self);
    }
}, false);

canvas.addEventListener("mousemove", function(event) {
    var x = event.pageX - circLeft,
        y = event.pageY - circTop;
    if ( Math.pow(100-x, 2)+Math.pow(100-y, 2) < 2500 ) {
        ctx.beginPath();
        ctx.arc(100, 100, 50, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.fillStyle = "black";
        ctx.fillText("Main", 100, 100);
    } else {
        ctx.beginPath();
        ctx.arc(100, 100, 50, 0, 2 * Math.PI);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.fillStyle = "black";
        ctx.fillText("Main", 100, 100);
    }
}, false);

