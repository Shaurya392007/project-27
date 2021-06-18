
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var hammer ,rubber ,stone ,iron;

function preload()
{
	
}

function setup() {
	createCanvas(1250, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 
	hammer = new Hammer(10,100, 150, 40);
	plane = new Plane(600,height ,1300,200);
	rubber = new Rubber(50,450,70);
	stone = new Stone(400,290,100,100);
	iron = new Iron(300,350, 80,40)

	sand1 = new Sand(500, 450 ,15);
	sand2 = new Sand(520, 450 ,15);
	sand3 = new Sand(540, 450 ,15);
	sand4 = new Sand(560, 450 ,15);
	sand5 = new Sand(580, 450 ,15);
	sand6 = new Sand(600, 450 ,15);
	sand7 = new Sand(620, 450 ,15);
	sand8 = new Sand(640, 450 ,15);
	sand9 = new Sand(660, 450 ,15);
	sand10 = new Sand(680, 450 ,15);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
hammer.display();
plane.display();
rubber.display();
stone.display();
sand1.display();
sand2.display();
sand3.display();
sand4.display();
sand5.display();
sand6.display();
sand7.display();
sand8.display();
sand9.display();
sand10.display();
iron.display();


  drawSprites();
 
}


