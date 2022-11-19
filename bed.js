status2 = "";
img = "";

function bedroom()
{
    window.location = "bed.html";
}

function back()
{
    window.location = "index.html";
}

function preload()
{
    img = loadImage("bed.JPG")
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status2").innerHTML = "Status = Detecting Objects";
}

function modelLoaded()
{
    console.log("modelLoaded");
    status2 = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    noFill();
    stroke("#FF0000");
    text("Bed", 45, 75);
    rect(30, 60, 600, 350);
    text("Headphones", 230, 200);
    rect(230, 200, 100, 100);
}