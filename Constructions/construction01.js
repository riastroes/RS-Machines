function Construction01(pos, maxplates, platewidth, plateheight, platetype, platecolor, angle){
  
  this.pos = pos.copy();
  
  //connectors
  this.connecttype = 2;           //potnagels, schroeven, bouten
  this.connectsize = 10;
  
  //plates
  this.plates = [];
  this.maxplates = maxplates;
  this.platewidth = platewidth;
  this.plateheight = plateheight;
  this.platetype = platetype;     //0=flat, 1 = border, 2=ridge
  this.fillcolor = platecolor;
  this.angle = angle;
  
  for(var i = 0; i < this.maxplates; i +=1){
    if(i % 2 == 0){
      this.plates[i] = new Plate(this.platewidth, this.plateheight, this.platetype, this.fillcolor,this.angle);
    }
    else{
      this.plates[i] = new Plate(this.platewidth, this.plateheight, this.platetype, this.fillcolor,-this.angle);
    }
  }
 };
Construction01.prototype.showConnectors = function(isconnected, connecttype, connectsize){
  this.isconnected = isconnected;
  this.connecttype = connecttype;
  this.connectsize = connectsize;
  for(var i = 0; i < this.maxplates; i +=1){
    this.plates[i].showConnectors(this.isconnected, this.connecttype, this.connectsize);
  }
};
Construction01.prototype.getPos = function(platei, connectori){
  var pos = this.plates[platei].getPos(connectori);
  return pos;
  
}
Construction01.prototype.update = function(pos){
  var isconnected = true;
  this.pos = pos.copy();
  for(var i = 0; i < this.maxplates; i +=1){
    if(i == 0){
      this.plates[i].connectTo(this.pos, 1, isconnected, this.connecttype, this.connectsize, 0);
    }
    else{
      this.plates[i].connect(this.plates[i-1], 2,1, isconnected, this.connecttype, this.connectsize, 0);
    }
  }
}
Construction01.prototype.draw = function(){
  
  for(var i = 0; i < this.maxplates; i +=1){
    this.plates[i].draw();
  }
  
};

