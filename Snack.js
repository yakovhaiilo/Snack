export default class Snack {
  constructor(square, ctx) {
    this.x = 0;
    this.y = 0;
    this.square = square;
    this.ctx = ctx;
    this.xSpeed = square * 1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];
  }

  draw() {
    this.ctx.fillStyle = "black";
    for (let i = 0; i < this.tail.length; i++) {
      this.ctx.fillRect(
        this.tail[i].x,
        this.tail[i].y,
        this.square,
        this.square
      );
    }
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(this.x, this.y, this.square, this.square);
  }

  update() {
    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }

    this.tail[this.total -1] = { x: this.x, y: this.y };
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x <= 0) {
      this.x = 600;
    }
    if (this.y >= canvas.height) {
      this.y = 0;
    }
    if (this.y < 0) {
      this.y = canvas.height;
    }
    if (this.x >= 600) {
      this.x = 0;
    }
  }
  direction(direction) {
    switch (direction) {
      case "Up":
        this.xSpeed = 0;
        this.ySpeed = -this.square * 1;
        break;
      case "Down":
        this.xSpeed = 0;
        this.ySpeed = this.square * 1;
        break;
      case "Right":
        this.xSpeed = this.square * 1;
        this.ySpeed = 0;
        break;
      case "Left":
        this.xSpeed = -this.square * 1;
        this.ySpeed = 0;
        break;
    }
  }
  checkCollision(){
      for (let i = 0; i < this.tail.length; i++) {
        if (this.tail[i].x === this.x && this.tail[i].y === this.y) {
            this.tail = 0;
            this.total = [];
                     
      }

  }
}
  eatFood(food) {
    if (food.x === this.x && food.y === this.y) {
      this.total++;
      return true;
    }
    return false;
  }
}
