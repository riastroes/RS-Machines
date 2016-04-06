function Construction05(pos, gear1size, gear1sales,gear2size, gear2sales, gearsalessize, gearcolor){
  
  this.pos = pos.copy();
  
  //connectors
  this.connecttype = 2;           //potnagels, schroeven, bouten
  this.connectsize = 20;
  
  //gears
  this.gears = [];
  this.gearsalessize = gearsalessize;
  
  this.gears[0] = new Gear02(gear1size,gear1sales, this.gearsalessize,  gearcolor, this.connectsize);
  this.gears[1] = new Gear02(gear2size,gear2sales, this.gearsalessize, gearcolor, this.connectsize);
 };

Construction05.prototype.update = function(pos, speed){
  var isconnected = true;
  this.pos = pos.copy();
  //connectTo(pos, i , isconnected, connecttype, connectsize, angle);
  this.gears[0].connectTo(this.pos, 0, true, 2, 20, 0);
  this.gears[0].update(this.pos, speed);
  var c1 = createVector(this.gears[0].size/2, this.gears[0].size/2);
  var v1 = p5.Vector.sub( this.gears[0].connectors[1].v, c1);
  
  var c2 = createVector(this.gears[1].size/2, this.gears[1].size/2);
  var v2 = p5.Vector.sub( this.gears[1].connectors[1].v, c2);
  
  var v = p5.Vector.add(v1, v2);
  v.sub(createVector(this.gears[0].border/2, this.gears[0].border/2));
  
  v.rotate(this.gears[0].angle + this.gears[0].rot);
  var pos = this.gears[0].axe.copy();
  pos.add(v);
  var angle = ((TWO_PI * (this.gears[0].size/2)) / (this.gears[0].sales))/2;
  this.gears[1].connectTo(pos, 0, false, 0, 20, angle);
 // this.gears[1].update(pos, 0);
  this.gears[1].update(pos, -speed);
  //this.gears[1].update(pos, -speed * (this.gears[0].contour /this.gears[1].contour));
}
Construction05.prototype.draw = function(){
  
  
  for(var i = 0; i < this.gears.length; i +=1){
    this.gears[i].draw();
  }
  
  // style.set(pal.colors[8], false, 5);
  // var c =createVector(this.gears[0].size/2, this.gears[0].size/2);
  // var v = p5.Vector.sub(c, this.gears[0].connectors[1].v);
  // v.rotate(this.gears[0].angle +this.gears[0].rot);
  // point(this.gears[0].axe.x + v.x, this.gears[0].axe.y +v.y);
  
  // var c =createVector(this.gears[1].size/2, this.gears[1].size/2);
  // var v = p5.Vector.sub(c, this.gears[1].connectors[1].v);
  // v.rotate(this.gears[1].angle +this.gears[1].rot);
  // point(this.gears[1].axe.x + v.x, this.gears[1].axe.y +v.y);
  
};

