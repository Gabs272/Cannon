const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var backgroundImg;
var tower;
var angle, cannon;
var cball;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
}



function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;    

  angle = -PI/4;
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 110, 50, angle);
  cball = new CannonBall(cannon.x, cannon.y);
}

function draw() {
  background(51);  

  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine); 
  tower.display();
  cannon.display();
  cball.display();
}


