//text functions

function drawText(atext,pg, x, y, size, c){
    
    strokeWeight(1);
    pg.strokeWeight(1);
    noStroke();
    pg.noStroke();
    fill(c);
    pg.fill(c);
    textSize(size);
    pg.textSize(size);
    
    pg.text(atext, x, y);

};
function drawTextBox(atext, pg, x, y, width, height, size, c){
    strokeWeight(1);
    pg.strokeWeight(1);
    noStroke();
    fill(c);
    pg.fill(c);
    
    textSize(size);
    pg.textSize(size);
    
    pg.text(atext, x, y, width, height);

};
// movement
function between(min, max, step){
  //min en max moeten even getallen zijn.
  //moving from to and back
  var d = max - min;
  var r = step % d;
  if(r > (d/2)){
    r = r - (d/2);
    r = (d/2) - r;
  }
  
  return r;
};
function moveOnCircle(centerX, centerY, radius,  maxsteps, step){
  v = createVector(centerX, centerY);
  var angle = ( TWO_PI / maxsteps ) * step;
  v.x = v.x + (radius * cos(angle));
  v.y = v.y + (radius * sin(angle));
  return v;
}
function posOnCircle(center, radius,  maxsteps, step){
  v = center.copy();
  var angle = ( TWO_PI / maxsteps ) * step;
  v.x = v.x + (radius * cos(angle));
  v.y = v.y + (radius * sin(angle));
  return v;
}
function moveOnLine(begin, end, maxsteps, step){
  var d = dist(begin.x, begin.y, end.x, end.y);
  var stepsize = d / maxsteps;
  var aline = p5.Vector.sub(end, begin);
  aline.normalize();
  aline.mult(stepsize * step);
  var s = begin.copy();
  s.add(aline);
  return s;
  
}
function posInCircle(pos, center, radius){
  var inCircle = false;
  if(dist(pos.x, pos.y, center.x, center.y) < radius){
    inCircle = true;
  }
  return inCircle;
}
function vectorTo(pos, center){
  var v = center.copy();
  v.sub(pos.x, pos.y);
  return v;
}
function contains(array, obj) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === obj) {
            return true;
        }
    }
    return false;
}
function getTimeInSeconds(){
  return (hour()*60*60) + (minute()* 60) + second();

}
function getScale(imgwidth, imgheight, maxwidth, maxheight){
  var scale ;
  var w = maxwidth/imgwidth;
  var h = maxheight/imgheight;
  if(h < w){
    scale = h;//img.height/maxheight;
  }
  else{
    scale = w;//img.width/maxwidth;
  }
  
  return scale;
}
function equal(array1, array2){
  var isequal = true;
  if(array1.length != array2.length){
    isequal = false;
   
  }else{
    for (var i  = 0 ; i < array1.length; i+= 1){
      if(array1[i] != array2[i]){
        isequal = false;
      }
    }
  }
  return isequal;
  
}
function randomInt(min, max){
  var r = int(random(min, max));
  if(r>max){r = max;}
  if(r<min){r = min;}
  
  return r;
}