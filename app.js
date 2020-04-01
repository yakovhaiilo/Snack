import Snack from './Snack.js';
import Food from './Food.js'
var image  = document.getElementById("Apple");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const square = 20;

const rows = canvas.height / square;
const colums = canvas.width / square;

let snack = new Snack(square,ctx);
let food = new Food(ctx,image);     


(function gameLoop() {
   food.location(rows,colums,square);  
   window.setInterval(() => {
       ctx.clearRect(0 , 0 , canvas.width,canvas.height);
       food.draw(square); 
       snack.update(canvas);
       snack.draw();   
       if(snack.eatFood(food)){   
        food.location(rows,colums,square);   
       }
       snack.checkCollision()
       document.getElementById("score").innerText = snack.total;
  }, 100);
}());

window.addEventListener('keydown', ( evt =>{
    //  replace returns a new string where the specified values are replaced.
    let direction = evt.key.replace('Arrow','');
    snack.direction(direction); 

}))  

