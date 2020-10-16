
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball;
var bin1,bin2,bin3;
var ground1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paperball = new paper(100,600,20);
	bin1 = new bin(700,600,100,20);
	bin2 = new bin(650,550,20,100);
	bin3 = new bin(750,550,20,100);
	ground1 = new ground(400,620,800,20);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  paperball.display();
  bin1.display();
  bin2.display();
  bin3.display();
  ground1.display();
}

function uparrow () {
   if(keyCode === UP_ARROW) {
	Matter.Body.applyForce(paperball.body,paperball.body.position,{x:85,y:-85});
   }
}