var canvas;
var gl;
var Mars : {
    radius : 3,
    distance : 0,
    year : 0;
    color : [ 1.0, 0.0, 0.0, 1.0 ]
  },
  var V;
  var P;
  var time = 0.0;
  var timeDelta = 0.5
  
  //---------------------------------------------------
  
  funciton init(){
      canvas = document.getElementById("webgl-canvas");
      gl = WebGLUtils.setupWebGL(canvas);
      if (!gl) { alert("WebGL initialization failed"); }
      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      gl.enable(gl.DEPTH_TEST)
      
      var planet = Mars = new Sphere();
      resize();
      window.requestAnimationFrame(render);
  }
