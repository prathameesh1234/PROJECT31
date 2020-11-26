const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground1
var plinkos


var particles = [];
var plinkos = [];
var divisions = [];


function setup() {
  createCanvas(800,800);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world

  var divisionHeight = 300;
  for (var k = 0; k<=width; k=k + 80){
divisions.push(new division(k,height-divisionHeight/2,10,divisionHeight))
  }

  for (var j = 40; j<=width-10; j=j+50){
plinkos.push(new Plinko(j,75,5))
plinkos.push(new Plinko(j,275,5))
  }

  for (var j = 15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,175,5))
    plinkos.push(new Plinko(j,375,5))

      }


  ground1 = new Ground(400,790,800,20);
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
if (frameCount%60 === 0){
particles.push(new Particle(random(300,400),10,10))
}
for (var p = 0; p<particles.length; p++){
particles[p].display();


}

  ground1.display();  
for (var k = 0; k<divisions.length; k++){
divisions[k].display();

}

for (var j = 0; j<plinkos.length; j++){
  plinkos[j].display();
    }
  
 
  
  



fill("red")
  text(mouseX+","+mouseY,mouseX,mouseY);

  drawSprites();
}