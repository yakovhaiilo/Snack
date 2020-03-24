const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// ctx.fillStyle = 'green';
// ctx.fillRect(20, 20, 560, 560);
const snack = {
    positionY = [],
    positionX = [],
    

}


    setTimeout(() => {
        const gameArray = [ 1,2,3,3];
        const rand1 = gameArray[Math.floor(Math.random() * gameArray.length )] 
        const rand2 = gameArray[Math.floor(Math.random() * gameArray.length )] 
        console.log(rand1);
        console.log(rand2);                
        ctx.fillStyle = "black";
        ctx.fillRect(rand1, rand2, 20, 20);
        
    }, 0);    
                             

       


       

 