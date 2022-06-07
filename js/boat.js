class Boat {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    var options = {
      isStaic: true,
    };
    this.body = Matter.Bodies.rectangle(
      this.x,
      this.y,
      this.w,
      this.h,
      options
    );
    World.add(world, this.body);
    this.boatImage = loadImage("assets/boat.png");
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.boatImage, 0, 0, this.w, this.h);
    pop();
  }
}
