function Connector(pos, size, type, isconnected) {
  this.pg = [];
  this.v = pos.copy(); // relative position on pg of parent;
  this.size = size;
  this.center = createVector(this.size/2, this.size/2);
  this.type = type;
  this.connected = isconnected;

  this.create();
}
Connector.prototype.create = function() {
   //count += 1;
  // switch (true) {
  //   case (this.type == 1 && this.connected):
  //     {
        this.pg[1] = createGraphics(this.size, this.size);
        style.pg(this.pg[1], pal.colors[5], pal.colors[6], 1);
        this.pg[1].ellipse(this.center.x, this.center.y, this.size, this.size);
        style.pg(this.pg[1], false, pal.colors[1], 1);
        this.pg[1].ellipse(this.center.x - (this.size / 5), this.center.y - (this.size / 5), (this.size / 5), (this.size / 5));
        style.pg(this.pg[1], pal.colors[5], pal.colors[1], 2);
        this.pg[1].line(this.center.x + 1 - (this.size / 2) + (this.size / 10), this.center.y + 1 - (this.size / 10), this.center.x - 1 + (this.size / 2) - (this.size / 10), this.center.y + 1 - (this.size / 10));
        style.pg(this.pg[1], pal.colors[1], pal.colors[1], 1);
        this.pg[1].line(this.center.x + 1 - (this.size / 2) + (this.size / 10), this.center.y + 2 - (this.size / 10), this.center.x - 1 + (this.size / 2) - (this.size / 10), this.center.y + 2 - (this.size / 10));
    //     break;
    //   }
    // case (this.type == 1 && !this.connected):{
      this.pg[2] = createGraphics(this.size, this.size);
      style.pg( this.pg[1], pal.colors[0], pal.colors[5], 1);
       this.pg[2].ellipse(this.center.x, this.center.y, this.size/2, this.size/2);
    //   break;
    // }
    // case (this.type == 2 && this.connected):{
      this.pg[3] = createGraphics(this.size, this.size);
      //Polygon(pos, maxcorners, size, rot)
      var polygon = new Polygon(this.v, 5, this.size / 2, 0);
      polygon.style(pal.colors[0], pal.colors[6], 1);
      polygon.create();
      polygon.drawOnPg(this.pg[3], this.center);
      style.pg(this.pg[3], pal.colors[0], pal.colors[3], 1);
      this.pg[3].ellipse(this.center.x, this.center.y, this.size/2, this.size/2);
    //   break;
    // }
    // case (this.type == 2 && !this.connected):{
      this.pg[4] = createGraphics(this.size, this.size);
      style.pg(this.pg[4], pal.colors[3], pal.colors[5], 1);
      this.pg[4].ellipse(this.center.x, this.center.y, this.size/2, this.size/2);
    //   break;
    // }
    // default:
    //   {
        this.pg[0] = createGraphics(this.size, this.size);
        style.pg(this.pg[0], pal.colors[3], false, this.size/2);
        this.pg[0].point(this.center.x, this.center.y);
   // break;
  //     }
  // }
}
Connector.prototype.getPg = function(){
  var pg;
  switch(true){
     case (this.type == 1 && this.connected):{
       pg = this.pg[1];
       break;
     }
     case (this.type == 1 && !this.connected):{
       pg = this.pg[2];
       break;
     }
      case (this.type == 2 && this.connected):{
       pg = this.pg[3];
       break;
     }
      case (this.type == 2 && !this.connected):{
       pg = this.pg[4];
       break;
     }
     default:{
        pg = this.pg[0];
        
     }
  }
  
  return pg;
}
Connector.prototype.draw = function(pg){

    if(pg){
      style.pg(pg, false, false, 1);
        
      pg.imageMode(CENTER);
      pg.image(this.getPg(), this.v.x, this.v.y);
    }
    else{
      imageMode(CENTER);
      image(this.getPg(), this.v.x, this.v.y);
    }
 
}
