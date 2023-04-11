let x = -76352
let state = 0
let ballX
let dribling
let shooting
let img5

function preload() {
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  hoop=loadImage("Basketball_net.jpeg")
  swish=loadImage("image-asset.png")
  dribbling=loadImage("dribbling.jpeg")
  shooting=loadImage("shooting with ball.png")
  img5=loadImage("shooting with out ball.jpeg")
  ball=loadImage("ball.png")
  back=loadImage("background.jpeg")
}
function keyPressed() {
if(key === 'a')
  dribbling = shooting
  if(key === 's')
  shooting = img5
  }
function draw() {
    if (state == 0){
    ballX = mouseX
  }
  
  else{
    ballX = -12897
}
  
background(back)
image(hoop,1275,125,375,300)
image(swish,x,218,225,175)
image(dribbling,1,650,385,385)
image(shooting,225,350,215,450)
image(img5,260,250,400,450)
image(ball,ballX,mouseY,150,150)
}


function mouseClicked() {
x = 1345
state = 1
}
