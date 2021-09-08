var bullet
var space, shooter;
var spaceImage, shooterImage, orangeImage, greenImage, purpleImage;

function preload(){
  spaceImage = loadImage("space.png");
  shooterImage = loadImage("shooter.png");
  orangeImage = loadImage("orange_enemy.png");
  greenImage = loadImage("green_enemy.png");
  purpleImage = loadImage("purple_enemy.png");
  
  
}

function setup(){
  createCanvas(400,400)
  space = createSprite(0, 0 ,400, 400);
  space.addImage(spaceImage);
  space.scale = 2.5;
  space.y = space.height/2;
  space.velocityY = 2;

  score = 0
  shooter = createSprite(190, 375,20,20);
  shooter.addImage(shooterImage);
  
  edges = createEdgeSprites();
}



function draw() {
  
  shooter.x = World.mouseX;
  shooter.collide(edges[0]);
 
  
  if (space.y > 500) {
    space.y = space.height/2;
  }
  
  if (keyDown("space")) {
    createBullet();
  }
  
  var select_enemy = Math.round(random(0,2));
  
  if (World.frameCount % 100 == 0) {
    if (select_enemy == 0) {
      createGalaxian1();
    } else if (select_enemy == 1) {
      createGalaxian2();
    } else {
      createGalaxian3();
    }
  }
  
  drawSprites();
  
}


function createGalaxian1() {
  var galaxian1 = createSprite(random(0, 400), 0, 10, 10);
  galaxian1.addImage(orangeImage);
  galaxian1.velocityY = 0.7;
}

function createGalaxian2() {
  var galaxian2 = createSprite(random(0, 400), 0, 10, 10);
  galaxian2.addImage(greenImage);
  galaxian2.velocityY = 0.8;
}

function createGalaxian3() {
  var galaxian3 = createSprite(random(0, 400), 0, 10, 10);
  galaxian3.addImage(purpleImage);
  galaxian3.velocityY = 1.0;
}

function createBullet() {
   bullet= createSprite(100, 100, 5, 10);
  bullet.velocityY = -1;
  bullet.x = shooter.x;
  bullet.y = 360;
  bullet.shapeColor = "red";
}

if (bullet.IsTouching) {
 galaxian1. destroyEach();
 score=score+2
 galaxian2.destroyEach();
 score=score+1
 galaxian3.destroyEach();
 score=score+4
}
