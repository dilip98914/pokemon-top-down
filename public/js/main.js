import config from './config.js';
import {loadImage} from './loaders.js';
import Player from './entities/Player.js';
const canvas=document.getElementById('screen');
const context=canvas.getContext('2d');


let player;



loadImage('../images/ash.gif')
  .then(image=>{
     player=new Player(image);
     document.addEventListener('keydown',player.getInput);
     player.drawSpriteSheet(context);
    // setInterval(gameLoop,1000/60);
  });


let x=canvas.width/2;
let y=canvas.height/2;

function gameLoop(){
    context.fillStyle="white";
    context.fillRect(0,0,canvas.width,canvas.height);
    console.log('sfh');
    // player.draw(context,'right',x,y);
  }
