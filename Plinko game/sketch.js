var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var marbles = [];
var divisions =[];
var divisionHeight=200;
var score =0;
function setup() {
  createCanvas(700, 700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       marbles.push(new Marble(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       marbles.push(new Marble(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       marbles.push(new Marble(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       marbles.push(new Marble(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  Engine.update(engine);
  ground.display();
  
   for (var i = 0; i < marbles.length; i++) {
     
     marbles[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(100, 700), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }
}