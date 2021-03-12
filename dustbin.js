class Dustbin {
    constructor(){

        var options={
            isStatic:true
        }

        this.bottomBody=Bodies.rectangle(1400,660,200,20,options);
        this.leftBody=Bodies.rectangle(1300,600,20,100,options);
        this.rightBody=Bodies.rectangle(1500,600,20,100,options);
        World.add(world,this.bottomBody);
        World.add(world,this.leftBody); 
        World.add(world,this.rightBody);
    }
display() {
var posBottom=this.bottomBody.position;
var posLeft=this.leftBody.position;
var posRight=this.rightBody.position;
fill(255);
stroke(255);
rectMode(CENTER);
rect(posBottom.x,posBottom.y,200,20);
rect(posLeft.x,posLeft.y,20,100);
rect(posRight.x,posRight.y,20,100);
    }
}