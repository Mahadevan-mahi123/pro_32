const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour 
var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
    }
    


    Engine.update(engine);
    fill("black");
    textSize(40);
        text("Time "+hour,50,200);
    

    // write code to display time in correct format here


}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    console.log(responseJSON);

    var datetime = responseJSON.datetime;
     hour = datetime.slice(11,13);
    
;
    console.log(datetime+"  " +hour);

    if(hour>=04 && hour<=06){
        bg = "sunrise1.png";
        fill("black");
        text("Time "+hour,50,200);
         }else if(hour>=06 && hour<=08){
        bg = "sunrise2.png";
        fill("black");
        text("Time "+hour,50,200);
    
    }
    else if(hour>=09 && hour<=17){
        bg = "sunrise5.png";
        fill("black");
        text("Time "+hour,50,200);
    
    }
    else if(hour>=18 && hour<=20){
        bg = "sunset9.png";
        fill("black");
        text("Time "+hour,50,200);
    
    }
    else if(hour>=21 && hour<=23){
        bg = "sunset10.png";
        fill("black");
        text("Time "+hour,50,200);
    
    }
    else if(hour>=23 && hour==0){
        bg = "sunset10.png";
        fill("black");
        text("Time "+hour,50,200);
    }else if(hour>=0 && hour==03){
        bg = "sunset11.png";
        fill("black");
        text("Time "+hour,50,200);
    }else{
        bg = "sunset12.png";
        fill("black");
        text("Time "+hour,50,200);
    }
backgroundImg = loadImage(bg);
fill("black");
        text("Time "+hour,50,200);



} 