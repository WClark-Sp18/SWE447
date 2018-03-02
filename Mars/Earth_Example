  Texture earth;
  try {
    earth = TextureIO.newTexture(new File(dataPath("[http://www.oera.net/How2/PlanetTexs/EarthMap_2500x1250.jpg EarthMap_2500x1250.jpg]")), true);
  }
  catch (IOException e) {    
    javax.swing.JOptionPane.showMessageDialog(null, e);
  }
  GLUQuadric sphere = new GLUQuadric();
  gluQuadricDrawStyle(sphere, GLU_FILL);
  gluQuadricTexture(sphere, true);
  gluQuadricNormals(sphere, GLU_SMOOTH);
  //Making a display list
  mysphereID = glGenLists(1);
  glNewList(mysphereID, GL_COMPILE);
  earth.enable();
  earth.bind();
  gluSphere(sphere, 1000.0, 20, 20);
  earth.disable();
  glEndList();
  gluDeleteQuadric(sphere);
  //-----------------
  //and whenever you want to render, call glCallList(mysphereID)
  //to kill the display list, glDeleteLists(mysphereID, 1);
