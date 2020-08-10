const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var plinkos;
var particles = [];
var plinkos = [];
var divisions = [];
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;
  ground = new Ground(240,780,480,40);
  Border = new Division(0,400,10,800)
  division1 = new Division(80,660,10,200)
  division2 = new Division(160,660,10,200)
  division3 = new Division(240,660,10,200)
  division4 = new Division(320,660,10,200)
  division5 = new Division(400,660,10,200)
  Border2 = new Division(480,400,10,800)
}

function draw() {
  background(0);  
  for (var j = 40; j<=width; j=j+50){
    plinkos.push(new plinko(j,75))
  }

  for (var j = 40; j<=width; j=j+50){
    plinkos.push(new plinko(j,175))
  }

  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  Border.display();
  Border2.display();
  plinkos.display();
  drawSprites();
}