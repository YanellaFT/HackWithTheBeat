/* VARIABLES */
let piano;


function preload(){
  piano = loadImage("assets/piano.png");
}


function setup() {
  createCanvas(600,500);
  background("#555661");
  image(piano, 0, 250, 600, 250);

  //textFont(cursive);
  text("Play the piano and watch it make art", 100, 100);
}


function draw() {

}

/* FUNCTIONS */