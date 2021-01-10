
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bob1,bob2;
var bob3,bob4;
var bob5,roof
var rope1,rope2
var rope3,rope4
var rope5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    roof=new Roof(250,150,300,20);
	bob1=new Bob(150,500,40);
    bob2=new Bob(195,500,40);
	bob3=new Bob(240,500,40);
	bob4=new Bob(285,500,40);
	bob5=new Bob(330,500,40);
	rope1=new Rope(bob1.body,roof.body,-100,0);
	rope2=new Rope(bob2.body,roof.body,-50,0);
	rope3=new Rope(bob3.body,roof.body,-0,0);
	rope4=new Rope(bob4.body,roof.body,50,0);
	rope5=new Rope(bob5.body,roof.body,100,0);
	
	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  text(mouseX+","+mouseY,mouseX,mouseY)
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  roof.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob2.body,{x:-10,y:-50})
	}
}



