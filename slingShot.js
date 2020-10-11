class slingShot{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bird.body,
            bodyB:logc.body,
            stiffness:1,
            lenght:15
            
        }
         this.slingShot=Constraint.create(options);
    
        World.add(world,this.slingShot);
    
    }
    display(){
       strokeWeight(4);
        line (this.slingShot.bodyA.position.x,this.slingShot.bodyA.position.y,this.slingShot.bodyB.position.x,this.slingShot.bodyB.position.y);

        
    }
}