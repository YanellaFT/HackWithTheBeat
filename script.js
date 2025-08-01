/* VARIABLES */
let piano;
let Ckey, Dkey, Ekey, Fkey, Gkey, Akey, Bkey;
let CkeyAud, DkeyAud, EkeyAud, FkeyAud, GkeyAud, AkeyAud, BkeyAud;


function preload(){
  piano = loadImage("assets/piano.png");

  CkeyAud = loadSound("assets/Ckey.webm");
}


function setup() {
  createCanvas(600,500);
  background("#555661");
  image(piano, 0, 250, 600, 250);
  //piano.layer = 1;

  //textFont(cursive);
  text("Play the piano and watch it make art", 100, 100);
  

  stroke("white");
  Ckey = new Sprite(45, 445, 75, 100);
  Ckey.color = "white";
  //Ckey.layer = 2;



}


function draw() {

  if (Ckey.mouse.pressed()) {
    print("Ckey");
    CkeyAud.play();
  }
}

/* FUNCTIONS */