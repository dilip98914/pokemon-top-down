import {Vec2} from '../math.js';




export default class Entity{
  constructor(renderScale){
    this.pos=new Vec2(0,0);
    this.size=new Vec2(32,32);
    this.renderScale=renderScale;
    this.renderSize=new Vec2(this.size.x*this.renderScale,this.size.y*this.renderScale);
    this.sprites={
      'default':[]

    }
    this.animSpec={
      lastTime:0,
      index:0,
      delta:0,
      now:0,
    }

  }


define(spriteSheet,name,x,y){
  const buffer=document.createElement('canvas');
  buffer.width=this.renderSize.x;
  buffer.height=this.renderSize.y;
  buffer.getContext('2d')
    .drawImage(spriteSheet,x,y,this.size.x,this.size.y,
                  0,0,this.renderSize.x,this.renderSize.y);


  Object.keys(this.sprites).forEach((key,index)=>{
    if(name==key){
      this.sprites[key].push(buffer);
    }
  });


}
  getAnimationIndex(time){
    this.animSpec.now=Date.now();
    this.animSpec.delta+=(this.animSpec.now-this.animSpec.lastTime);
    this.animSpec.lastTime=this.animSpec.now;
    if(this.animSpec.delta>=time){
        this.animSpec.index++;
        this.animSpec.delta=0;
    }
    if(this.animSpec.index>=4){
      this.animSpec.index=0;
    }
    return this.animSpec.index;
  }



  draw(context,name,x,y){
    context.drawImage(this.sprites[name][this.getAnimationIndex(200)],x,y);

  }






}
