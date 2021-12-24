console.log("ml5 version",ml5.version);
Webcam.set({
width:300,height:300,image_format:'png',png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach(camera);
function snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>";
    });
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/fvLfwsPJx/model.json",modelLoading);
