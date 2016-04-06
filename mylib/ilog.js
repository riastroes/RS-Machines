function iLog(){
  this.showstatus = false;
  this.minframerate = 60;
  this.maxframerate = 0;
  this.gemframerate = 0;
  this.totframerate = 0;
  this.totcount = 0;
  this.duration = "";
  this.msg = "";
}
iLog.prototype.update = function(){
  var fr = int(frameRate());
  this.totcount += 1;
  this.totframerate += fr;
  this.gemframerate = int(this.totframerate / this.totcount);
  if(this.minframerate > fr && frameCount > 5){
    this.minframerate = fr;
  }
  if(fr > this.maxframerate && frameCount > 5){
    this.maxframerate = fr;
  }
  var cell = menu.getCell(menu.cellnr);
  if(cell.proces){
    this.duration = cell.proces.time + "/" + cell.proces.timelimit;
  }
  
}
iLog.prototype.reset = function(){
  
  this.minframerate = 60;
  this.maxframerate = 0;
  this.gemframerate = 0;
  this.totframerate = 0;
  this.totcount = 0;
  this.msg = "";
}
iLog.prototype.show = function(){
  
    style.set(false, pal.tint(pal.colors[0],20),1);
    rect(0,0,225,height);
    
    style.text(12, LEFT, pal.colors[1]);
    text("frameCount: " + frameCount , 10,15);
    text("frameRate: " + int(frameRate()), 10,35);
    text("min. frameRate: " + this.minframerate , 10,55);
    text("max. frameRate: " + this.maxframerate , 10,75);
    text("gem. frameRate: " + this.gemframerate , 10,95);
    text("duration: " + this.duration , 10,115);
    
    text("screenwidth: " + width, 10, 140);
    text("visited: " + userrecord.visited, 10, 160);
    text("seen: " + menu.show, 10, 180);
    text("msg: " + this.msg, 10, 200);
  
}