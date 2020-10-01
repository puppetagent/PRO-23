class Rect  {

constructor (x,y,width,height){
    var options = {
       'restitution': 1.0,
       'fricition':1.0,
       'density':1.0
    }
    this.boby = Bodies.rectangle(x,y,width,height);
    this.width = width;
    this.height = height;

    World.add(world,this.boby);
}

display() {
    var pos = this.boby.position;
    var angle = this.boby.angle;
    push ();
    translate(pos.x,pos.y);
    rotate (angle);
    rectMode (CENTER);
    fill (255,0,0);
    rect(0,0,this.width,this.height);
    pop ();
}
}