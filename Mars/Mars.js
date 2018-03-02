// Mars.js
var canvas;
var gl;
var V;
var P;
var near = 10;
var far = 220;
var time  = 0.0;
var time Delta = 0.5;
var Planet = [
  Mars: undefined
];
//----------------------------------------------
function init(){
  canvas = document.getElementById("webgl-canvas");
  
  gl = WebGLUtils.setupWebGL(canvas);
  if (!gl) {alert("WebGL initialization failed")};
  gl.clearColor(0.0,0.0,0.0,1.0);
  gl.enable(gl.DEPTH_TEST);
  
  for (var name in Planet){
    var planet = Planet[name] = newSphere();
    planet.uniforms = { 
      color : gl.getUniformLocation(planet.program, "color"),
      MV : gl.getUniformLocation(planet.program, "MV"),
      P : gl.getUniformLocation(planet.program, "P"),
    };
  };
  
  resize();
  
  window.requestAnimationFrame(render);
}
//--------------------------------------------
function render() {
  time += timeDelta;

  var ms = new MatrixStack();
  var rotAxis = [0, 1, 0.5];

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  
