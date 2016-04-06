function Landscape(){

  img[6].resize(width, height+200);
  img[5].resize(width, height+200);
  img[10].resize(width, height/2);
  img[9].resize(width,220);
  img[8].resize(width,220);
  this.elements = [];
 
  this.elements[0] = new LandscapeElement(img[6],createVector(0,-200),width, height+200, BLEND);
  //this.elements[1] = new LandscapeElement(img[10], createVector(0,height/2),width, height/2, DARKEST);
  
 // this.elements[1].filter("transparent");
  this.elements[2] = new LandscapeElement(img[5],createVector(0,-200),width, height+200, DARKEST);
  
 
  
  this.elements[3] = new LandscapeElement(img[7], createVector(-400, height), img[7].width, img[7].height, LIGHTEST); 
  this.elements[4] = new LandscapeElement(img[9], createVector(0,height),width, 300, BURN);
  this.elements[5] = new LandscapeElement(img[8], createVector(0,height),width, 300, OVERLAY);
  this.elements[5].filter("green");
  this.stream = 1;
  
};
Landscape.prototype.add = function(img, pos,w, h, blendmode){
  this.elements[this.elements.length] = new LandscapeElement(img, pos,w, h, blendmode);
}
Landscape.prototype.update = function(){
  
  if(this.elements[4].pos.y > height - this.elements[4].img.height){
    this.elements[4].pos.y -= 0.07;
    this.elements[5].pos.y -= 0.07;
    // if(this.elements[4].img.height < height - this.elements[4].pos.y){
    //   this.elements[4].img.height = height - this.elements[4].pos.y;
    // }
    // if(this.elements[5].img.height < height - this.elements[5].pos.y){
    //   this.elements[5].img.height = height - this.elements[5].pos.y;
    // }
  }
  
    this.elements[0].pos.y += this.stream * 0.5;
    this.elements[0].height -= this.stream * 0.5;
    this.elements[0].pos.y = constrain(this.elements[0].pos.y, -400,0);
    this.elements[0].height = constrain(this.elements[0].height, height, height+400);
    this.elements[2].pos.y -= this.stream * 0.5;
    this.elements[2].height += this.stream * 0.5;
    this.elements[2].pos.y = constrain(this.elements[2].pos.y, -400,0);
    this.elements[2].height = constrain(this.elements[02].height, height, height+400);
 
 // this.elements[1].height = height - (this.elements[2].pos.y/2);
  
  for(var i = 6 ; i < this.elements.length; i +=1){
   var elem = this.elements[i];
   if(frameCount % 100 === 1){
    elem.livetime += 1;
   }
   
  }
  //control eb en vloed
  if(this.elements[0].pos.y == 0){
    this.stream = -1;
  }
  if(this.elements[0].pos.y == -400){
    this.stream = 1;
  }
}
Landscape.prototype.draw = function(){

  for(var index in this.elements){
    if(index != 1  ){
  var elem = this.elements[index];
  elem.draw();
  elem.grow();
    }
  }
  
 
};

/****************************************************/
function LandscapeElement(img, pos,w, h, blendmode){
  this.pos = pos;
  this.width = w;
  this.height = h;
  this.img = img;
  this.blendmode = blendmode;
  this.livetime = 0;
  this.livetop = createVector(this.pos.x, this.pos.y);
  this.isoccupied = false;
  
}
LandscapeElement.prototype.draw = function(){
  imageMode(CORNER);
  blendMode(this.blendmode);
  image(this.img,0,0, this.img.width, this.img.height, this.pos.x, this.pos.y, this.width, this.height);
  
}
LandscapeElement.prototype.filter = function(filtername, percentage){
  switch(true){
    case (filtername == "yellow"):{
      var r,g,b; 
      this.img.loadPixels();
      for(var i = 0 ; i < this.img.pixels.length; i += 4){
        
        if(this.img.pixels[i]+ this.img.pixels[i]+this.img.pixels[i] > 400){
          r = (255 - this.img.pixels[i]) * percentage;
          g = (230 - this.img.pixels[i]) * percentage;
          b = (150 - this.img.pixels[i]) * percentage;
          this.img.pixels[i]   =  map(i, 0,this.img.pixels.length*(2/3), this.img.pixels[i] + r, this.img.pixels[i]);
          this.img.pixels[i+1] =map(i, 0,this.img.pixels.length*(2/3), this.img.pixels[i+1] + g, this.img.pixels[i+1]);
          this.img.pixels[i+2] =map(i, 0,this.img.pixels.length*(2/3), this.img.pixels[i+2] + b, this.img.pixels[i+2]);
        }
      }
      this.img.updatePixels();
      break;
    }
    case (filtername == "green"):{
      this.img.loadPixels();
      for(var i = 0 ; i < this.img.pixels.length*(2/3); i += 4){
        
        this.img.pixels[i] =map(i, 0,this.img.pixels.length*(2/3), 50, this.img.pixels[i]);
        this.img.pixels[i+1] =map(i, 0,this.img.pixels.length*(2/3),100, this.img.pixels[i+1]);
        this.img.pixels[i+2] =map(i, 0,this.img.pixels.length*(2/3), 50,this.img.pixels[i+2]);
      }
      this.img.updatePixels();
      break;
    }
    case (filtername == "transparent"):{
      this.img.loadPixels();
      for(var i = 0 ; i < this.img.pixels.length; i += 4){
        
        this.img.pixels[3] =map(i, 0,this.img.pixels.length, 255,0);
      }
      this.img.updatePixels();
      break;
    }
  }
  
}
LandscapeElement.prototype.grow = function(){
  blendMode(DIFFERENCE);
  style.set(pal.colors[5], pal.colors[8], 8);
  for(var i = 0; i < this.livetime; i += 1){
    //var x = map(noise(this.pos.y-i), 0,1, this.pos.x - 20, this.pos.x + 20);
    this.livetop = createVector( this.pos.x+1 + this.width/2,this.pos.y - (i * 10));
    line(this.pos.x+1 + this.width/2,this.pos.y, this.livetop.x, this.livetop.y);
  }

}
  