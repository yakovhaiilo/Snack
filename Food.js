
export default class Food{
    constructor(ctx,image){
        this.x; 
        this.y;
        this.ctx = ctx; 
        this.image = image
    }
    location(rows,colums,square){
        this.x = (Math.floor(Math.random() *   rows - 1 ) + 1 ) *  square;
        this.y = (Math.floor(Math.random() *   colums - 1 ) + 1 ) *  square;
    }
    draw(square){
        this.ctx.fillStyle = "red";
        this.ctx.drawImage(this.image, this.x , this.y,square,square);
        // this.ctx.fillRect(this.x , this.y ,square,square);   
    }
}