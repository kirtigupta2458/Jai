var trex ,trex_running;


function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex=createSprite(50,160,20,80)
  trex.addAnimation("kirti",trex_running)
  trex.scale=0.7
 
  
  



}

function draw(){
  background("pink")

  
 

 if(keyDown("space")){
  var message="This is a message"
 }

 console.log(message)

  drawSprites()
}
