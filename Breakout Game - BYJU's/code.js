var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["fdc58d6f-76bb-422e-9364-9ad1fe470f7a"],"propsByKey":{"fdc58d6f-76bb-422e-9364-9ad1fe470f7a":{"name":"volley","sourceUrl":"assets/api/v1/animation-library/gamelab/JTd581LwNfOIZ0FzKo.ais_jFYPyV4_G/category_sports/volleyball.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"JTd581LwNfOIZ0FzKo.ais_jFYPyV4_G","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/JTd581LwNfOIZ0FzKo.ais_jFYPyV4_G/category_sports/volleyball.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//first row of blocks
var box1 = createSprite(25,125,50,50);
box1.shapeColor = "lightblue";
var box2 = createSprite(75,125,50,50);
box2.shapeColor = "lavender";
var box3 = createSprite(125,125,50,50);
box3.shapeColor = "lightblue"; 
var box4 = createSprite(175,125,50,50);
box4.shapeColor = "lavender"; 
var box5 = createSprite(225,125,50,50);
box5.shapeColor = "lightblue";  
var box6 = createSprite(275,125,50,50);
box6.shapeColor = "lavender"; 
var box7 = createSprite(325,125,50,50);
box7.shapeColor = "lightblue"; 
var box8 = createSprite(25,75,50,50);
box8.shapeColor = "lavender";
var box15 = createSprite (375,75,50,50);
box15.shapeColor = "lightblue"; 

//second row of blocks
var box9 = createSprite(75,75,50,50);
box9.shapeColor = "lightblue";
var box10 = createSprite(125,75,50,50);
box10.shapeColor = "lavender"; 
var box11 = createSprite(175,75,50,50);
box11.shapeColor = "lightblue"; 
var box12 = createSprite(225,75,50,50);
box12.shapeColor = "lavender";  
var box13 = createSprite(275,75,50,50);
box13.shapeColor = "lightblue"; 
var box14 = createSprite(325,75,50,50);
box14.shapeColor = "lavender"; 
var box16 = createSprite (375,125,50,50);
box16.shapeColor = "lavender";

//additional variables
var ball = createSprite(170,250,25,25);
ball.setAnimation("volley");
ball.scale = 0.1;
var paddle = createSprite(200,350,120,20);
paddle.shapeColor = "#1F456E";
var score = 0;
var gamestate = "start";

createEdgeSprites();

function draw() {
  background ("white");
  
  //score
  textFont("Georgia");
  textSize(24);
  fill("#1F456E");
  text(score, 365,21);
  text("Score:",290,21);
  
  if(gamestate=="start") {
   text("Press Enter to Start the Game",50,200); 
  if (keyDown ("enter")) {
    ball.velocityX = 2 ;
    ball.velocityY = 3 ;
    gamestate="play";
  }
  }
  
 if (gamestate=="play") {
  paddle.x = World.mouseX;
   if (ball.isTouching(box1)) {
    box1.destroy();
    score = score +1;
  }
  if (ball.isTouching(box2)) {
    box2.destroy();
    score = score +1;
  }
  if (ball.isTouching(box3)) {
    box3.destroy();
    score = score +1;
  }
  if (ball.isTouching(box4)) {
    box4.destroy();
    score = score +1;
  }
  if (ball.isTouching(box5)) {
    box5.destroy();
    score = score +1;
  }
   if (ball.isTouching(box6)) {
    box6.destroy();
    score = score +1;
  }
  if (ball.isTouching(box1)) {
    box1.destroy();
    score = score +1;
  }
  if (ball.isTouching(box7)) {
    box7.destroy();
    score = score +1;
  }
  if (ball.isTouching(box8)) {
    box8.destroy();
    score = score +1;
  }
  if (ball.isTouching(box9)) {
    box9.destroy();
    score = score +1;
  }
   if (ball.isTouching(box10)) {
    box10.destroy();
    score = score +1;
  }
  if (ball.isTouching(box11)) {
    box11.destroy();
    score = score +1;
  }
  if (ball.isTouching(box12)) {
    box12.destroy();
    score = score +1;
  }
  if (ball.isTouching(box13)) {
    box13.destroy();
    score = score +1;
  }
  if (ball.isTouching(box14)) {
    box14.destroy();
    score = score +1;
  }
  if (ball.isTouching(box15)) {
    box15.destroy();
    score = score +1;
  }
  if (ball.isTouching(box16)) {
    box16.destroy();
    score = score +1;
  }
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(rightEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(paddle);
  if (score==16) {
    gamestate="end";
  }
 }

  if(gamestate=="end") {
    ball.velocityX=0;
    ball.velocityY=0;
    ball.x=200;
    ball.y=250;
    paddle.x=200;
    paddle.y=350;
    textSize(35);
    text("You Win!",140,200);
  }
  drawSprites();
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
