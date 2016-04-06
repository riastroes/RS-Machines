function Gear( size, spokes,  gearcolor, connectsize) {
  this.size = size;
  this.pggear = createGraphics( this.size, this.size);
  this.imggear = createImage( this.size, this.size);
  this.bgcolor = pal.colors[1]; //pal.transparent;
  this.pos = createVector(this.size/2, this.size/2);
  this.connectors = [];
  this.axe;
  this.spokes = spokes;
  this.gearcolor = gearcolor;
  this.angle = 0;
  this.rot = 0;
  this.connectsize = connectsize;
  
  this.contour = PI * this.size;
  this.border = (this.contour / ( this.spokes * 2)) /2; 
  
  this.create();
}
Gear.prototype.create = function(){
  
  this.connectors[0] = new Connector(this.pos, this.connectsize, 1, true);
  for(var i = 1; i <= this.spokes; i += 1){
    var pos = posOnCircle(this.pos, (this.size/2), this.spokes, i);
    this.connectors[i] = new Connector(pos, this.connectsize, 1, true);
  }
  this.imggear.loadPixels();
  for(var y = 0; y < this.size; y += 1){
    for(var x = 0; x < this.size; x += 1){
      var distopos = dist(x,y, this.pos.x, this.pos.y);
      if(distopos < this.size/2){
        //on the circle
        var disttospoke = this.size / this.spokes;
        var found = false;
        for(var i = 1; i <= this.spokes; i += 1){
          var d = dist(x,y, this.connectors[i].v.x, this.connectors[i].v.y)
          if(d < disttospoke){
            found = true;
            break;
          }
        }
        if(!found){
          this.imggear.set(x,y,color(this.gearcolor));
        }
      }
    }
  }
  this.imggear.updatePixels();
  this.pggear.image(this.imggear,0,0);
}

Gear.prototype.connectTo = function(pos, i , isconnected, connecttype, connectsize, angle){
  
  this.axe = pos.copy();   
  this.center = createVector(this.size/2, this.size/2)   // center is relative
  this.v = this.connectors[i].v.copy();
  this.center.sub(this.v);
  
  this.angle = angle;
  //waar zit het centrum?
  // this.center = this.axe.copy();
  // var tocenter = this.connectors[i].v.copy();
  // tocenter.rotate(this.angle + this.rot);
  // this.center.add(tocenter);
  
  
   
  this.connectors[i].connected = isconnected;
  this.connectors[i].type = connecttype;
  this.connectors[i].size = connectsize;
  imageMode(CENTER);
  this.connectors[i].draw(this.pggear);
    
}
Gear.prototype.update = function(pos, speed){
  this.axe = pos.copy();
  this.connectTo(pos, 0, true, 2, 20, 0);
  this.rot += speed;
}
Gear.prototype.draw = function(pg, pos){
  if(pg){
    push();
      pg.translate(pos.x, pos.y);
      //pg.rotate(this.angle + this.rot);
      pg.imageMode(CENTER);
      pg.image(this.pggear, 0,0);
    pop();
  }
  else{
    push();
      translate(this.axe.x, this.axe.y);
      rotate(this.angle + this.rot);
      imageMode(CENTER);
      image(this.pggear, 0,0);
    pop();
  }
  
  
}