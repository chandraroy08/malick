class trashbin {
    constructor(x, y,width,height) {
      var options = {
          'density':1.0,
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width,height, options);
      this.image = loadImage("sprites/dustbingreen.png");
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("blue");
      image(this.image,pos.x, pos.y,this.width, this.height);
      
    }
  };