class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
this.img1 = loadImage("sprites/sling1.png")
this.img2 = loadImage("sprites/sling2.png")
this.img3 = loadImage("sprites/sling3.png")

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x < 210){
                stroke (84,39,15)
                strokeWeight(10);
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+20, pointB.y);
                image(this.img3,pointA.x-35, pointA.y-10,30,15) 
            }
            else {
                stroke (84,39,15)
                strokeWeight(5);
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x+20, pointB.y);
                image(this.img3,pointA.x+20, pointA.y-10,30,15) 

            }
            
    
       }
        image(this.img1, 200,20)
        image(this.img2, 170,20)

        
        
    }
    
}