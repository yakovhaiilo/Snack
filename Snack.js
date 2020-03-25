export default class Snack {

    constructor(scale,ctx){
        this.x = 0;
        this.y = 0;
        this.scale = scale;
        this.ctx = ctx;
        this.xSpeed = scale * 1;
        this.ySpeed = 0;

       

    }

    draw (){
        this.ctx.fillStyle = "black"
        this.ctx.fillRect(this.x , this.y ,this.scale,this.scale)
      
    }
    update(){
        this.x += this.xSpeed
        this.y += this.ySpeed
        if(this.x >= canvas.width ){
            console.log("crhase")
         
        }
        if(this.x <= canvas.width ){
      
        }
        if(this.y <= canvas.height ){
           
        }
        if(this.y >= canvas.height ){
          
        }
    }
    direction(direction){
        console.log(direction);
        
        switch (direction) {
            case 'Up':
                this.xSpeed = 0;
                this.ySpeed = -this.scale * 1  
              break;
            case 'Down':
                this.xSpeed = 0;
                this.ySpeed  = this.scale * 1
              break;
            case 'Right':
                this.xSpeed = this.scale * 1;
                this.ySpeed  = 0     
              break;
            case 'Left':
                this.xSpeed = - this.scale * 1;
                this.ySpeed  = 0   
              break;
        
        }
    }
    
}