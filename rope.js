class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offset.offsetX
        this.offsetY=offsetY
        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX, y:this.offsetY}
            ///length:100,
            //stiffness:0.6

        }
this.rope = Constraint.create(options)
World.add(world,this.rope)
    }
    display(){
       var  pointA = this.chain.bodyA.position;
       var pointB = this. chain. bodyB.position;
       
       strokeWeight(2)
       
       var Anchor1X=pointA.x
       var Anchor1Y=pointA.y

       var Anchor2X=pointB.x+this.offsetX
       var Anchor2Y=pointB.y+this.offsetY

       line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y)
       //stroke("black")

       //line(pointA.x,pointA.y,pointB.x,pointB.y) 
pop()
    }

}