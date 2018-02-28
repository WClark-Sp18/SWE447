// Mars.js

var V;
var P;
var near = 10;
var far = 220;
var time  = 0.0;
var time Delta = 0.5;
//----------------------------------------------
function init(){
  canvas = document.getElementById("webgl-canvas");
  
  gl = WebGLUtils.setupWebGL(canvas);
  if (!gl) {alert("WebGL initialization failed")};
  gl.clearColor(0.0,0.0,0.0,1.0);
  gl.enable(gl.DEPTH_TEST);
  
  var mars = new Sphere();
  
  resize();
  
  window.requestAnimationFrame(render);
}
//--------------------------------------------
function render() {
  time += timeDelta;

  var ms = new MatrixStack();
  var rotAxis = [0, 1, 0.5];

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  
