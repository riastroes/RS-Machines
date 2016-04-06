
function TestMachine02(){
  
  //construction01
  this.pos1 = createVector(100,100);
  this.maxparts = 3;
  this.platetype = 1;
  this.connecttype = 1;
  this.angle = 0;
  this.construction1 = new Construction01(this.pos1, this.maxparts, 80, 20, this.platetype, pal.colors[2], this.angle);
  this.construction1.showConnectors(false, 1, 10);
  
  
  this.pos2 = createVector(400,50);
  this.maxparts = 5;
  this.platetype = 1;
  this.connecttype = 1;
  this.angle = 1;
  this.construction2 = new Construction01(this.pos2, this.maxparts, 100, 20, this.platetype, pal.colors[2], this.angle);
  this.construction2.showConnectors(false, 1, 10);
  
  //construction03
  this.platetype = 2;
  this.connecttype =2;
  this.angle= 0;
  
  this.pos3 = createVector(100,200);
  this.construction9 = new Construction03(this.pos3, 20, 20, this.platetype, pal.colors[2], this.angle);
  this.construction9.showConnectors(false, this.connecttype, 10);
  
  this.pos4 = createVector(400,200);
  this.angle= 1;
  this.construction10 = new Construction03(this.pos4, 70, 70, this.platetype, pal.colors[2], this.angle);
  this.construction10.showConnectors(false, this.connecttype, 10);
  
  
  //construction04
  this.angle1 = 0;
  this.angle2 = PI/2;
  
  this.pos7= createVector(100,300);
  this.construction7 = new Construction04(this.pos7, this.maxparts, 100, 20, this.platetype, pal.colors[2], this.angle1, this.angle2);
  this.construction7.showConnectors(false, 1, 10);
  
  this.pos8= createVector(300,300);
  this.construction8 = new Construction04(this.pos8, this.maxparts, 70, 70, this.platetype, pal.colors[2], this.angle1, this.angle2);
  this.construction8.showConnectors(false, 1, 10);
  
  
  
  //construction02
  this.platetype = 2;
  this.connecttype =2;
  
  
  this.pos3 = createVector(100,550);
  this.construction3 = new Construction02(this.pos3, 4, 50, 20, this.platetype, pal.colors[2]);
  this.construction3.showConnectors(false, this.connecttype, 10);
  
  this.pos4 = createVector(200,550);
  this.construction4 = new Construction02(this.pos4, 5, 50, 20, this.platetype, pal.colors[2]);
  this.construction4.showConnectors(false, this.connecttype, 10);
  
  this.pos5 = createVector(400,550);
  this.construction5 = new Construction02(this.pos5, 6, 100, 50, this.platetype, pal.colors[2]);
  this.construction5.showConnectors(false, this.connecttype, 10);

  this.pos6 = createVector(600,550);
  this.construction6 = new Construction02(this.pos6, 7, 150, 20, this.platetype, pal.colors[2]);
  this.construction6.showConnectors(false, this.connecttype, 10);
  
  //construction06
  this.construction11 = new Construction06(img[3], 190, 90, 40, this.platetype, pal.colors[2], 0);
  this.construction12 = new Construction06(img[3], 190, 90, 40, this.platetype, pal.colors[2], -1);
  this.construction13 = new Construction06(img[3], 190, 90, 40, this.platetype, pal.colors[2], -2);
  this.construction14 = new Construction06(img[3], 190, 90, 40, this.platetype, pal.colors[2], -3);
  
 }
 TestMachine02.prototype.draw = function(){
  style.text(12, LEFT, pal.colors[0]);
  text("testmachine02", 20,20);
  
  style.text(16, LEFT, pal.colors[2]);
  text("CONSTRUCTION01", 50,50);
  
  this.construction1.update(this.pos1);
  this.construction1.draw();
  this.construction2.update(this.pos2);
  this.construction2.draw();
  
  style.text(16, LEFT, pal.colors[2]);
  text("CONSTRUCTION03", 50,150)
  
  this.construction9.draw();
  this.construction10.draw();
  
  style.text(16, LEFT, pal.colors[2]);
  text("CONSTRUCTION04", 50,250)
  
  this.construction7.update(this.pos7);
  this.construction7.draw();
  this.construction8.update(this.pos8);
  this.construction8.draw();
  
  style.text(16, LEFT, pal.colors[2]);
  text("CONSTRUCTION02", 50,500)
  
  this.construction3.draw();
  this.construction4.draw();
  this.construction5.draw();
  this.construction6.draw();
  
  
  style.text(16, LEFT, pal.colors[2]);
  text("CONSTRUCTION06", 800,200);
  
  this.pos = createVector(1000, 400);
  this.construction11.update(this.pos);
  this.construction11.draw();
   this.construction12.update(this.pos);
  this.construction12.draw();
   this.construction13.update(this.pos);
  this.construction13.draw();
   this.construction14.update(this.pos);
  this.construction14.draw();
  
};

