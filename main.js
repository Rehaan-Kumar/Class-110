Webcam.set({
    width: 300,
    height: 300,
    image_format: "png",
    png_quality: 90,
    flip_horiz: true,
    constraints: {
        facingMode: "environment"
    }
})

camera = document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='captured_image' src = "+data_uri+">"
    })
}

console.log("ml5 version" , ml5.version);

classifier = ml5.imageClassifier("MobileNet" , model_loaded);

function model_loaded() {
    console.log("Model Loaded !!!!")
}

function check() {
    img = document.getElementById("captured_image")
    classifier.classify(img , got_result)
}

function got_result(error , result) {
    if(error) {
        console.error(error)
    }else{
        console.log(result)
        document.getElementById("object_name").innerHTML = result[0].label
    }
}