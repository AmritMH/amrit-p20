var cat,catimg,catchange;
var mouse,mouseimg,mousechange;
var bg,bgimg;

function preload() {
catimg.loadImage("cat1.png",);
mouseimg.loadImage("mouse1.png");
bgimg.loadImage("garden.png");
catchange.loadAnimation("cat2.png","cat3.png")
}

function setup(){
    createCanvas(400,400);
   bg=createSprite(200,200)
bg.addImage(bgimg)

cat=createSprite(300,300)

mouse= createSprite(100,100)



}

function draw() {

    background("white");
    

    drawSprites();
}


function keyPressed(){
if (keycode === LEFT_ARROW){
cat.velocityY=-3
cat.addImage(catimg)
cat.changeAnimation(catchange)


}
 

}
