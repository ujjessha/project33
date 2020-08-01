class Umbrella{
    constructor(x,y,radius){

    this.image=loadImage("umbrella.jpg")
  
        var options={
            isStatic:true,
            restituution:0.3,
            friction:0.1,
            density:1.2,
            

        }
    
    this.body = Bodies.circle(x, y, radius/2, options);
    this.r= radius;
 
    World.add(world, this.body);
    }

 display(){


    var pos=this.body.position
    push();
    strokeWeight(3);
	fill(255,0,255)
    translate(pos.x, pos.y);
    ellipse(0,0,this.r,this.r);
    image(this.image,0,0,this.r,this.r);
   
    pop();

}
    }
