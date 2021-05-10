class Chain{
    constructor(a,b){
        var options = {
            bodyA:a,
            pointB:b,
            stiffness:0.05,
            length:300

        }
        this.body = Constraint.create(options)
        World.add(world,this.body);
    }
    display(){
        fill ("brown")
        strokeWeight(5)
        line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.body.pointB.x,this.body.pointB.y);
    }
}