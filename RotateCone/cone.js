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
  canvas = document.getElementById("webgl-canvas");
  gl = WebGLUtils.setupWebGL(canvas);
  
  if (!gl){
    alert("Unable to setup WebGL");
    return;
  }
  
  canvas.onmousedown = function handleMouseDown(event) {
        mouseDown = true;
        lastMouseX = event.clientX;
        lastMouseY = event.clientY;
    }
  
  document.onmouseup = function handleMouseUp(event) {
        mouseDown = false;
        if (stoprotating) dAngle = 0.0;
        return;
    }
  
  document.onmousemove = function handleMouseMove(event) {
		if (!mouseDown) {
		  if(stoprotating) dAngle = 0.0;
		  return;
		}
		var newX = event.clientX;
		var newY = event.clientY;

		var deltaX = newX - lastMouseX;
		var deltaY = newY - lastMouseY;
		dAngle = degToRad(deltaX + deltaY) * Math.PI * 5;
		lastMouseX = newX;
		lastMouseY = newY;
    }
  
  gl.clearColor( 0.0, 0.0, 0.0, 1.0 );
  gl.enable(gl.DEPTH_TEST);

  cone = new Cone(gl);
  resize();
	
  window.requestAnimationFrame(render);
}
