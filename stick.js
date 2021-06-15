class Stick{ 
constructor(x,y,width,height){
     var options={
          'restitution': 1.0,
           'density': 0.5
         } 
         
         this.body = Bodies.rectangle(x, y, width, height, options);
          this.width = width;
           this.height = height;
           this.x = x;
            this.y = y;
             World.add(world, this.body);
             } 
             display(){ 
                 var pos = this.body.position;
                  var angle = this.body.angle;
                   push();
                    rectMode(CENTER);
                 rotate(angle);
                  strokeWeight(5);
                   stroke("green");
                    fill("purple");
                     rect(this.x, this.y, this.width, this.height);
                      rect(this.x, this.y, this.width, this.height);
                      pop()
             }
          }