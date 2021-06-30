const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg = "sunrise1.png";


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
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine); 

    // write code to display time in correct format here
    fill("purple");
    textSize(30);
    text("Time:"+hour,100,100);

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

    //change the data in JSON format
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;

    // write code slice the datetime
    hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if(hour>=0400 && hour<=0500)
    {
        bg = "sunrise1.png";
    }

    if(hour>=0600 && hour<=0700)
    {
        bg = "sunrise2.png";
    }

        if(hour>0700 && hour<=0800)
        {
            bg = "sunrise3.png";
        }

        else if(hour>0800 && hour<=0900)
        {
            bg = "sunrise4.png";
        }

        else if(hour>0900 && hour<=10)
        {
            bg = "sunrise5.png";
        }

        else if(hour>10 && hour<=18)
        {
            bg = "sunrise6.png";
        }

        else if(hour>18 && hour<=19)
        {
            bg = "sunset7.png";
        }
    
        else if(hour>19 && hour<=20)
        {
            bg = "sunset8.png";
        }
    
        else if(hour>20 && hour<=21)
        {
            bg = "sunset9.png";
        }
    
        else if(hour>21 && hour<=22)
        {
            bg = "sunset10.png";
        }
    
        else if(hour>22 && hour<=23)
        {
            bg = "sunset11.png";
        }
    
        else if(hour>23 && hour<=24)
        {
            bg = "sunset12.png";
        }
        
    //load the image in backgroundImg variable here
            backgroundImg = loadImage(bg);
           
}
