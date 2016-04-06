function Birds(){
  this.seagulls = [];
}
Birds.prototype.fly = function(){
  for(var index in this.seagulls){
    this.seagulls[index].fly();
  }
}
Birds.prototype.draw = function(){
  for(var index in this.seagulls){
    this.seagulls[index].draw();
  }
}
Birds.prototype.create = function(pos){
  append(this.seagulls, new Seagull(pos));
}
/*********************/
function Seagull(pos){
  this.pos = pos.copy();
  this.size = 0;
  this.f = random(50);
  this.i = 0;
  this.dir = 1;
  this.livetime = 0;
  this.land = false;
  this.img = img[randomInt(11,15)];
  this.r = random(-PI/2, PI/2);
  this.t;
  
}
Seagull.prototype.fly = function(){
  if(!this.land){
    
    
    this.pos.x = this.pos.x + map(noise(this.f), 0, 1, -9, 10);
    this.pos.x = constrain(this.pos.x, 0, width);
    this.pos.y = this.pos.y + map(sin(this.f), -1, 1, -10, 10);
    this.pos.y = constrain(this.pos.y, 0, height);
    this.f += 0.1;
    this.livetime += 1;
    for(var i = 7; i< landscape.elements.length; i +=1){
      var elem = landscape.elements[i];
      if(!elem.isoccupied && dist(this.pos.x, this.pos.y, elem.livetop.x, elem.livetop.y ) < this.size){
        this.land = true;
        this.t = i;
        this.pos = elem.livetop.copy();
        elem.isoccupied = true;
        sound[randomInt(2,4)].play();
      }
    }
  }
  
}
Seagull.prototype.draw = function(){
  if(!this.land){
    this.r = map(this.pos.y, 0, height, -PI/2, PI/2);
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.r);
  
  this.size = map(this.pos.y, height, 0, 0, this.livetime/10);
  this.size = constrain(this.size,0,70);
  
  style.set(false, pal.colors[9], 1);
  var p = createVector(0,0);
  //for(var i = 0; i < this.size; i += 1){
    var p1 = posOnCircle(p, this.size, this.size, this.i);
    var p2 = posOnCircle(p, this.size, this.size, this.size/2 - this.i);
    var p3 = posOnCircle(p, this.size/6, 4, 1);
    var p4 = posOnCircle(p, this.size/6, 4, 3);
    var p5 = posOnCircle(p, this.size/12, 4, 0);
    var p6 = posOnCircle(p, this.size/12, 4, 2);
    
    
    this.i += 1;
    // this.i += this.dir * random(0.5,1);
    // if(this.i > this.size/5){ this.dir = -1; };
    // if(this.i < -2){ this.dir = 1; };
    
    triangle(p3.x, p3.y, p4.x, p4.y,p1.x, p1.y);
    triangle(p3.x, p3.y, p4.x, p4.y,p2.x, p2.y);
    
    ellipse(p.x,p.y, this.size/4, this.size/4);
    style.set(pal.colors[5], pal.colors[2], 1);
    triangle(p6.x, p6.y, p3.x, p3.y,p5.x, p5.y);
    style.set(false,pal.colors[0],2);
    ellipse(p5.x, p5.y, 5, 5);
    ellipse(p6.x, p6.y, 5, 5);
    pop();
  }
  else{
    imageMode(CENTER);
    image(this.img,landscape.elements[this.t].livetop.x, landscape.elements[this.t].livetop.y - 20);
  }
 // }
}
Seagull.prototype.draw1 = function(){
  if(!this.land){
  this.size = map(this.pos.y, height, 0, 0, this.livetime/10);
  this.size = constrain(this.size,0,70);
  
  style.set(false, pal.colors[9], 1);
  //for(var i = 0; i < this.size; i += 1){
    var p1 = posOnCircle(this.pos, this.size, this.size, this.i);
    var p2 = posOnCircle(this.pos, this.size, this.size, this.size/2 - this.i);
    var p3 = posOnCircle(this.pos, this.size/6, 4, 1);
    var p4 = posOnCircle(this.pos, this.size/6, 4, 3);
    var p5 = posOnCircle(this.pos, this.size/12, 4, 0);
    var p6 = posOnCircle(this.pos, this.size/12, 4, 2);
    
    
    this.i += 1;
    // this.i += this.dir * random(0.5,1);
    // if(this.i > this.size/5){ this.dir = -1; };
    // if(this.i < -2){ this.dir = 1; };
    
    triangle(p3.x, p3.y, p4.x, p4.y,p1.x, p1.y);
    triangle(p3.x, p3.y, p4.x, p4.y,p2.x, p2.y);
    
    ellipse(this.pos.x,this.pos.y, this.size/4, this.size/4);
    style.set(pal.colors[5], pal.colors[2], 1);
    triangle(p6.x, p6.y, p3.x, p3.y,p5.x, p5.y);
    style.set(false,pal.colors[0],2);
    ellipse(p5.x, p5.y, 5, 5);
    ellipse(p6.x, p6.y, 5, 5);
  }
  else{
    imageMode(CENTER);
    image(this.img,this.pos.x, this.pos.y - 20);
  }
 // }
}