nosex=0
nosey=0

//preload is used to load the assets (image, audio, video)
function preload() {
    mustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png")

}
//setup function is used to load the commands that are to be loaded only once, at the start of running the app.
function setup() {
canvas=createCanvas(350,300)
canvas.center()
//
video=createCapture(VIDEO)
//video.size(350,300)
video.hide()

Posenet=ml5.poseNet(video,modeloaded)



Posenet.on('pose', gotResults)
}


function modeloaded() {
    console.log("Model has been loaded! Round of applause?")
}
function gotResults(result) {
if(result.length>0) {
    console.log(result)
nosex=result[0].pose.nose.x-30
nosey=result[0].pose.nose.y+10
}
}

function draw() {
    image(video,0,0,350,300)
    image(mustache, nosex, nosey, 60, 30)
    
}