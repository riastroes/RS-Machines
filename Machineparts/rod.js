function Rod( len, thickness, lightcolor, darkcolor, angle) {
  
  this.len = len;
  this.thickness = thickness;
  
  this.lightcolor = lightcolor;
  this.darkcolor = darkcolor;
  this.angle = angle;
  this.axe;
  this.center = createVector(this.len/2,this.thickness/2);
  this.rot = 0;
  this.connectors = [];
  this.cv = [];
  this.v;
  this.pgrod = createGraphics(this.len, this.thickness);
  this.create();
};
Rod.prototype.create = function() {
  
  for(var y = 0; y < this.thickness; y += 1){
    var acolor = lerpColor(this.lightcolor, this.darkcolor, y/this.thickness);
    style.pg(this.pgrod, acolor, false, 1);
    this.pgrod.rectMode(CORNER);
    this.pgrod.line(this.thickness,y, this.len - this.thickness,y);
  }
  
  this.createConnectors();
  this.showConnector(1,true,2,12);
};

Rod.prototype.createConnectors = function() {
  
  var s = this.thickness;
  var l = (this.len / 2) -s;
  
  
  this.cv[0] = createVector(0, 0);
  this.cv[1] = createVector(-l, 0);
  this.cv[2] = createVector(l, 0);
  
  
  //Connector(pos, size, type, isconnected)
  c = p5.Vector.add(this.center,this.cv[0]);
  append(this.connectors, new Connector(c, s, 0, true));
  c = p5.Vector.add(this.center,this.cv[1]);
  append(this.connectors, new Connector(c, s, 0, true));
  c = p5.Vector.add(this.center,this.cv[2]);
  append(this.connectors, new Connector(c, s, 0, true));
}
Rod.prototype.getPos = function(connectori){
  var v1 = this.v.copy();
  v1.rotate(this.angle + this.rot);
  var tocenter = p5.Vector.sub(this.axe, v1);
  
  
  var v = this.cv[connectori].copy();
  v.rotate(this.angle + this.rot);
  var pos = p5.Vector.add(tocenter, v);
  return pos;
}
Rod.prototype.connectTo = function(pos, i , isconnected, connecttype, connectsize, r){
  
  this.axe = pos.copy();                            //pos is an absolute position
  this.v = this.cv[i].copy();
  this.rot += r;
  //waar zit het centrum?
  this.center = this.axe.copy();
  var tocenter = this.cv[i].copy();
  tocenter.rotate(this.angle + this.rot);
  this.center.sub(tocenter);
  
  
   
  this.connectors[i].connected = isconnected;
  this.connectors[i].type = connecttype;
  this.connectors[i].size = connectsize;
  this.connectors[i].draw(this.pgrod);
    
}

Rod.prototype.showConnectors = function(isconnected, type, size){
  
  for(var index in this.connectors){
    this.connectors[index].connected = isconnected;
    this.connectors[index].type = type;
    this.connectors[index].size = size;
    this.v = p5.Vector.add(this.center, this.cv[index])
    this.pgrod.image(this.connectors[index].getPg(),this.v.x, this.v.y);
  }
};
Rod.prototype.showConnector = function(index,isconnected, type,size){
  this.connectors[index].connected = isconnected;
  this.connectors[index].type = type;
  this.v = p5.Vector.add(this.center, this.cv[index])
  this.pgrod.image(this.connectors[index].getPg(),this.v.x, this.v.y);

};

Rod.prototype.draw = function(pg) {
  
  push();
    translate(this.axe.x,this.axe.y);
    rotate(this.angle + this.rot);
    
    if(pg){
      pg.imageMode(CENTER);
      pg.image(this.pgrod, -this.v.x, -this.v.y);
    }
    else{
      
      imageMode(CENTER);
      image(this.pgrod, -this.v.x, -this.v.y);
    }
  pop();
  
};