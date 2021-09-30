var bear,bearRunning,bearCollided;
var ground,invisibleGround,groundImg;
var honeybee,honeycomb;
var honeybeeGroup,honeycombGroup;
var score;
var bg,honeybeeImg,bearImg,honeyImg;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var gameover,gameoverImg;

function preload() {
  bg = loadImage("forest.jpg");
  honeybeeImg = loadAnimation("bee1.png","bee2.png");
  honeyImg = loadImage("honey1.png");
  bearImg = loadImage("bear2.png");
  
gameoverImg = loadImage("gameover.jpg")
}
function setup() {
  createCanvas(600, 200);
  
  bear = createSprite(50,180,20,50);
   bear.addAnimation("bear",bearImg);
  ground = createSprite(200,180,400,20);
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  ground.visible = false;
  honeycombGroup = createGroup();
  honeybeeGroup = createGroup();
  score = 0;

  bear.debug = false;
  bear.setCollider("circle",0,0,18)
  
}



function draw() {
  background(bg);
  fill("black");
  text("Score : " + score,20,20);
  
  if(gameState===PLAY) {
    
  
  
  if(keyDown("space")&&bear.y>=140) {
    bear.velocityY = -12;
    
  }
  
  ground.velocityX = -4  
  
  if(ground.x<0) {
    ground.x = ground.width/2;
  }
  if(bear.isTouching(honeycombGroup)) {
    score = score + 1.0;
    
  }

  if(bear.isTouching(honeybeeGroup)) {
  gameState = "end";
    
  }
  bear.velocityY = bear.velocityY + 0.8;
}
  bear.collide(invisibleGround);

  
bees(); 
  honey();
  
  
  
  drawSprites();
  if(gameState ==="end"){
    honeybeeGroup.destroyEach()
    honeycombGroup.destroyEach()
    honeyComb.lifetime = 0
        bear.destroy();
    gameOver = createSprite(0,0,1200,400)
    gameOver.addImage("gameisover",gameoverImg)
    gameOver.scale=1.5
    fill("black");
    textSize(15)
    text("THE HONEYBEE STUNG CHUBBY",182,100)
  }
  
  
  
}

function bees() {
  if(frameCount%200===0) {
honeybee = createSprite(600,100,40,10);
    honeybee.y = Math.round(random(80,100))
    honeybee.velocityX = -3
    honeybee.addAnimation("bees",honeybeeImg)
    honeybee.scale = 0.4;
honeybeeGroup.add(honeybee);
honeybee.lifetime= 200
    
  }
}   
     function honey() {
  if(frameCount%80===0) {
honeyComb = createSprite(600,50,40,10);
    honeyComb.velocityX = -3;
    honeyComb.addImage("honey",honeyImg);
    honeyComb.scale = 0.5;
    honeycombGroup.add(honeyComb);
    honeyComb.lifetime = 180;
    

  }
     
     
}



