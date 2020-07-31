const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var pig1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,height,1200,20)

    pig1 = new Dustbin(810, 350);
    bird = new Ball(100,100);

}

function draw(){
    background(0);
    Engine.update(engine);
    pig1.display();
    ground.display();
    bird.display();
}