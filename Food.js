
export default class Food{

    constructor(ctx){
        this.x; 
        this.y;
        this.ctx = ctx;
        // this.rows = rows;
        // this.colums = colums;
        // this.square = square;      
      
     
    }

    location(rows,colums,square){
        // console.log(rows,colums,square);      
        
        // Choose a random number in the jumps of 20
        this.x = (Math.floor(Math.random() *   rows - 1 ) + 1 ) *  square;
        this.y = (Math.floor(Math.random() *   colums - 1 ) + 1 ) *  square;
        console.log(this.x,this.y);
        
    }
    draw(square){
        this.ctx.fillStyle = "black";
        console.log(this.x ,this.y);  
        this.ctx.fillRect(this.x , this.y ,square,square);   
    }
}