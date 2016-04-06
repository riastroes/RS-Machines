
function TestMachine01(){
  
  
  this.connecttype =0;
  this.pos1 = createVector(100,100);
  this.connector1 = new Connector(this.pos1 ,30, this.connecttype, true);
  this.connecttype =1;
  this.pos2 = createVector(200,100);
  this.connector2 = new Connector(this.pos2 ,30, this.connecttype, true);
  this.connecttype =2;
  this.pos3 = createVector(300,100);
  this.connector3 = new Connector(this.pos3 ,30, this.connecttype, true);
  
  
  this.platetype = 0;
  this.plate1 = new Plate( 100, 150, this.platetype, pal.colors[9],0);
  this.plate1.showConnectors(0, true, 12);
  this.platetype = 1;
  this.plate2 = new Plate( 100, 150, this.platetype, pal.colors[9],0.5);
  this.plate2.showConnectors(0, true, 12);
  this.platetype = 2;
  this.plate3 = new Plate( 100, 150, this.platetype, pal.colors[9],0.5);
  this.plate3.showConnectors(0, true, 12);
  
  
  this.platetype = 0;
  this.plate4 = new Plate( 100, 150, this.platetype, pal.colors[9],0);
  this.plate4.showConnectors(0, true, 12);
  this.plate5 = new Plate( 150, 50, this.platetype, pal.colors[9],0);
  this.plate5.showConnectors(0, true, 12);
  this.plate6 = new Plate( 100, 150, this.platetype, pal.colors[9],0);
  this.plate6.showConnectors(0, true, 12);
  
  
 }
 TestMachine01.prototype.update = function(){
  var isconnected = true;
  this.connecttype = 0;
  this.pos4 = createVector(100,200);
  this.plate1.connectTo(this.pos4, 1, isconnected, this.connecttype, 14,0); 
  this.connecttype = 0;
  this.pos5 = createVector(300,200);
  this.plate2.connectTo(this.pos5, 1, isconnected, this.connecttype, 14,0); 
  this.connecttype = 0;
  this.pos6 = createVector(500,200);
  this.plate3.connectTo(this.pos6, 1, isconnected, this.connecttype, 14,0.001); 
  
  this.connecttype = 1;
  this.pos7 = createVector(250,450);
  this.plate5.connectTo(this.pos7, 0, isconnected, this.connecttype, 10,0); 
  this.plate4.connect(this.plate5, 1, 2, isconnected, this.connecttype, 14,0); 
  this.plate6.connect(this.plate5, 2, 1,isconnected, this.connecttype, 10,0.01); 
   
 }
 TestMachine01.prototype.draw = function(){
  
  style.text(12, LEFT, pal.colors[0]);
  text("testmachine01", 20,20);
  
  style.text(16, LEFT, pal.colors[2]);
  text("CONNECTORS", 50,50);
  
  this.connector1.draw();
  this.connector2.draw();
  this.connector3.draw();
  
  style.text(16, LEFT, pal.colors[2]);
  text("PLATES", 50,150);
  
  this.update();
  this.plate1.draw();
  this.plate2.draw();
  this.plate3.draw();
  
  style.text(16, LEFT, pal.colors[2]);
  text("PLATE COMBINATION", 50,400);
  
 
  this.plate5.draw();
  this.plate4.draw();
  this.plate6.draw();
  
  
  
};

