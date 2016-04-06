function Grid(cols, rows, wmarge, hmarge){
  this.cols = cols;
  this.rows = rows;
  this.maxi = this.cols * this.rows;
  this.pos = []; //the center positions of the grid;
  this.cellwidth = (width - wmarge) / cols;
  this.cellheight = (height - hmarge)/ rows;
  
  
  for (var x = 0; x < this.cols; x++) {
    this.pos[x] = []; // create nested array
    for (var y = 0; y < this.rows; y++) {
      var vx = (wmarge/2) + (this.cellwidth * x) + (this.cellwidth/2);
      var vy = (hmarge/2) + (this.cellheight * y) + (this.cellheight/2)
      this.pos[x][y] = createVector(vx, vy);
    }
  }
}
Grid.prototype.show = function(){
  style.set(pal.colors[1], false, 4);
  for(var x = 0; x < this.cols; x++){
    for(var y = 0; y < this.rows; y++){
      point(this.pos[x][y].x, this.pos[x][y].y);
    }
  }
}
Grid.prototype.shownr = function(){
  style.set(pal.colors[1], false, 4);
  var i = 0;
  for(var x = 0; x < this.cols; x++){
    for(var y = 0; y < this.rows; y++){
      
      style.text(12, CENTER, pal.colors[1]);
      text(i, this.pos[x][y].x, this.pos[x][y].y);
      i++;
    }
  }
}
Grid.prototype.get = function(index){
  //var i = constrain(index, 0, this.maxi);
  var x = index % this.cols;
  var y = int(index / this.cols);
  
  return this.pos[x][y];
};
Grid.prototype.x = function(index){
  var x = index % this.cols;
  return x;
};
Grid.prototype.y = function(index){
  var y = int(index / this.cols);
  return y;
};