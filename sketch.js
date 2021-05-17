
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var juno,junoImg,mango,mangoImg,mangoTree,mangoTreeImg,BackgroundImg;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,stone,launcher;
function preload()
{
	mangoImg = loadImage("mango.png");
	mangoTreeImg = loadImage("mango1234.png");
    junoImg = loadImage("juno--.png");
	BackgroundImg = loadImage("Background1.jpg")
  stoneImg = loadImage("stone.png");
}

function setup() {
	createCanvas(1500, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  stone = new Stone(400,450,100,80);
 

 juno = createSprite(350,500,50,50);
 juno.addImage(junoImg);
juno.scale=0.7;

mangoTree = new Tree(650,8,1000,650);
mangoTree.scale=2.7; 

mango1 = new Mango(800,200,100);
mango1.scale =0.4;

mango2 = createSprite(1100,400,100);
mango2.addImage(mangoImg);
mango2.scale = 0.5;

mango3 = createSprite(950,450,10);
mango3.addImage(mangoImg);
mango3.scale = 0.32;

mango4 = createSprite(1050,180,10);
mango4.addImage(mangoImg);
mango4.scale = 0.2;

mango5 = createSprite(1350,320,10);
mango5.addImage(mangoImg);
mango5.scale = 0.35;

mango6 = createSprite(1150,140,10);
mango6.addImage(mangoImg);
mango6.scale = 0.28;
 
mango7 = createSprite(1250,200,10);
mango7.addImage(mangoImg);
mango7.scale = 0.42;

launcher = new Launcher(stone.body,{x:420,y:440});
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(BackgroundImg);

  juno.display();
  mangoTree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone.display();
  launcher.display();
  drawSprites();
  
}
  
  
  
