var gl = null;
var cone = null;

function init() {
    var canvas = document.getElementById( "webgl-canvas" );

    gl = WebGLUtils.setupWebGL( canvas );

    if ( !gl ) {
        alert("Unable to setup WebGL");
        return;
    }

    gl.clearColor( 0.25, 0.45, 0.75, 1.0 );
	
    /*var program = initShaders(
	    gl,
	    "Cone-vertex-shader",
	    "Cone-fragment-shader");
    
    gl.useProgram(program);*/
	
    cone = new Cone( 100 );

    render();
}

function render() {
    gl.clear( gl.COLOR_BUFFER_BIT );
    cone.render();
}



window.onload = init;
