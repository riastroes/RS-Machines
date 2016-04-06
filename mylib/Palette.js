function Palette(nr){
 
  this.colors =[];
  this.bgcolors = [];
  this.transparent = color(0,0,0,0);
  this.create(nr);
};

Palette.prototype.add = function(i, acolor){
  this.colors[i] = acolor;
};
Palette.prototype.addPalette  = function(nr){
  this.black = color(0,0,0);
  this.white = color(255,255,255);
  this.red = color(200,12,4,255);
  this.rose = color("#ea5455");
  this.orange = color("#f07b3f");
  this.gray = color(125,125,125);
  this.pink = color(200,12,4,10);
  
};
Palette.prototype.create = function(nr){
  
  
  if(nr == 1){
    this.add(0, color('#000000'));
  this.add(1, color('#ffffff'));
    this.add(2, color('#ff6666')); //red
    this.add(3, color('#002266'));  //blue
    this.add(4, color('#888888')); // gray
    
    this.add(8, color('#f47171')); //reds
    
    this.add(5, color('#99ccff')); // licht blauw
    
  }
  if(nr == 2){
  this.add(0, color('#000000'));
  this.add(1, color('#ffffff'));
  this.add(2, color('#cc0000')); // donkerrood
  this.add(3, color('#ff9900')); // goud
  this.add(5, color('#804d00'));
  this.add(4, color('#ffcc80'));
  this.add(6, color('#0f3761')); // donker blauw
  this.add(7, color('#368026')); // kikker groen
  
  
  }
  
};
Palette.prototype.random = function(){
  return this.colors[floor(random(this.colors.length))];
};
Palette.prototype.getIndex = function(acolor){
  var i;
  for( var index in this.colors){
    if(this.colors[index] == acolor){
      i = index;
      break;
    }
  }
  return i;
}
Palette.prototype.createMachinePalette = function(){
  
  //HSV colors
  this.colors[this.colors.length] = color(0);
  this.colors[this.colors.length] = color(255);
  this.colors[this.colors.length] = color(334,43,81,100);
  this.colors[this.colors.length] = color(220,2,54,100);
  this.colors[this.colors.length] = color(270,5,98,100);
  this.colors[this.colors.length] = color(0,0,23,100);
  this.colors[this.colors.length] = color(169,5,89,100);
  this.colors[this.colors.length] = color(172,16,58,100);
  this.colors[this.colors.length] = color(51,99,90,100);
  this.colors[this.colors.length] = color(216,59,43,100);
};
Palette.prototype.fromBGImage = function(img, count){
  var acolor;
  var c = 0;
  bgcolors = [];
  img.loadPixels();
  while( c  < count){
    var r = random(img.pixels.length - 4);
    var i = int(r - (r % 4));
    acolor = color(img.pixels[i], img.pixels[i+1], img.pixels[i+2], img.pixels[i+3]);
    if(!contains(bgcolors, acolor)){
      append(bgcolors, acolor);
      c = c + 1;
    }
  }
  return bgcolors;
};
Palette.prototype.tint = function(acolor, percentage){
  var p = (255/100) * percentage;
  var tint = color(red(acolor), green(acolor), blue(acolor), p );
  return tint;
}

Palette.prototype.colorStrip = function(pos){
  
  for(var index in this.colors){
    var i = int(index);
    style.set(color(0), this.colors[index], 1);
    rect(pos.x +(i * 50),pos.y , 50, 20);
    if(i == 0 && equal(this.colors[index],color(0))){
      style.text(12,CENTER,color(255));
    }
    else{
      style.text(12,CENTER,color(0));
    }
    text(i, pos.x +(i*50) + 10,pos.y + 20);
  }
};