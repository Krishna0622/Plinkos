class particle {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, 10, options);
      this.radius = 10
      this.color= color(random(0,255),random(0,255),random(0,255));
      World.add(world, this.body);
    }
    display(){
      var angle=this.body.angle;
  
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      
      fill(255);
      circle(0, 0, this.radius);
      pop();
    }
  };
  