x = 0;
y = 0;

draw_apple = "apple";
to_number = Number(content);
if(Number.isInteger(to_number))

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
  canvas = createCanvas(900, 600);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "apple";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    screen_width = window.innerWidth;

    synth.speak(utterThis);

    speak_data = "apple";
}

for(var i = 1; i <= to_number; i++)
{
  x = Math.floor(Math.roundom() * 700);
  y = Math.floor(Math.roundom() * 400);
  image(apple, x, y, 50, 50);
}