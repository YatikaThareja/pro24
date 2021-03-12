
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObj;
var paperObject;
var groundObject;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
dustbinObj=new Dustbin();
paperObject=new Paper(200,450,20);
groundObject=new Ground(800,670,1600,10);
Engine.run(engine);

  
}


function draw() {

  background(0);
  dustbinObj.display();
  paperObject.display();
groundObject.display();
  
 
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:25,y:-25});
	}
}

