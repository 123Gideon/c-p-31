class Canonball {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    var options = {
      isStatic: true,
    };
    this.body = Matter.Bodies.circle(this.x, this.y, this.r, options);
    World.add(world, this.body);
    this.canonballImage = loadImage("assets/cannonball.png");
    this.trajetory = [];
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    // rectMode(CENTER)
    // rect(0,0,this.w,this.h)
    imageMode(CENTER);
    image(this.canonballImage, 0, 0, this.r, this.r);
    pop();
    if(this.body.velocity.x>0 && this.body.position.x>260){
      var position = [pos.x, pos.y];
      this.trajetory.push(position);
      console.log(this.trajetory);
    }
    


    for (var i = 0; i <this.trajetory.length; i += 1) {
      image(this.canonballImage, this.trajetory[i][0], this.trajetory[i][1], 5, 5);
    }
  }
  shoot() {
    var velocity = p5.Vector.fromAngle(Mycanon.angle);
    velocity.mult(20);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });

  
  }
}
