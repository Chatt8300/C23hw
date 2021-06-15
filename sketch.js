var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	bgImg = loadImage("z.jpg")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
    

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 stick1 = new Stick(width/2, height/1.075, 100,5)
	 stick2 = new Stick(width/2.275, height/1.125, 5,90)
	 stick3 = new Stick(width/1.75, height/1.125, 5, 90)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImg)
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  stick1.display()
  stick2.display()
  stick3.display()
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === 32) {
Matter.Body.setStatic(packageBody,isStatic = false)
Matter.Body.setStatic(Stick,isStatic = true)
  }
}



