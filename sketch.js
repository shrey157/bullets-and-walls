var bullet,wall;
var speed,weight,deformation,thickness;

function setup() {
  createCanvas(1600,400);
 speed=random(223,321)
 weight=random(30,52)
thickness=random(22,83)

bullet=createSprite(50,200,40,15)
bullet.velocityX=5; bullet.shapeColor=color(80,80,80)

wall=createSprite(1200,200,thickness,800);  
wall.shapeColor=color(80,80,80)

}

function draw() {
  background(255,255,255);  
  if(istouching(bullet,wall)){
 Deformation();
 console.log(deformation);
 bullet.velocityX=0;
  }
 

  drawSprites();    
                   }