export class Vec2{
  constructor(x,y){
    this.x=x;
    this.y=y;
  }
  getMagnitude(){
    return Math.sqrt(this.x*this.x+this.y*this.y);
  }

}
