var bullet, wall
var weight, speed, thickness
var deformation

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50,200,50,25);
  bullet.shapeColor = "white"
  speed = random(223,321)
  weight = random(30,52)
  thickness = random(22,83)
  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor = (80,80,80)
  bullet.velocityX = speed
  deformation = (0.5 * weight * speed * speed)/(thickness * thickness * thickness)
}

function draw() {
  background("gray");  
  
  if(bullet.x - wall.x < wall.width/2 + bullet.width/2
    && wall.x - bullet.x < wall.width/2 + bullet.width/2){
      bullet.velocityX = 0
  }
  if(bullet.x - wall.x < wall.width/2 + bullet.width/2
    && wall.x - bullet.x < wall.width/2 + bullet.width/2){
  if(deformation < 10){
    bullet.shapeColor = "green"
  }
  
  if(deformation > 10){
    bullet.shapeColor = "red"
  }
}
  drawSprites();
}