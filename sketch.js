const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var tank;
var enemy1,enemy2,enemy3; 
var base;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    tank = new tank(1100,320,70,70);
    enemy1 = new enemy(700,320,60,60);
    enemy2 = new enemy((920,320,70,70);
    enemy3 = new enemy((920,320,70,40);
    base = new base(600,50,1200,20);
}

function draw(){
    Engine.update(engine);
    //strokeWeight(4);
    enemy1.display();
    enemy2.display();
    enemy3.display();
    base.display();
}