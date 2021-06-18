class Hammer
{
    constructor(x,y ,width ,height)
    {

        var options = {'restitution' : 0.5, 'friction' : 1.0, 'density' : 2};

        this.bodyX = x;
        this.bodyY = y;
        this.bodyW = width;
        this.bodyH = height;

        this.body = Bodies.rectangle(this.bodyX,this.bodyY,this.bodyW, this.bodyH , options);
        World.add(world,this.body);

    }
    display()
    {
        var pos = this.body.position
        pos.x = mouseX;
        pos.y = mouseY;
        push();

        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill("orange");
        rect(0,0,this.bodyW,this.bodyH);

        pop();

    }
};












