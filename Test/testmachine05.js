
function TestMachine05(){
  
  
  this.pos1= createVector(100,100);
  this.foldingstrip1 = new Foldingstrip(this.pos1, 5, 80, 150, 2, pal.colors[7], 0, 0);
  
  this.pos2= createVector(100,400);
  this.construction1 = new Construction04(this.pos2, 5, 80, 150, 2, pal.colors[7], 0, 0);
    
 }
 
 TestMachine05.prototype.draw = function(){
  
  style.text(12, LEFT, pal.colors[0]);
  text("testmachine05", 20,20);
  
  style.text(16, LEFT, pal.colors[2]);
  text("FOLDINGSTRIP", 50,50);
  
  this.foldingstrip1.update(this.pos1, 0);
  this.foldingstrip1.draw();
  
  style.text(16, LEFT, pal.colors[2]);
  text("CONSTRUCTION04", 50,325);
  
  this.construction1.update(this.pos2, 0);
  this.construction1.draw();
  
};

