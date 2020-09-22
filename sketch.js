const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
var stone;
var ground;
var sling;
var M1,M2,M3,M4,M5,M6,M7,M8,M9,M10;
var boy, boy_img;

function preload(){
boy_img = loadImage("Plucking mangoes/boy.png");
}

function setup(){
createCanvas(900,600);

engine = Engine.create();
world = engine.world;

boy = createSprite(200,550);
boy.addImage(boy_img);
boy.scale = 0.1;

tree = new Tree(600,350,30,300);

ground = new Ground(600,600,2000,20);

M1 = new Mango(400,250,35);
M2 = new Mango(450,180,35);
M3 = new Mango(500,260,35);
M4 = new Mango(550,150,35);
M5 = new Mango(600,250,35);
M6 = new Mango(625,300,35);
M7 = new Mango(675,150,35);
M8 = new Mango(725,200,35);
M9 = new Mango(800,300,35);
M10 = new Mango(750,300,35);

stone = new Stone(150,600,25);

sling = new Slingshot(stone.body,{x:150,y:500});

// Engine.run(engine);
  
}

function draw(){

// rectMode(CENTER);
  
Engine.update(engine);

background("lightBlue");

tree.display();

ground.display();

M1.display();
M2.display();
M3.display();
M4.display();
M5.display();
M6.display();
M7.display();
M8.display();
M9.display();
M10.display();

stone.display();

sling.display();

drawSprites();
 
}

function mouseDragged(){
Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
sling.Fly();
}

function keyPressed(){
if(keyCode === 32){
// Matter.Body.setPosition(stone.body,{x:150,y:550})
sling.attach(stone.body);
}
}