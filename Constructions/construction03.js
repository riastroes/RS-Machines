function Construction03(pos, platewidth, plateheight, platetype, platecolor, angle){
  
  this.pos = pos.copy();
  
  //connectors
  this.connecttype = 2;           //potnagels, schroeven, bouten
  this.connectsize = 10;
  
  //plates
  this.plates = [];
 
  this.platewidth = platewidth;
  this.plateheight = plateheight;
  this.platetype = platetype;     //0=flat, 1 = border, 2=ridge
  this.fillcolor = platecolor;
  this.angle = angle;
  
  this.plates[0] = new Plate(this.platewidth*3, this.plateheight/2, this.platetype, this.fillcolor,0);
  this.plates[1] = new Plate(this.platewidth, this.plateheight, this.platetype, this.fillcolor,this.angle);
  this.plates[2] = new Plate(this.platewidth, this.plateheight, this.platetype, this.fillcolor,-this.angle);
  
  
 };
Construction03.prototype.showConnectors = function(isconnected, connecttype, connectsize){
  this.isconnected = isconnected;
  this.connecttype = connecttype;
  this.connectsize = connectsize;
  for(var i = 0; i < 3; i +=1){
    this.plates[i].showConnectors(this.isconnected, this.connecttype, this.connectsize);
  }
};
Construction03.prototype.update = function(){
  var isconnected = true;
  this.connecttype = 2;
  this.plates[0].connectTo(this.pos, 0, isconnected, this.connecttype, this.connectsize, 0);
  this.plates[1].connect(this.plates[0], 1,0, isconnected, this.connecttype, this.connectsize, 0);
  this.plates[2].connect(this.plates[0], 2,0, isconnected, this.connecttype, this.connectsize, 0);
  
}
Construction03.prototype.draw = function(){
  
  this.update();
  this.plates[0].draw();
  this.plates[1].draw();
  this.plates[2].draw();
  
  
};

