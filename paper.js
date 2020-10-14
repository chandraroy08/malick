class paper {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':0.5,
          isStatic:false
      }
      this.body = Bodies.circle(x, y, 70, options);
      this.image=loadImage("Sprites/paper.png")
      this.radius = 70;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      strokeWeight(3);
      imageMode(CENTER)
      image(this.image,15,17,70,70);
      pop();
    }
  };