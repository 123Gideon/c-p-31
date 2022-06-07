class Tower {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    var options={
      isStatic:true
    }
    this.body = Matter.Bodies.rectangle(this.x, this.y, this.w, this.h,options);
    World.add(world, this.body);
    this.TowerImage=loadImage("assets/tower.png")
  }
  display(){
    var pos=this.body.position
    var angle=this.body.angle
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    // rectMode(CENTER)
    // rect(0,0,this.w,this.h)
    imageMode(CENTER)
    image(this.TowerImage,0,0,this.w,this.h)
    pop()
  }
}
