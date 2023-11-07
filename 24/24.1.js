function Square (a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
  }
  Square.prototype.isSquare = function(){
    return (this.a === this.c && this.b === this.d && this.c === this.b);
  }

const shape1 = new Square(10 , 10 , 10 , 10)
const shape2 = new Square(10 , 9 , 10 , 9)
const shape3 = new Square(10 , 9 , 12 , 9)

console.log(shape1.isSquare());
console.log(shape2.isSquare());
console.log(shape3.isSquare());

