function Agent(img, pos,size, nr ){
  this.pos = pos.copy();
  this.speed = size;               // the speed for walking
  this.dir = createVector(0,0);     // the direction to walk in
  this.img = img;                   // the image to search on
  this.nr = nr;
  this.size = size;
  
  this.randomnoisex = random(30);
  this.randomnoisey = random(30);
  this.a = 0;
  this.lastpos = this.pos.copy();
}
Agent.prototype.search = function(searchcolor){
  var step = this.pos.copy();
  this.dir.x = map(noise(this.randomnoisex + this.a), 0, 1, -1, 1);
  this.dir.y = map(noise(this.randomnoisey + this.a), 0, 1, -1, 1);
  this.a += 0.1;
  
  for(var s = 0; s < this.speed; s += 1){
    step.add(this.dir);
  }
  
  if(step.x < 0 ){step.x = 0;}
  if(step.y < 0 ){step.y = 0;}
  if(step.x > this.img.width ){step.x = this.img.width;}
  if(step.y > this.img.height ){step.x = this.img.height;}
  this.pos = step.copy();
  var found = this.findColor(this.img, searchcolor);
  if(found){
    this.lastpos = this.pos.copy();
  }
  return found;
};
Agent.prototype.move2 = function(){
  var step = this.pos.copy();
  step.x += map(noise(this.randomnoisex + this.a), 0, 1, -this.speed, this.speed);
  step.y += map(noise(this.randomnoisey + this.a), 0, 1, -this.speed, this.speed);
  this.a += 0.1;
  
  if(step.x < 0 ){step.x = 0;}
  if(step.y < 0 ){step.y = 0;}
  if(step.x > width ){step.x = width;}
  if(step.y > height ){step.x = height;}
  this.pos = step.copy();
};

Agent.prototype.findColor = function(img, acolor){
  var found = false;
  var imgcolor = img.get(this.pos.x, this.pos.y);
  if(red(imgcolor) == red(acolor)
  && green(imgcolor) == green(acolor)
  && blue(imgcolor) == blue(acolor)
  && alpha(imgcolor) == alpha(acolor)){
    found = true;
    
  }
  return found;
}
Agent.prototype.pgShow = function(pg){
  pg.ellipse(this.pos.x, this.pos.y, 10,10);
}
  