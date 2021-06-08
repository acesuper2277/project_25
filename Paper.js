class Paper{

    constructor(x,y,r){

        var options = {restitution:0.3, density:0.2, friction:0}

        this.x=x
        this.y=y
        this.r=r
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(x, y, (this.r-20)/2, options)
        World.add(world, this.body, this.image);
    }

    display(){

        var pos = this.body.position
        push()
        translate(pos.x, pos.y);
        imageMode(CENTER)
        image(this.image,0,0,50,50);
        pop()
    }
}