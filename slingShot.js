class slingShot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bird.body,
            pointB:pointB,
            stiffness:0.04,
            length:8
            
        }
         this.pointB=pointB;
         this.sling=Constraint.create(options);
    
        World.add(world,this.sling);
    
    }
    display(){
        if (this.sling.bodyA){
            strokeWeight(4);
            var pointA=this.sling.bodyA.position;
            var pointB=this.pointB;
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }      
    }

    fly(){
        this.sling.bodyA=null;
    }
}