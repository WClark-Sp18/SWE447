var cone;
var canvas;
var gl;

var near = 10.0;
var far = 100.0;

var M;
var V;

var angle;
var dAngle;

var mouseDown = false;
var lastMouseX = null;
var lastMouseY = null;

var zvalue = -0.5*(near + far);
var offset = [ 0.0,  0.0, 0.0 ];
var rotationAxis = undefined;
var xAxis = [1, 0, 0];
var yAxis = [0, 1, 0];
var speed = 1;
var stoprotating = 0;

function init(){
}
