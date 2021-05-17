
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ground;
var stand1,stand2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var polygon1,sling1;
var stand3,stand4,stand5;
var bg ,bgimg;

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
	world = engine.world;
  ground=new Ground(600,575);
  stand1=new Stand(570,450,300,20);
  stand2=new Stand(980,290,300,20);
  stand3=new Stand(1200,300,20,1200);
  stand4=new Stand(0,300,20,1200);
  stand5=new Stand(600,-10,1200,20)
  box1=new Box(540,390);
  box2=new Box(580,390);
  box3=new Box(620,390);
  box4=new Box(500,390);
  box5=new Box(520,300);
  box6=new Box(560,300);
  box7=new Box(600,300);
  box8=new Box(540,200);
  box9=new Box(580,200);
  box10=new Box(560,150);
  b1=new Box(940,250);
  b2=new Box(980,250);
  b3=new Box(1020,250);
  b4=new Box(1060,250);
  b5=new Box(960,150);
  b6=new Box(1000,150);
  b7=new Box(1040,150);
  b8=new Box(980,50);
  b9=new Box(1020,50);
  b10=new Box(1000,0);
  polygon1=new Polygon(100,400,60);
  sling1=new Sling(polygon1.body,{x:100,y:370})
  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  if(bgimg){
  background(bgimg);
  }
  ground.display();
  stand1.display();
  stand2.display();
  stand4.display();
  box1.display();
  box2.display();
  box3.display();
  stand5.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  b1.display();
  b4.display();
  b3.display();
  b2.display();
  b6.display();
  b5.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  polygon1.display();
  stand3.display();
  sling1.display();
  getBackgroundImage();
  drawSprites();
  textSize(20)
  fill("black")
  text(hour,100,100);
  text("Drag The Hexagon and then release it, to launch towards the blocks",400,80);
  //text(this.sling.bodyA.position.speed,400,110);
}

function mouseDragged(){
  Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  sling1.fly();
}
function keyPressed(){
 if (keyCode===32 && polygon1.body.speed<3){
  sling1.attach(polygon1.body);
 }
}
async function getBackgroundImage(){
var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var responsejson=await response.json();
var datetime=responsejson.datetime;
var hour=datetime.slice(11,13);
if(hour>06 && hour<=18){
bg="light.jpg";
}
else{
bg="dark.jpg";
}
bgimg=loadImage(bg);
}