//creating the stones 

class Stone {
    constructor(x,y,width,height){
 
     var options = {
         isStatic: false,
         'restitution':0,
         'friction':1,
         'density':1.2


     }
 
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
     this.height  =height;
     this.image = loadImage("stone.png")
     World.add(world,this.body);
    }
     display(){
        
      rectMode(CENTER);
     strokeWeight(5);
     image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
     
      }
  }
 
 
 
 
 
 

