class Drop{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restituution:0.3,
            friction:0.1,
            density:1.2
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
pop();
}
update(){
    if(this.drop1.position.y>height){
        Matter.Body.setPosition(this.drop1,{x:random(0,400),y:random(0,400)});
    }

}
}