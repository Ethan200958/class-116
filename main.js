noseX = 0;
noseY = 0;

function preload() {
    firenose = loadImage('https://i.postimg.cc/MGm9f2Tx/clownnose.png');
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Posenet is loaded");
}

function draw() {
image(video, 0, 0, 400, 400);

image(firenose, noseX-15, noseY-7, 35, 35);
}

function takePic() {
    save("filteredPicture.png");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);

        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x = "+noseX);
        console.log("nose y = "+noseY);
    }
}