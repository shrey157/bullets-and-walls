function istouching(sprite1,sprite2){
   if(sprite1.x-sprite2.x<=(sprite1.width+sprite2.width)/2 
   &&sprite2.x-sprite1.x<=(sprite1.width+sprite2.width)/2 ){
   return true
   }else{
   return false
   }     }

  function Deformation(){
   deformation=((speed*0.5*speed*weight)/thickness*thickness*thickness)
  
   if (deformation>180)
  {wall.shapeColor=color(255,0,0) }
 
  if (deformation<100)
  {wall.shapeColor=color(0,255,3)}
  
  if (deformation<100 && deformation>180)
  {wall.shapeColor=color(230,230,0)}
}
  