//Create variables here

var dog,happyDog,database,food,foodStock;
var foodStock;
var feed,refill;

function preload(){
  //load images here
  IMG1=loadImage("images/dogImg.png");
  IMG2=loadImage("images/dogImg1.png"); 
}

function setup() {
  var canvas=createCanvas(1000, 400);
  
  database=firebase.database();

  dog=createSprite(800,height/2,10,10);
  dog.addImage(IMG1);
  dog.scale=0.2
 
  feed=createButton('feed the dog');
  feed.position(canvas.width-180,80);

  refill=createButton('add food');
  refill.position(canvas.width-80,80);

  foodb=new Food();

 
}




function draw() { 
  background(46,139,87);
  foodb.getFoodStock();
  console.log(foodStock);
  
 
  
  
 
  foodb.display();
  
  addFood();
  feedDog();
  drawSprites();  
}



function addFood(){
  refill.mousePressed(()=>{
    if(foodStock<20)
      foodStock=foodStock+1;
    else
      foodStock=20; 

    foodb.updateFoodStock(foodStock);
  })
}
function feedDog(){
  feed.mousePressed(()=>{
      if(foodStock>0)
      foodStock=foodStock-1;
    else
      foodStock=0  

    dog.addImage(IMG2);
    foodStock=foodStock-1;
    foodb.updateFoodStock(foodStock);
  })}
