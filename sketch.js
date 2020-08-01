const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drop1,umbrella1;
var thunder;

function preload(){
    thunderPic=loadImage("thunder.jpg")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    umbrella1=new Umbrella(800,350,70);
    var maxDrops=100;
    for(i=0; i>maxDrops; i++){
        drop1.push(new createDrop(random(0,400),random(0,400)));
    }
    if(frameCount%10===0){
         thunder=(random(0,400),random(0,400));
         thunder.addImage(thunderPic);

    }
    
   
    
}

function draw(){
    
    umbrella1.display();
    drop1.display();
    Drop.update();
}   

