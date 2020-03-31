export default class Snack {

    constructor(square,ctx){
        this.x = 0;
        this.y = 0;
        this.square = square;
        this.ctx = ctx;
        this.xSpeed = square * 1;
        this.ySpeed = 0;

       

    }

    draw (){
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(this.x , this.y ,this.square,this.square);   
    }

    update(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;    
        if(this.x >= 600)  {this.x = 20 };
        if(this.x <= 0)  {this.x = 600 };
        if(this.y >= canvas.height) {this.y = 0 };
        if(this.y < 0) {this.y = canvas.height };
   
    }
    direction(direction){
        console.log(direction);
        
        switch (direction) {
            case 'Up':
                this.xSpeed = 0;
                this.ySpeed = -this.square * 1;  
              break;
            case 'Down':
                this.xSpeed = 0;
                this.ySpeed  = this.square * 1;
              break;
            case 'Right':
                this.xSpeed = this.square * 1;
                this.ySpeed  = 0;     
              break;
            case 'Left':
                this.xSpeed = -this.square * 1;
                this.ySpeed  = 0;   
              break;
        
        }
    }
    
}