function Construction04(pos, maxplates, platewidth, plateheight, platetype, platecolor, angle1, angle2){
  
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
  this.angle1 = angle1;
  this.angle2 = angle2;
  
  for(var i = 0; i < this.maxplates; i +=1){
    if(i % 2 == 0){
      this.plates[i] = new Plate(this.platewidth, this.plateheight, this.platetype, this.fillcolor,this.angle1);
    }
    else{
      this.plates[i] = new Plate(this.platewidth, this.plateheight, this.platetype, this.fillcolor,this.angle2);
    }
  }
 };
Construction04.prototype.showConnectors = function(isconnected, connecttype, connectsize){
  this.isconnected = isconnected;
  this.connecttype = connecttype;
  this.connectsize = connectsize;
  for(var i = 0; i < this.maxplates; i +=1){
    this.plates[i].showConnectors(this.isconnected, this.connecttype, this.connectsize);
  }
};
Construction04.prototype.update = function(pos){
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
Construction04.prototype.getPos = function(platei, connectori){
  var pos = this.plates[platei].getPos(connectori);
  return pos;
}
Construction04.prototype.draw = function(){
  
  
  for(var i = 0; i < this.maxplates; i +=1){
    this.plates[i].draw();
  }
  
};

