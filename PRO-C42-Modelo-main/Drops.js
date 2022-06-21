class Drops {
    constructor(x,y){
        var options = {
            isStatic: true,
            friction:0.1,
        }
        //this.image = loadImage("Walking Frame/walking_1.png");
        this.rain = Bodies.circle(x,y,5,options);
        //this.radius = 50;
        World.add(world, this.Drops)
        //load Image for BestMan
        
    }

    display(){
        var pos = this.Drops.position;
        imageMode(CENTER);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with Drops image
        image(this.image,pos.x,pos.y+70,300,300);
    }
}
