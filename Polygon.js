class Polygon {
    constructor(x,y,radius){
      var options={
          density:1,
          frictionAir:0.005
      }
      this.body=Bodies.circle(x,y,radius/2,options);
      this.radius=radius;
      this.image=loadImage("polygon.png");
      World.add(world,this.body);
    }

    display(){
       var pos =this.body.position;
       var angle=this.body.angle;
          push();
          translate(pos.x,pos.y);
          rotate(angle);
          fill("yellow");
          imageMode(CENTER);
          image(this.image,0,0,this.radius,this.radius);
          pop();
    }
}