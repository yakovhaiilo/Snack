import Snack from './Snack.js';
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const scale = 20;

const rows = canvas.height /scale;
const colums = canvas.width / scale;
let snack;  

(function setUp() {
   snack = new Snack(scale,ctx);
   window.setInterval(() => {
       ctx.clearRect(0 , 0 , canvas.width,canvas.height)
       snack.update(canvas);
       snack.draw();   
  }, 250);
}());
//  replace returns a new string where the specified values are replaced.
 window.addEventListener('keydown', ( evt =>{
     let direction = evt.key.replace('Arrow','');
     snack.direction(direction); 

 }))