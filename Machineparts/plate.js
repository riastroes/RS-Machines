function Plate( platewidth, plateheight, platetype, platecolor, angle) {
  
  this.platewidth = platewidth;
  this.plateheight = plateheight;
  this.pgplate = createGraphics(this.platewidth, this.plateheight);
  
  this.platetype = platetype;         //0= flat, 1=border, 2=ridge
  this.platecolor = platecolor;
  this.connectors = [];
  
  
  this.angle = angle;
  this.rot = 0;
  this.center = createVector(this.platewidth/2, this.plateheight/2);
  this.axe = createVector(0,0);
  
  this.create();
};
Plate.prototype.create = function() {
  switch (true) {
    case (this.platetype == 2):
      {
        this.ridge(this.platecolor);
        break;
      }
    case (this.platetype == 1):
      {
        this.border(this.platecolor);
        break;
      }
    default:
      {
        this.flat(this.platecolor);
        break;
      }
  }
  
  this.createConnectors();
}
Plate.prototype.ridge = function(acolor) {
  style.pg(this.pgplate, pal.colors[5], false, 1);
  
  this.pgplate.rect(0, 0, this.platewidth - 1, this.plateheight - 1);
  style.pg(this.pgplate, pal.colors[6], false, 1);
  this.pgplate.rect(1, 1, this.platewidth - 3, this.plateheight - 3);
  style.pg(this.pgplate, false, acolor, 1);
  this.pgplate.rect(2, 2, this.platewidth - 4, this.plateheight - 4);
};
Plate.prototype.flat = function(acolor) {
  style.pg(this.pgplate, false, acolor, 1);
  this.pgplate.rect(1, 1, this.platewidth - 2, this.plateheight - 2);
};
Plate.prototype.border = function(acolor) {
  style.pg(this.pgplate, pal.colors[0], acolor, 1);
  this.pgplate.rect(1, 1, this.platewidth - 2, this.plateheight - 2);
};

Plate.prototype.createConnectors = function() {
  this.connectors = [];
  var s = 12;
  var w = this.platewidth;
  var h = this.plateheight;
  this.cv =[];
  
  
  if (w < s * 3){
    s = w/2;
  }
  if( h < s * 3){
    s = h/2;
  }
  
  var vw = (w/2)-s;
  var vh = (h/2)-s;
  this.cv[0] = createVector(0, 0);
  this.cv[1] = createVector(-vw, -vh);
  this.cv[2] = createVector(vw, -vh);
  this.cv[3] = createVector(-vw, vh);
  this.cv[4] = createVector(vw, vh);
  
  //Connector( pos, size, type, isconnected)
  var c = this.center.copy();
  c.add(this.cv[0]);
  append(this.connectors, new Connector(c, s, 0, false));
  c = this.center.copy();
  c.add(this.cv[1]);
  append(this.connectors, new Connector(c, s, 0, false));
  c = this.center.copy();
  c.add(this.cv[2]);
  append(this.connectors, new Connector(c, s, 0, false));
  c = this.center.copy();
  c.add(this.cv[3]);
  append(this.connectors, new Connector(c, s, 0, false));
  c = this.center.copy();
  c.add(this.cv[4]);
  append(this.connectors, new Connector(c, s, 0, false));
  
}
Plate.prototype.getPos = function(connectori){
  // var pos = p5.Vector.add(this.center, this.cv[connectori]);
  // var v = this.cv[connectori];
  // v.rotate(this.angle + this.rot);
  // var pos = p5.Vector.add(this.center, v);
  // return pos;
  var v1 = this.v.copy();
  v1.rotate(this.angle + this.rot);
  var tocenter = p5.Vector.sub(this.axe, v1);
  
  var v = this.cv[connectori].copy();
  v.rotate(this.angle + this.rot);
  var pos = p5.Vector.add(tocenter, v);
  return pos;
}
Plate.prototype.connectTo = function(pos, i , isconnected, connecttype, connectsize, r){
  
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
  this.connectors[i].draw(this.pgplate);
    
}

Plate.prototype.connect = function(aplate, aplatei, i, isconnected, connecttype, connectsize, r) {
  
  //waar zit het volgende punt op aplate
  var pos = aplate.center.copy();       //pak het center abs
  var to = aplate.cv[aplatei].copy();
  to.rotate(aplate.angle + aplate.rot);
  pos.add(to);
   
  this.connectTo(pos, i , isconnected, connecttype, connectsize, r )

};

Plate.prototype.showConnectors = function(isconnected, type, size){
  for(var index in this.connectors){
    this.connectors[index].connected = isconnected;
    this.connectors[index].type = type;
    this.connectors[index].size = size;
    this.connectors[index].draw(this.pgplate);
  }
};
Plate.prototype.showConnector = function(index,isconnected, type,size){
  this.connectors[index].connected = isconnected;
  this.connectors[index].type = type;
  this.connectors[index].draw(this.pgplate);
};

Plate.prototype.draw = function(pg) {
  
  push();
    translate(this.axe.x,this.axe.y);
    rotate(this.angle + this.rot);
    
    if(pg){
      pg.imageMode(CENTER);
      pg.image(this.pgplate, -this.v.x, -this.v.y);
    }
    else{
      imageMode(CENTER);
      image(this.pgplate, -this.v.x, -this.v.y);
    }
  pop();
  
};