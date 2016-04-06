var canvas;
var pal;
var style;
var machines;
var isrunning;
var landscape;
var pos;
var scene;
var birds;
var plants;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  //pg = createGraphics(width, height);
  colorMode(HSB, 360, 100, 100, 100);
  
  pal = new Palette();
  pal.createMachinePalette();
  style = new Style();
  scene = new Scene();
  landscape = new Landscape();
  machines = [];
  machines[1] = new Machine01();
  machines[2] = new Machine02();
  //machines[4] = new TestMachine02();
  // machines[1] = new TestMachine01();
  //machines[2] = new TestMachine02();
  //machines[4] = new TestMachine04();
  //machines[5] = new TestMachine05();
 // background(img[2]);
 
  birds = new Birds();
  plants = new Plants();
  
  isrunning = true;
   //scene.nr = 3;
  
   
}

function draw() {
  scene.run();
  //pal.colorStrip(createVector(width-500,0));
  // if(scene.nr == 0){
  //   landscape.update();
  //   landscape.draw();
  //   machines[1].move(random(0, 0.1));
  //   machines[1].plow();
  //   machines[1].draw();
  // }

  //machines[2].draw();
  // push();
  //   translate(500,0);
  //     scale(0.4);
  //     machines[3].draw();

  // pop();
  // machines[4].draw();
  //machines[3].draw();
  //   push();
  //     translate(500,0);
  //       scale(0.4);
  //       machines[3].draw();

  //   pop();
  
}

function keyPressed() {

  if (key == 'i' || key == 'I') {
    ilog.showstatus = !ilog.showstatus;
    ilog.reset();
  }
  if (key == 'g' || key == 'G') {

    gifrecord = true;
    gifsize = 20;

  }
  if (key === 's' || key == 'S') {
    if (isrunning) {
      noLoop();
      save('Result/test.jpg');
      isrunning = false;
    } else {
      loop();
      isrunning = true;
    }
  }
  if (key === 'l' || key == 'L') {
    if (isrunning) {
      noLoop();
      println(machines[1].plowtool.rot);
      println(machines[1].plowturn);
      isrunning = false;
    } else {
      loop();
      isrunning = true;
    }
  }
  if (key === 'f' || key == 'F') {
    println(frameRate());
  }
  if (key === 'q' || key == 'Q') {
    sound[0].stop();
    sound[1].stop();
  }

}