status1 = "";
img = "";

function back()
{
    window.location = "index.html";
}

function livingRoom()
{
    window.location = "living.html";
}

function preload()
{
    img = loadImage("livingRoom.JPG")
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status1").innerHTML = "Status = Detecting Objects";
}

function modelLoaded()
{
    console.log("modelLoaded");
    status1 = true;
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
    text("Dad", 45, 75);
    rect(10, 60, 160, 350);

    stroke("#FF0000");
    text("Miscellaneous", 350, 125);
    rect(300, 100, 300, 300);

   
}
