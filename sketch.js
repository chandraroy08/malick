
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world,ball,wall1,wall2,wall3,ground,dustbin

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	ball=new paper(100,500);
	ball.scale=0.5	//Create the Bodies Here.
	//wall1=new trashbin(1065,590,20,120);
	//wall2=new trashbin(1165,660,220,20);
	//wall3=new trashbin(1265,590,20,120);
	ground=new floor(750,680,1500,30);
	dustbin= new trashbin(1165,520,150,150);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  ball.display();
  //wall1.display();
  //wall2.display();
  //wall3.display();
  ground.display();
  dustbin.display();
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-185});
	}
}



