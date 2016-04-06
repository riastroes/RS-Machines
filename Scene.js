function Scene(){
  this.nr = 0;
  this.a = 0;
}
Scene.prototype.checkCondition = function(){
  var check = false;
  switch(this.nr){
    case 0:{
      //introduction scene
      if(frameCount == 1){
        landscape.draw();
        sound[0].loop();
        sound[0].amp(0.5);
      }
      
      if(frameCount == 100){
        check = true;
      }
      break;
    }
    case 1:{
      //the sky turning yellow.
      
      if(this.a === 0){
        sound[0].amp(0.3);
        sound[1].loop();
        this.a = 1;
      }
      landscape.update();
      landscape.draw();
      machines[2].moveTo(createVector(width, machines[2].pos.y), 0.15);
      //machines[2].squirting(machines[2].chasie.getPos(0,2), 0);
      
      
      if(machines[2].pos.x > 300 && machines[2].squirtturn <5){
        machines[2].squirting(machines[2].chasie.getPos(0,2), -0.2);
        landscape.elements[0].filter("yellow", 0.2);
        sound[1].amp(0.5);
      }
      if(machines[2].squirtturn ==5){
          machines[2].squirttool.on = false;
          sound[1].amp(0.5);
      }
      machines[2].draw();
      if(machines[2].pos.x > width){
        check = true;
      }
      break;
    }
    case 2:{
      //building a dike
      
        
        if(machines[1].pos.x < width/2){
          this.a = map(machines[1].pos.x , -250, width/2, 0.2,1);
        }
        else{
          this.a = map(machines[1].pos.x , width/2, width, 1,0.2);
        }
        sound[1].amp(this.a);
        
        landscape.update();
        landscape.draw();
        machines[1].move(random(0, 0.1));
        machines[1].plow();
        machines[1].draw();
      
      if(machines[1].turn == 4){
        sound[1].stop();
        check = true;
      }
      break;
    }
    case 3:{
      landscape.update();
      landscape.draw();
      blendMode(EXCLUSION);
      if(frameCount % 50 ==10){
        birds.create(createVector(random(width), height/3));
      }
      birds.fly();
      
      birds.draw();
      if(birds.seagulls.length == 15){
        check = true;
      }
      break;
    }
    case 4:{
      landscape.update();
      landscape.draw();
      blendMode(EXCLUSION);
      birds.fly();
      birds.draw();
      
      break;
    }
    default:{
      check = false;
    }
  }
  
  return check;
};
Scene.prototype.run = function(){
  if(this.checkCondition()){
    this.nr += 1;
  }
};