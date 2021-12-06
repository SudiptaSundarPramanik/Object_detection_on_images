img="";
status="";
objects=[];
objectDetector="";

function preload(){
    img=loadImage("tv and ac.jpg");
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("tv_and_ac_status").innerHTML="Status : Detecting objects👀";
}

function modelLoaded(){
    console.log("Model is Loaded?");
    status=true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
    objects=results;
}

function draw(){
    image(img,0,0,640,420);

    if(status!=" "){
        r=random(255);
        g=random(255);
        b=random(255);
        objectDetector.detect(img,gotResult);
        for(i=0;i<objects.length;i++){
            document.getElementById("tv_and_ac_status").innerHTML="Status: Detecting Objects⚡⚡";
            document.getElementById("tv_and_ac_objects").innerHTML="Number of objects are⚡⚡ : "+objects.length;
            fill(r,g,b);
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+" % ",objects[i].x+15,objects[i].y+15);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}