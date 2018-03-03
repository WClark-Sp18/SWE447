function Cone(gl, vershader, fragshader, nsides){
  vershader = "Cone-vertex-shader";
  fragshader = "Cone-fragment-shader";
  
  this.program = initShaders(gl, vershader, fragshader);
  
  if (this.Program < 0){
    alert("Error: Cone.js has failed");
    return;
  }
  
  nsides = 8;
  
  var theta = 2.0;
  var dTheta = 2.0 * Math.PI/nsides;
  
  this.positions = {numComponents:3};
  this.colors = {numComponents:3};
  
  var positions = [0.0,0.0,0.0];
  var colors = [1.0,1.0,0.0];
  
  var indices = [0];
  
  for (var i=0, i<n, ++i){
    theta = i*dTheta;
    
    positions.push(Math.cos(theta), Math.sin(theta), 0.0);
    colors.push(0.0,1.0,0.0);
    
    
    indices.push(n-i);
  }
  
  positions.push(0.0,0.0,1.0);
  colors.push(0.0,0.0,1.0);
  
  indices.push(n);
  
  this.indices = {count:indices.length};
  
  indices.push(n+1);
  
  indices = indices.concat(indices.slice(1,n+2).reverse());
  
  this.positions.buffer = gl.createBuffer();
  gl.bindBuffer( gl.ARRAY_BUFFER, this.positions.buffer );
  gl.bufferData( gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW );
  
  this.colors.buffer = gl.createBuffer();
  gl.bindBuffer( gl.ARRAY_BUFFER, this.colors.buffer );
  gl.bufferData( gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW );
  
  this.indices.buffer = gl.createBuffer();
  gl.bindBuffer( gl.ELEMENT_ARRAY_BUFFER, this.indices.buffer );
  gl.bufferData( gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW );
  
  this.positions.attributeLoc = gl.getAttribLocation( this.program, "vPosition" );
  gl.enableVertexAttribArray( this.positions.attributeLoc );
  
  this.colors.attributeLoc = gl.getAttribLocation( this.program, "vColor" );
  gl.enableVertexAttribArray( this.colors.attributeLoc );
  
  this.uniforms = {
    MV: undefined,
    P: undefined
  };
  
  this.uniforms.MV = gl.getUniformLocation(this.program, "MV");
  this.uniforms.P = gl.getUniformLocation(this.program, "P");
  this.MV = mat4();
  this.P = mat4();
  
  this.render = function () {
    gl.useProgram( this.program );
    gl.bindBuffer( gl.ARRAY_BUFFER, this.positions.buffer );
    gl.vertexAttribPointer(this.positions.attributeLoc,this.positions.numComponents,gl.FLOAT,gl.FALSE,3 * Float32Array.BYTES_PER_ELEMENT,0);
    gl.bindBuffer( gl.ARRAY_BUFFER, this.colors.buffer );
    gl.vertexAttribPointer(this.colors.attributeLoc,this.colors.numComponents,gl.FLOAT,gl.FALSE,3 * Float32Array.BYTES_PER_ELEMENT,0);
    gl.bindBuffer( gl.ELEMENT_ARRAY_BUFFER, this.indices.buffer );
    gl.uniformMatrix4fv( this.uniforms.MV, gl.FALSE, flatten(this.MV) );
    gl.uniformMatrix4fv( this.uniforms.P, gl.FALSE, flatten(this.P) );
    
    gl.drawElements( gl.TRIANGLE_FAN, this.indices.count, gl.UNSIGNED_SHORT, 0 );
    var offset = this.indices.count * 2;
    gl.drawElements( gl.TRIANGLE_FAN, this.indices.count, gl.UNSIGNED_SHORT, offset );
  };
}
