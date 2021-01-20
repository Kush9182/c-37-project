class Food{
    constructor(){
        this.image=loadImage("images/Milk.png");
        //this.lastFed=7
    }

    display(){
        for(var i=0;i<foodStock/2;i=i+1){
            image(this.image,50+40*i,100,60,70);
            image(this.image,50+40*i,200,60,70);
        }
    }
    
    getFoodStock(){
        database.ref('food').on("value",function(data){
            foodStock=data.val();
        })
    }
    updateFoodStock(stock){
        database.ref('/').update({
            food: stock
        })
    

        
    }
    
} 