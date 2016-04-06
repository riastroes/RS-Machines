function Plants(){
  this.pos=[];
  this.size;
  this.plants01 = [];
}
Plants.prototype.draw = function(){
  for(var index in this.plants01){
    this.plants01[index].draw();
  }
}
/**********************************************/
function Plant01(pos){
  this.pos = pos.copy();
  this.tipr = (TWO_PI / 8)*7;
  this.tipl =(TWO_PI / 8)*5;
  this.size;
  this.i = 0;
  this.dir = 1;
}
Plant01.prototype.draw = function(){
  this.size = 140;
  var p1 = posOnCircle(this.pos, this.size, this.size, -this.i);
    var p2 = posOnCircle(this.pos, this.size, this.size, this.size/2 + this.i);
    var p3 = posOnCircle(this.pos, this.size/12, 4, 1);
    var p4 = posOnCircle(this.pos, this.size/12, 4, 3);
    var p5 = posOnCircle(this.pos, this.size/16, 4, 0);
    var p6 = posOnCircle(this.pos, this.size/16, 4, 2);
    
    
  
    this.i += this.dir * random(0.5,1);
    if(this.i > this.size/5){ this.dir = -1; };
    if(this.i < -2){ this.dir = 1; };
    
    this.tipr = ((TWO_PI / 8)*7);
    this.tipl =((TWO_PI / 8)*5);
    
    var pr = this.pos.copy();
    pr.x += this.size/2;
    pr.y -=  -this.i;
    var pl = this.pos.copy();
    pl.x -= this.size/2;
    pl.y -=  -this.i;
    
   // triangle(p3.x, p3.y, p4.x, p4.y,p1.x, p1.y);
   style.set(pal.colors[5], pal.colors[2], 1);
    arc(pr.x-this.i, pr.y, this.size,this.size/2, PI + this.i/60,this.tipr + this.i/60, OPEN);
    arc(pl.x+this.i, pl.y, this.size,this.size/2, this.tipl- this.i/60, 0-this.i/60, OPEN);
    //triangle(p3.x, p3.y, p4.x, p4.y,p2.x, p2.y);
    
    ellipse(this.pos.x,this.pos.y, this.size/8, this.size/8);
    style.set(pal.colors[5], pal.colors[2], 1);
    triangle(p6.x, p6.y, p3.x, p3.y,p5.x, p5.y);
    style.set(pal.colors[1],pal.colors[0],2);
    ellipse(p5.x, p5.y, 5, 5);
    ellipse(p6.x, p6.y, 5, 5);
}
Plant01.prototype.draw3 = function(){
  
    
    
    var pr = this.pos.copy();
    pr.x += 30;
    pr.y += 10;
    var pl = this.pos.copy();
    pl.x -= 30;
    pl.y += 10;
    
    style.set(pal.colors[4], false, 1);
    ellipse(this.pos.x, this.pos.y, 10,10);
    var s = map(sin(frameCount/0.01),-1,1, 70,80);
    style.set(pal.colors[7], pal.colors[6], 1);
    arc(pr.x, pr.y, s,s, PI,this.tipr, OPEN);
    
    arc(pl.x, pl.y, s,s, this.tipl, 0, OPEN);
    //ellipse(this.pos.x, this.pos.y, 40,40);
    style.set(pal.colors[1], pal.colors[8],5);
    point(pr.x, pr.y);
    point(pl.x, pl.y);
}
Plant01.prototype.draw2 = function(){
  
    
    
    var pr = this.pos.copy();
    pr.x += 30;
    pr.y += 10;
    var pl = this.pos.copy();
    pl.x -= 30;
    pl.y += 10;
    
    style.set(pal.colors[4], false, 1);
    ellipse(this.pos.x, this.pos.y, 10,10);
    
    style.set(pal.colors[7], pal.colors[6], 1);
    arc(pr.x, pr.y, 70,70, PI,this.tipr, OPEN);
    
    arc(pl.x, pl.y, 70,70, this.tipl, 0, OPEN);
    //ellipse(this.pos.x, this.pos.y, 40,40);
    style.set(pal.colors[1], pal.colors[8],5);
    point(pr.x, pr.y);
    point(pl.x, pl.y);
}
Plant01.prototype.draw1 = function(){
  
    ellipse(this.pos.x, this.pos.y, 20,20);
    var p = p5.Vector.add(this.pos, createVector(25,0));
    var pr = posOnCircle(p, 20, 2, 0);
    p = p5.Vector.add(this.pos, createVector(-25,0));
    var pl = posOnCircle(p, 20, 2, 1);
    
    style.set(pal.colors[4], false, 1);
    
    style.set(pal.colors[7], pal.colors[6], 1);
    arc(pr.x, pr.y, 70,70, PI,this.tipr, OPEN);
    
    arc(pl.x, pl.y, 70,70, this.tipl, 0, OPEN);
    //ellipse(this.pos.x, this.pos.y, 40,40);
    style.set(pal.colors[1], pal.colors[8],5);
    point(pr.x, pr.y);
    point(pl.x, pl.y);
}