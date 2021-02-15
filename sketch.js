
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var Object1,Object2,Object3,Object4,Object5;
var roof1, rope1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof (200,200,80,10)
	Object1 = new Bob(150,450,20)
	Object2 = new Bob(170,450,20)
	Object3 = new Bob(190,450,20)
	Object4 = new Bob(210,450,20)
	Object5 = new Bob(2300,450,20)

	rope1 = new Rope (Object1.body, roof1.body,-bobDiameter*2,0)
	rope2 = new Rope (Object2.body, roof1.body,-bobDiameter*2,0)
	rope3 = new Rope (Object3.body, roof1.body,-bobDiameter*2,0)
	rope4 = new Rope (Object4.body, roof1.body,-bobDiameter*2,0)
	rope5 = new Rope (Object5.body, roof1.body,-bobDiameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Object1.display();
  Object2.display();
  Object3.display();
  Object4.display();
  Object5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



