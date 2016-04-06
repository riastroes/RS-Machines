
function Machine01(){
  
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
  this.img[0] = img[1];
  this.img[0].resize(50,100);
 
  this.plowtool = new Construction06(img[3], 160, 90, 40, this.platetype, pal.colors[2], 0);
  this.plowturn = 0;
  this.plowangle = 0;
  
 
 }
 Machine01.prototype.update = function(pos){
   
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
   
   //landscape.elements[3].pos.x = this.wheelr.axe.x-landscape.elements[2].width;
   //landscape.elements[3].pos.y = this.wheelr.axe.y ;
   //if(landscape.elements[3].width < this.pos.x){
   //landscape.elements[3].width = 250 + this.pos.x;
   //}
 }
 Machine01.prototype.move = function(){
  
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
 Machine01.prototype.plow = function(){
   
   var pos = this.chasie.getPos(1,1);
   
  
   
   if(this.plowangle < -PI){
   //if(floor(this.plowturn % (PI* 25))== 0){
     this.dir = -1;
     this.plowtool.full = !this.plowtool.full;
     if(!this.plowtool.full){
      var p = this.plowtool.rod.getPos(2).copy();
      var w = this.plowtool.plow.width;
      var h = this.plowtool.plow.height;
      p.x -= w;
      if(p.x >-50 && p.x < width+50){
        landscape.add(this.plowtool.img, p,w,h,  DIFFERENCE);
        sound[6].amp(0.3);
        sound[6].play();
      }
     }
   }
   if(this.plowangle >= 0){
   //if(floor(this.plowturn % (PI* 50)) == 0){
     this.dir = 1;
     this.plowtool.full = true;
     //landscape.add(this.plowtool.img, this.plowtool.rod.getPos(2), LIGHTEST);
    
   }
   this.plowangle += -this.dir * 0.08;
   this.plowtool.update(pos, -this.dir * 0.08);
   this.plowturn +=1;
 }
 Machine01.prototype.draw = function(){
 
  this.handlebar.draw();
  blendMode(BLEND);
  image(this.img[0], this.imgpos.x, this.imgpos.y);
  blendMode(MULTIPLY);
  this.chasie.draw();
  this.seat.draw();
  
  this.wheelr.draw();
  this.wheell.draw();
  
  
  this.plowtool.draw();
};

