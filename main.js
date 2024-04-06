x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
apple = "";
speak_data = "";
to_number = "";

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
  document.getElementById("status").innerHTML = "System is listening please speak";
  recognition.start();
}

recognition.onresult = function (event) {
  console.log(event);
  content = event.results[0][0].transcript;
  document.getElementById("status").innerHTML = "The speech has been recognized: " + content;
  to_number = Number(content);
  if (Number.isInteger(to_number)) {
    document.getElementById("status").innerHTML = "Started drawing apple";
    draw_apple = "set"
  } else {
    document.getElementById("status").innerHTML = "The speech has not recognized a number";
  }
}

function setup() {
  canvas = createCanvas(900, 600);
}

/*function position() {
  x = random.randint(0, 150);
  y = random.randint(0, 150);
  canvas.position(apple, x, y);
}*/

function draw() {
  if (draw_apple == "set") {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";

    for (var i = 1; i <= to_number; i++) {
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      image(apple, x, y, 50, 50);
    }
  }
}

function speak() {
  var synth = window.speechSynthesis;
  speak_data = "Apple Drawn";
  var utterThis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
}

function preload() {

  apple = loadImage("apple.png");
}