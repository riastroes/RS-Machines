
function Machine02(){
  
  this.startpos = createVector(-250, height - (height/4));
  this.pos = this.startpos.copy();
  this.platetype = 2 // ridge
  this.connecttype = 2 // bouten
  this.speed = 0.1;
  this.dir = 1;
  this.turn = 0;
  
  this.chasie = new Construction01(this.startpos, 2, 100, 10,this.platetype , pal.colors[2], 0);
  this.chasie.showConnectors(false, this.connecttype, 5);
  
  this.seat = new Plate(30, 51,this.platetype , pal.colors[2], 0);
  this.seat.showConnectors(false, this.connecttype, 5);
 
  this.handlebar = new Rod(100, 4,pal.colors[5] , pal.colors[7],4);
  this.wheelr = new Wheel(45, 10);
  this.wheell = new Wheel(45, 10);
  this.img = [];
  this.img[0] = img[18]; //ria
  this.img[0].resize(50,100);
  this.img[1] = img[16]; //arm
  this.img[1].resize(40,20);
 
  this.squirttool = new Construction07(img[17], 90, pal.colors[2], 0.5);
  this.squirtturn = 0;
  this.squirtangle = 0;
  
 
 }
 Machine02.prototype.update = function(pos){
   
   this.chasie.update(pos);
   this.seat.connectTo(this.chasie.getPos(0,0), 4, true, this.connecttype,20, 0);
   this.seat.connectTo(this.chasie.getPos(0,1), 3, true, this.connecttype,20, 0);
   this.handlebar.connectTo(this.chasie.getPos(1,1), 1, true, this.connecttype,20, 0);
   this.imgpos = this.seat.getPos(2);
   this.imgpos.x = this.imgpos.x + 10
   this.imgpos.y = this.imgpos.y -30;
   this.wrp = this.chasie.getPos(1,0); 
   this.wheelr.update(this.wrp, this.speed);
   this.wlp = this.chasie.getPos(0,0);
   this.wheell.update(this.wlp, this.speed);
   
 }
 Machine02.prototype.moveTo = function(goal, speed){
  
   if(this.pos.x > goal.x){
    
      this.speed = speed;
      //this.startpos.y -=landscape.y/4;
      //this.turn += 1;
   }
   else{
     var omtrek = (this.wheelr.size/2 * TWO_PI)
     this.pos.x += (this.speed /TWO_PI * omtrek);
    if(this.pos.x < width/2){
        this.pos.y = map(this.pos.x, 0,width/2, height - 210, height - 260);
    }
    else{
      this.pos.y = map(this.pos.x, width/2, width,  height - 260, height-210);
    }
   }
   this.update(this.pos);
   this.squirttool.update(this.chasie.getPos(0,2), 0);
 }
 Machine02.prototype.move = function(){
  
   if(this.pos.x > width+ 100){
      this.pos = this.startpos.copy();
      this.speed = 0.15;// random(0.05, 0.15);
      //this.startpos.y -=landscape.y/4;
      this.pos.x += random(-50,50);
      this.pos.y -=20;//landscape.y/4;
      this.turn += 1;
   }
   else{
     var omtrek = (this.wheelr.size/2 * TWO_PI)
     this.pos.x += (this.speed /TWO_PI * omtrek);
    if(this.pos.x < width/2){
        this.pos.y = map(this.pos.x, 0,width/2, height - 210, height - 260);
    }
    else{
      this.pos.y = map(this.pos.x, width/2, width,  height - 260, height-210);
    }
   }
   this.update(this.pos);
   
   
 }
 Machine02.prototype.squirting = function(pos, rot){
  sound[5].play();
   this.squirttool.on = true;
   this.squirttool.update(pos, rot);
   this.squirttool.handle.angle -= 0.07;
  
   this.squirtturn += 1;
 }
 Machine02.prototype.draw = function(){
 
  this.handlebar.draw();
  blendMode(BLEND);
  image(this.img[0], this.imgpos.x, this.imgpos.y);
  push();
  translate(this.imgpos.x+10, this.imgpos.y-10);
  
  rotate(-0.5 + (this.squirtturn * 0.2));  //rest 0.5
  
  
  image(this.img[1], 0,-20 +( this.squirtturn * 5));
  pop();
  blendMode(MULTIPLY);
  this.chasie.draw();
  this.seat.draw();
  
  this.wheelr.draw();
  this.wheell.draw();
  
  
  this.squirttool.draw();
  
};

