function Polygon(pos, maxcorners, size, rot){
  this.pos = pos.copy();
  this.maxcorners = maxcorners;
  this.corners = [];
  this.size = size;
  this.rot = rot; //radians 0 - TWO_PI
  this.pg = createGraphics(this.size*2,this.size*2);
  this.create();
  this.strokecolor;
  this.fillcolor;
  this.strokeweight;
}
Polygon.prototype.create = function(){
  
  for(var c = 0; c < this.maxcorners; c++){
    var pgcenter =createVector((this.size/2),(this.size/2));
    var pos = posOnCircle(pgcenter, this.size, this.maxcorners, c);
    pos.add(pgcenter);
    append(this.corners, pos);
  }
  this.drawpg();
}
Polygon.prototype.style = function(strokecolor, fillcolor, strokeweight){
  if((strokecolor != this.strokecolor)||
      (fillcolor != this.fillcolor)||
      (strokeweight != this.strokeweight)){
    this.strokecolor = strokecolor;
    this.fillcolor = fillcolor;
    this.strokeweight = strokeweight;
    style.pg(this.pg, strokecolor, fillcolor, strokeweight);
    this.drawpg();
  }
}
Polygon.prototype.drawpg = function(){
  this.pg.beginShape();
      for(var i = 0; i < this.maxcorners; i +=1){
        this.pg.vertex(this.corners[i].x, this.corners[i].y);
      }
  this.pg.endShape(CLOSE);
  
}
Polygon.prototype.drawOnPg = function(pg, pos){
  pg.imageMode(CENTER);
  pg.image(this.pg, pos.x, pos.y);
}
Polygon.prototype.draw = function(){
   push();
    translate(this.pos.x, this.pos.y);
    rotate(this.rot);
    style.image(CENTER);
    image(this.pg, 0,0);
  pop();
}