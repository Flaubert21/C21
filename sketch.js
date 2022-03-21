
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var wall_1, wall_2;

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);
 
    var ball_options = {
	 isStatic : false,
     restitution : 0.3, 
	 friction : 0,
	 density : 1.2
	}
	 
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     
	 ground =new Ground(width/2,height,600,20);
	 wall_1 = new Ground(540,540,20,100);
	 wall_2 = new Ground(430,540,20,100);
	 
	 ball = Bodies.circle(150, 300, 20, ball_options);
     World.add(world,ball);

     


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);
  
  ground.show();
  wall_1.show();
  wall_2.show();

  ellipse(ball.position.x,ball.position.y,20);
  
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if ( keyCode === UP_ARROW){
	  Matter.Body.applyForce(ball,{x : 150, y : 300},{x : 2, y : 0});
	  Matter.Body.applyForce(ball,{x : 150, y : 300},{x : 0, y : -7});	
	}
   }

