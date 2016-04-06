function Construction02(pos, maxplates, platewidth, plateheight, platetype, platecolor){
  
  this.pos = pos.copy();
  this.maxplates = maxplates;
  
  //connectors
  this.connecttype = 2;           //potnagels, schroeven, bouten
  this.connectsize = 10;
  
  //plates
  this.plates = [];
  this.platewidth = platewidth;
  this.plateheight = plateheight;
  this.platetype = platetype;     //1=flat, 2=ridge
  this.fillcolor = platecolor;
  
  this.angle = TWO_PI / this.maxplates;
  
  for(var i = 0; i < this.maxplates; i +=1){
    this.plates[i] = new Plate(this.platewidth, this.plateheight, this.platetype, this.fillcolor,i *this.angle);
  }
 }
Construction02.prototype.showConnectors = function(isconnected, connecttype, connectsize){
  this.isconnected = isconnected;
  this.connecttype = connecttype;
  this.connectsize = connectsize;
  for(var i = 0; i < this.maxplates; i +=1){
    this.plates[i].showConnectors(this.isconnected, this.connecttype, this.connectsize);
  }
  this.plates[this.plates.length-1].showConnector(2, true, this.connecttype, this.connectsize);

};

Construction02.prototype.update = function(){
  var isconnected =true;
  
  for(var i = 0; i < this.maxplates; i +=1){
    if(i == 0){
      this.plates[0].connectTo(this.pos, 1, isconnected, this.connecttype, this.connectsize,0);
    }
    else{
      this.plates[i].connect(this.plates[i-1], 2,1, isconnected, this.connecttype, this.connectsize, 0);
    }
  }
}
Construction02.prototype.draw = function(){
  
  this.update();
  for(var i = 0; i < this.maxplates; i +=1){
    this.plates[i].draw();
  }
  //connect last with first
 
};

