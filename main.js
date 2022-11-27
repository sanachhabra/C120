function setup() {
    canvas=createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth=window.speechSynthesis;
    }
    
    function clearCanvas() {
    background("white");  
    }
    
    function preload() {
    classifier=ml5.imageClassifier("DoodleNet");
    }
    
    function draw() {    
    }
    
    //Set Stroke Weight To 13
    strokeWeight(13);
    //Set Stroke Color To Black
    stroke(0);
    //If Mouse Is Pressed, Draw Line Between Previous And Current Positions
    if(mousePressed) {
    line(pmouseX, pmouseY, mouseX, mouseY); 
    }
    
    function classifyCanvas() {
    classifier.classify(canvas, gotResult);
    }
    
    function gotResult(error, result) {
    if (error) {
    console.error(error);    
    }
    console.log(results);
    document.getElementById("label").innerHTML="Label:"+results[0].label;
    document.getElementById("confidence").innerHTML="Confidence:"+Math.round(results[0].confidence*100+"%");
    utterThis=new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
    }
    function setup() {
    
        canvas = createCanvas(280, 280);
    
        canvas.center();
    
        background("white");
    
    }
    
    function clearCanvas() {
    
        background("white");
    
    }
    
    