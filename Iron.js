class Iron
{
    constructor(x,y ,width ,height)
    {

        var options = {'restitution' : 0.8, 'friction' : 3, 'density' : 30};

        this.bodyX = x;
        this.bodyY = y;
        this.bodyW = width;
        this.bodyH = height;

        this.body = Bodies.rectangle(this.bodyX,this.bodyY,this.bodyW, this.bodyH , options);
        World.add(world,this.body);

    }
    display()
    {
        
        push();

        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.bodyW,this.bodyH);

        pop();

    }
};












