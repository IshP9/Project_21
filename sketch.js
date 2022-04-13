
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ball,groundObj,leftSide, rightSide;


function setup() {
	createCanvas(1500, 800);

	engine = Engine.create();
	world = engine.world;

	groundObj = new Ground(width/2,670, width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1500,600,20,120);


	var ball_options={
		isStatic:false,
		restitution: 0.9,
		friction: 0,
		density: 1.2
	}
	ball = Bodies.circle(100,100,20,ball_options);
	World.add(world,ball); 

	Engine.run(engine);
	ellipseMode(RADIUS);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,20,20);

  groundObj.show();
  leftSide.show();
  rightSide.show();

 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:5,y:5},{x:5,y:5});
	}
  
  }


