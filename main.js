noseX=0;
noseY=0;
length=0;
rightWristX=0;
leftWristX=0;

function setup(){
    video= createCapture(VIDEO);
video.size(500,450);
canvas=createCanvas(500,500);
canvas.position(560,150);
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
console.log('PoseNet Is Intialized')
}noseX=0;
noseY=0;
length=0;
rightWristX=0;
leftWristX=0;

function setup(){
    video= createCapture(VIDEO);
video.size(500,450);
canvas=createCanvas(500,500);
canvas.position(560,150);
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw()
{
    background('#C7CB85')
    textsize(10)
    fill("#FFFFFF")
    text("Vivan",noseX,noseY,length)
}

function gotPoses(results ,error){
    if(error){
        console.log(error);
    }
    else{
       if(results.length > 0) {
        console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX="+noseX+" \n noseY"+ noseY);
    
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    length = Math.floor(leftWristX - rightWristX);
    
    console.log("leftWristX =" +leftWristX +"\n igthWristX"+rightWristX+" \nlength ="+length);
       }
    
    }
    }
    