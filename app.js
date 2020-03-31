import Snack from './Snack.js';
import Food from './Food.js'
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const square = 20;

const rows = canvas.height / square;
const colums = canvas.width / square;
// console.log(rows);


let  food ,  snack ;  
snack = new Snack(square,ctx);
food = new Food(ctx);     


(function gameLoop() {
   food.location(rows,colums,square);  
 
   window.setInterval(() => {
       ctx.clearRect(0 , 0 , canvas.width,canvas.height)
       snack.update(canvas);
       snack.draw();   
       food.draw() ;
     
  }, 250);
}());

window.addEventListener('keydown', ( evt =>{
    //  replace returns a new string where the specified values are replaced.
    let direction = evt.key.replace('Arrow','');
    snack.direction(direction); 

}))  

