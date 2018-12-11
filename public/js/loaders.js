export function loadImage(path){
  return new Promise(resolve=>{
    const image=new Image();
    image.addEventListener('load',()=>{
       resolve(image);
    });
    image.src=path;

  });
}
