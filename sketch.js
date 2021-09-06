var i;
var score;
var coin;
var drink;
var bomb;
function preload(){
  //pre-load images
  coinImg = loadImage("coin.png")
  bombImg = loadImage("bomb.png")
  drinkImg = loadImage("energyDrink.png")
  pathImg = loadImage("path.png")
  powerImg = loadImage("power.png")
  jaxon_running = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400, 400);
  createEdgeSprites();
  //create sprites here
  path = createSprite(200, 200);
  path.addImage(pathImg)
  path.velocityY = 4;
  path.scale = 1.2;
  jaxon = createSprite(200, 350)
  jaxon.addAnimation("running", jaxon_running)
  jaxon.scale = 0.1
  score = 0;
  coinsGroup = createGroup()
  bombsGroup = createGroup()
  drinksGroup = createGroup()
}

function draw() {
  background(0);
  jaxon.x = mouseX;
  if (path.y > 400) {
    path.y = height / 2;
  }
  spawnCoins();

  for (i = 0; i < coinsGroup.length; i++) {
    if (coinsGroup.get(i).isTouching(jaxon)) {
      coinsGroup.get(i).destroy();
      score = score + 50;
    }
  
  }
  spawnBombs();

  for (i = 0; i < bombsGroup.length; i++) {
    if (bombsGroup.get(i).isTouching(jaxon)) {
      bombsGroup.get(i).destroy()
      score = score - 20
    }
  }
  spawnDrinks();
  
  for (i = 0; i < drinksGroup.length; i++) {
    if (drinksGroup.get(i).isTouching(jaxon)) {
      drinksGroup.get(i).destroy()
      score = score + 10;
    
    }
  }
  drawSprites();
  fill("yellow");
  text("Score: " + score, 50, 10);
}
  function spawnCoins() {
    if (frameCount % 40 === 0) {
      var coin = createSprite(random(100, 300), 0,)

      coin.addImage(coinImg)
      coin.scale = 0.25
      coin.velocityY = 4
      coinsGroup.add(coin);
    }
  }
  function spawnBombs() {
    if (frameCount % 60 === 0) {
      var bomb = createSprite(random(100, 300), 0);
      bomb.addImage(bombImg)
      bomb.scale = 0.05
      bomb.velocityY = 4
      bombsGroup.add(bomb);
    }
  }
  function spawnDrinks() {
    if (frameCount % 70 === 0) {
      var drink = createSprite(random(100, 300), 0);
      drink.addImage(drinkImg)
      drink.scale = 0.1;
      drink.velocityY = 4;
      drinksGroup.add(drink);
    }
  }
