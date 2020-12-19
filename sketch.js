//Create variables here

function preload()
{
	//load images here
}

function setup() {
	createCanvas(800, 700);
  
Foodstock=database.ref('Food');
Foodstock.on("value",readStock);

fedTime=database.ref('FeedTime');
fedTime.on("value",function(data){
lastFed=data.val();
feed=createButton("Feed the dog");
feed.position(700,95);
feed.mousePressed(feedDog);

addFood=createButton("Add Food");
addFood.position(800,95);
addFood.mousePressed(addFoods)


}






function draw() {  

  drawSprites();
  //add styles here
fill(255,255,254);
textSize(15);
if(lastFed>=12){
text("Last Feed : "+ lastFed%12 + "PM" ,350,30);
}else if(lastFed==0){
text("Last Feed : 12 AM",350,30);
}else{
  text("Last Feed : "+ lastFed + "AM",350,30);
}




skroke()



if(keyWentDown(UP_ARROW)){
writeStock(FoodS);
dogs.addImage(dogHappy);

}



}
function readStock(data){



}

function writeStock(x){

if(x<=0){

  x=0;
}else{

x=x-1;

}

database.ref('/').update({

Food:x

})


}

function feedDog(){

dog.addImage(happyDog);

foodObj.updateFoodStock(foodObj.getFoodStock()-1);
database.ref('/').update({
 Food:foodObj.getFoodStock(),
 FeedTime:hour()
})
}

function addFoods(){

foodS++;
database.ref('/').update({
Food:foodS

})

}






