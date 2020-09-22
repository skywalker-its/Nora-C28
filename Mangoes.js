class Mango{

constructor(x,y,radius){	

var options={
// isStatic:true,
'restitution':0.5,
'friction':1.0,
'density':1.0
}
            
this.radius = radius;
this.image = loadImage("Plucking mangoes/mango.png");
this.body = Bodies.circle(x,y,radius,options);
World.add(world, this.body);
}

display(){
var pos = this.body.position;	
push();
translate(pos.x,pos.y);
fill(255)
imageMode(CENTER);
// ellipseMode(CENTER);
image(this.image,0,0,this.radius,this.radius)
pop();
}
}