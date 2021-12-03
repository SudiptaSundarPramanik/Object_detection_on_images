img="";
status="";

function preload(){
    img1=loadImage("bottles.jpg");
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("bottles_detect").innerHTML="Status : Detecting objects👀";
}

function modelLoaded(){
    console.log("Model is Loaded?");
    status=true;
    objectDetector.detect(video,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(img,0,0,640,420);
}