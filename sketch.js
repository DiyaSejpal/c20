var a,b;
 function setup() {
 createCanvas(800,400);
 a = createSprite(200, 200, 50, 100);
 a.shapeColor="green";
 b = createSprite(300,200,100,60); 
 b.shapeColor="green"; 
 } 
function draw() { 
  background("black");
   b.x=World.mouseX;
   b.y=World.mouseY;
   if(b.x-a.x === b.width/2 + a.width/2 || a.x-b.x === b.width/2 + a.width/2 
    || b.y-a.y=== b.height/2 + a.height/2 || a.y-b.y=== b.height/2 + a.height/2 ) {
     a.shapeColor="red";
     b.shapeColor="red";
     } 
     else
    { a.shapeColor="green";
     b.shapeColor="green";
 }
  //console.log(b.x-a.x);
  console.log(a.x-b.x);
   drawSprites();
 }