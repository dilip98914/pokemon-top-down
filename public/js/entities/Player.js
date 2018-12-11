import Entity from './Entity.js';
import config from '../config.js';

export default class Player extends Entity{
constructor(image){
  super(1.5);
  this.sprites={
    'down':[],
    'left':[],
    'up':[],
    'right':[]
  }
  this.defineAllSprites(image);
  this.x=0;this.y=0;
}


defineAllSprites(image){
  config.playerTags.forEach(tag=>{
    for(let i=0;i<5;i++){
      this.define(image,tag,i*32
        ,config.initialY+(config.playerTags.indexOf(tag))*config.playerSpriteOffset);
    }
  });

}

getInput(e){
  e.preventDefault();
  console.log(e);

}


drawSpriteSheet(context){
  Object.keys(this.sprites).forEach((key,index)=>{
    this.sprites[key].forEach(elementBuffer=>{
      context.drawImage(elementBuffer,this.x,this.y);
      this.x+=40;
    });
    this.x=0;
    this.y+=40;
  });
}

draw(context,name,x,y){
  context.drawImage(this.sprites[name][this.getAnimationIndex(200)],x,y);

}


}
