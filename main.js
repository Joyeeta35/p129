song1_status= "";
song2_status= "";
song="";
song2="";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;
scoreRightWrist = 0;

function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +" leftWristY" + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +" rightWristY" + rightWristY);
    }
}

function draw(){
    image(video, 0, 0, 600, 500);

    song1_status = song1.isPlaying();
    song2_status = song2.isPlaying();

    fill("#FFDBA4");
    stroke("#FFDBA4");
    if(scoreRightWrist > 0.2)
    {
    circle(rightWristX, rightWristY, 20);

    if(scoreLeftWrist > 0.2)
    {
        circle(leftWristX, leftWristY, 20);
        InNumberleftWristY = Number(leftWristY);
        remove_decimals = floor(InNumberleftWristY);
        volume = remove_decicals/500;
        document.getElementById("volume").innerHTML = "Volume = " + volume;
        song2.setVolume(stop);

        if(song1_status = false)
        {
            song1.setVolume(play);
        }
    }

    if(scoreRightWrist > 0.2)
    {
        circle(rightWristX, rightWristY, 20);
        InNumberrightWristY = Number(rightWristY);
        remove_decimals = floor(InNumberleftWristY);
        volume = remove_decicals/500;
        document.getElementById("volume").innerHTML = "Volume = " + volume;
        song1.setVolume(stop);

        if(song1_status = false)
        {
            song2.setVolume(play);
            document.getElement
        }
    }
}
}
    


function play(){
    song.play();
}