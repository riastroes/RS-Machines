
function TestMachine04(){
  
  
  this.pos1 = createVector(150,150);
  this.construction1 = new Construction05(this.pos1, 70, 8, 70 , 8, 15, pal.colors[2]);
  
  this.pos2 = createVector(150,300);
  this.construction2 = new Construction05(this.pos2, 70,  8, 140 ,16 ,15,  pal.colors[2]);
  
  this.pos3 = createVector(150,500);
  this.construction3 = new Construction05(this.pos3, 100,  24, 70 ,8 ,15,  pal.colors[2]);
  
 }
 
 TestMachine04.prototype.draw = function(){
  
  style.text(12, LEFT, pal.colors[0]);
  text("testmachine04", 20,20);
  
  style.text(16, LEFT, pal.colors[2]);
  text("CONSTRUCTION05", 50,50);
  
  this.construction1.update(this.pos1, 0.001);
  this.construction1.draw();
  
  this.construction2.update(this.pos2, 0.001);
  this.construction2.draw();
  
  this.construction3.update(this.pos3, 0.001);
  this.construction3.draw();
  
 
};

