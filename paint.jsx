let currentColor;
let brushSize;
let isEraser = false;
let toolbar;

function setup() {
  createCanvas(800, 500);
  background(255);

  currentColor = color(0);

  toolbar = createDiv();
  toolbar.position(0, 0);
  toolbar.size(800, 40);
  toolbar.style("background", "#808080");

  createButton("Black").parent(toolbar).mousePressed(() => {
    currentColor = color(0);
    isEraser = false;
  });

  createButton("Red").parent(toolbar).mousePressed(() => {
    currentColor = color(255, 0, 0);
    isEraser = false;
  });

  createButton("Green").parent(toolbar).mousePressed(() => {
    currentColor = color(0, 255, 0);
    isEraser = false;
  });

  createButton("Blue").parent(toolbar).mousePressed(() => {
    currentColor = color(0, 0, 255);
    isEraser = false;
  });

  createButton("Eraser").parent(toolbar).mousePressed(() => {
    isEraser = true;
  });

  createButton("Clear").parent(toolbar).mousePressed(() => {
    background(255);
  });

  brushSize = createSlider(1, 30, 5);
  brushSize.parent(toolbar);
}

function draw() {
  if (mouseY < toolbar.height) return;

  if (mouseIsPressed) {
    strokeWeight(brushSize.value());

    if (isEraser) {
      stroke(255);
    } else {
      stroke(currentColor);
    }

    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}


//create a function that allows the user to save the canvas as an image
function saveCanvas() {
  saveCanvas("myCanvas", "png");
}
//testinggit