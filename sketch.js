const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var circle;
var ground;
var dustbin;



function setup() {
	createCanvas(900, 200);

	engine = Engine.create();
	world = engine.world;

	groundSprite = createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor = ("yellow");

	boxSprite = createSprite(700, 110, 20, 80);
	boxSprite.shapeColor = ("red");

	box2Sprite = createSprite(750, 150, 100, 20);
	box2Sprite.shapeColor = ("red");

	box3Sprite = createSprite(800, 110, 20, 80);
	box3Sprite.shapeColor = ("red");
	
	var options = {
	isStatic:true,
	restitution:0.3,
	friction:0.5,
	density:1.2
}
	circle = Bodies.circle(200,100,20,options);
	World.add(world,circle);

  
}


function draw() {
  background(0);
  Engine.update(engine);
	ellipseMode(RADIUS);
	fill(255);
	ellipse(circle.position.x,circle.position.y,20,20 );
	
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85})
	}
}


