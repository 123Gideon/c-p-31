const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var MyTower;
var backgroundImg;
var MyGround;
var Mycanon;
var Mycanonball;
var balls = [];
var Myboat
function preload() {
  backgroundImg = loadImage("./assets/background.gif");
}

function setup() {
  canvas = createCanvas(1200, 600);

  engine = Engine.create();
  world = engine.world;

  MyTower = new Tower(120, 350, 200, 350);
  MyGround = new Ground(600, 550, width, 20);
  var angle = -PI / 4;
  Mycanon = new canon(180, 110, 100, 50, angle);
  Myboat= new Boat(1000,500,100,100)
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  MyTower.display();
  MyGround.display();
  Mycanon.display();
  Myboat.display();
  Matter.Body.setVelocity(Myboat.body,{x:-2,y:0})
  for (var i = 0; i < balls.length; i += 1) {
    showsballs(balls[i], i);
  }
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    Mycanonball = new Canonball(Mycanon.x, Mycanon.y, 50);
    balls.push(Mycanonball);
  }
}
function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    balls[balls.length - 1].shoot();
  }
}

function showsballs(ball, index) {
  ball.display();
  if (ball.body.position.x > width || ball.body.position.y > height - 150) {
    World. remove(world, ball.body);
    balls.splice(index, 1);
  }
}
