//the constants for physics engine
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var constraintLog, chain;


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    //setting a variable for the canvas
    var canvas = createCanvas(1200,400);

    //creating the engine
    engine = Engine.create();
    world = engine.world;

    //ground and platform
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    //the boxes
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);

    //pigs
    pig1 = new Pig(810, 350);
    pig3 = new Pig(810, 220);

    //the logs
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
    log1 = new Log(810,260,300, PI/2);
    log3 =  new Log(810,180,300, PI/2);

    //the constraint log (soon to be catapult)
    constraintLog = new Log(230, 100, 100, PI/7);

    //the bird
    bird = new Bird(100,100);

    //the chain or line between the bird and constraint log
    chain = new Chain(bird.body, constraintLog.body);
}

function draw(){

    //the grassy hill background
    background(backgroundImg);

    //updating the engine
    Engine.update(engine);

    //displaying the boxes
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();


    //displaying the logs
    log1.display();
    log3.display();
    log4.display();
    log5.display();

    //displaying the pigs
    pig1.display();
    pig3.display();

    //displaying the bird
    bird.display();
    ground.display();

    //displaying the ground and platform
    platform.display();
    ground.display();

    //displaying the chain and the constraint log
    chain.display();
    constraintLog.display();
}
