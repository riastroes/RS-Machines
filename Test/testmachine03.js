
function TestMachine03(){
  
  
  this.spokes = 4;
  this.speed = 0;
  
  this.pos1 = createVector(100,150);
  this.gear1 = new Gear(70, this.spokes,  pal.colors[8], 20);
  
  this.pos2 = createVector(200,150);
  this.spokes = 5;
  this.gear2 = new Gear(70, this.spokes,  pal.colors[8], 20);
  
  this.pos3 = createVector(300,150);
  this.spokes = 10;
  this.gear3 = new Gear(70, this.spokes,  pal.colors[8], 20);
  
  this.pos4 = createVector(100,250);
  this.spokes = 8;
  this.gear4 = new Gear(70, this.spokes,  pal.colors[8], 20);
  
  //gear02
  this.pos5 = createVector(100,350);
  this.sales = 14;
  this.gear5 = new Gear02(70, this.sales, 15, pal.colors[8], 20);
  
  this.pos6 = createVector(300,350);
  this.sales = 14;
  this.gear6 = new Gear02(90, this.sales, 15, pal.colors[8], 20);
  
  this.pos7 = createVector(100,500);
  this.sales = 14;
  this.wheel1 = new Wheel(90, 20);
  
  
  //Rod
  this.rod = new Rod(200, 12, pal.colors[6], pal.colors[7], 0);
  this.rod.showConnectors(false,2,12);
 }
 
 TestMachine03.prototype.draw = function(){
  
  style.text(12, LEFT, pal.colors[0]);
  text("testmachine03", 20,20);
  
  style.text(16, LEFT, pal.colors[2]);
  text("GEARS", 50,50);
  
  this.gear1.update(this.pos1, 0);
  this.gear1.draw();
  
  this.gear2.update(this.pos2, 0);
  this.gear2.draw();
  
  this.gear3.update(this.pos3, 0.1);
  this.gear3.draw();
  
  style.text(16, LEFT, pal.colors[2]);
  text("GEAR02", 50,250);
  
  var pos = createVector(100, 320);
  this.gear5.update(pos, 0);
  this.gear5.draw();
  
  var pos = createVector(300, 320);
  this.gear6.update(pos, 0.05);
  this.gear6.draw();
  
  style.text(16, LEFT, pal.colors[2]);
  text("WHEELS", 50,380);
  
  var pos = createVector(100, 450);
  this.wheel1.update(pos, 0.05);
  this.wheel1.draw();
  
  style.text(16, LEFT, pal.colors[2]);
  text("RODS", 50,550);
  
  var pos = createVector(100, 600);
  this.rod.connectTo(pos, 1,  true, 2, 12, 0);
  this.rod.draw();
  
};

