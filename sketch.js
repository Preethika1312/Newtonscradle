const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg;

function preload(){
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20);
    log = new Log(450,50,500,PI/2);
    ball1 = new Ball(300,400,50,50);
    ball2 = new Ball(400,400,50,50);
    ball3 = new Ball(500,400,50,50);
    ball4 = new Ball(600,400,50,50);
    ball5 = new Ball(700,400,50,50);
    chain1 = new Chain(ball1.body,{x:250 ,y:60 });
    chain2 = new Chain(ball2.body,{x:335 ,y:60 });
    chain3 = new Chain(ball3.body,{x:420 ,y:60 });
    chain4 = new Chain(ball4.body,{x:515 ,y:60});
    chain5 = new Chain(ball5.body,{x:610 ,y:60});


  
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    text(mouseX + "  " + mouseY,1100,50);

    log.display();

    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();

    chain1.display();
    chain2.display();
    chain3.display();
    chain4.display();
    chain5.display();




    
}
function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x:mouseX ,y:mouseY });

}

function mouseReleased(){
    Matter.Body.setPosition(ball1.body,{x:300 ,y:400 });
    

}