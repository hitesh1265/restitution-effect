const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ball
var engine, world;
var object;
var balloptions
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
  balloptions={restitution:0.85};
    var object_options ={
        isStatic: true
    }

   object= Bodies.rectangle(200,390,200,20,object_options);
    World.add(world,object);

   ball=Bodies.rectangle(150,200,10,10,balloptions);
   World.add(world,ball);

    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,50,50);
    rect(ball.position.x,ball.position.y,60,70);
}
