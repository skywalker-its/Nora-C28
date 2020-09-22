class Stone{

constructor(x,y,radius){

var options = {
isStatic:false,
frictionAir: 0,
friction: 1,
restitution: 1.0
}

this.body=Bodies.circle(x,y,radius,options);
this.radius=radius;
this.image = loadImage("Plucking mangoes/stone.png");

World.add(world,this.body);
}

display(){
var pos = this.body.position;	
push();
translate(this.body.position.x, this.body.position.y);
fill(255)
imageMode(CENTER);
ellipseMode(CENTER);
image(this.image,0,0,this.radius,this.radius)
pop();
}
}