function setup(){
canvas = createCanvas(280, 280);
canvas.position(window.innerWidth / 2 - 140, 300);
//background("white");
canvas.mouseReleased(classifyCanvas);
}
function limpiar(){
   canvas.clear();
}
function classifyCanvas(){
    classifier.classify(canvas, gotResult);
}
function preload(){
    classifier = ml5.imageClassifier('DoodleNet');

}
function draw(){
strokeWeight(10);
stroke("black");
if (mouseIsPressed){
    line(pmouseX, pmouseY, mouseX, mouseY);
}
}
function gotResult(error, result){
if(error){
    console.error(error);
} else {
    console.log(result);
}
document.getElementById("label").innerHTML = "Tag: " + result[0].label;
document.getElementById("confidence").innerHTML = "confidence: " + Math.round(result[0].confidence * 100) + "%"; 
}
