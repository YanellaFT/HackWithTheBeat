/* VARIABLES */
let piano;
let Ckey, Dkey, Ekey, Fkey, Gkey, Akey, Bkey;
let CkeyAud, DkeyAud, EkeyAud, FkeyAud, GkeyAud, AkeyAud, BkeyAud;


function preload(){
  piano = loadImage("assets/piano.png");

  CkeyAud = loadSound("assets/Ckey.webm");
  DkeyAud = loadSound("assets/Dkey.webm");
  EkeyAud = loadSound("assets/Ekey.webm");
  FkeyAud = loadSound("assets/Fkey.webm");
  GkeyAud = loadSound("assets/Gkey.webm");
}


function setup() {
  createCanvas(600,500);
  background("#555661");
  image(piano, 0, 250, 600, 250);
  //piano.layer = 1;

  //textFont(cursive);
  text("Play the piano and watch it make art", 100, 100);
  

  stroke("white");
  Ckey = new Sprite(45, 445, 75, 100, "k");
  Ckey.color = "white";
  //Ckey.layer = 2;

  Dkey = new Sprite(130, 445, 75, 100, "k");
  Dkey.color = "white";

  Ekey = new Sprite(215, 445, 75, 100, "k");
  Ekey.color = "white";

  Fkey = new Sprite(300, 445, 75, 100, "k");
  Fkey.color = "white";

  Gkey = new Sprite(385, 445, 75, 100, "k");
  Gkey.color = "white";

  Akey = new Sprite(470, 445, 75, 100, "k");
  Akey.color = "white";

  Bkey = new Sprite(555, 445, 75, 100, "k");
  Bkey.color = "white";


}


function draw() {

  if (Ckey.mouse.pressed()) {
    print("Ckey");
    CkeyAud.play();
  }

  if (Dkey.mouse.pressed()) {
    print("Dkey");
    DkeyAud.play();
  }

  if (Ekey.mouse.pressed()) {
    print("Ekey");
    EkeyAud.play();
  }

  if (Fkey.mouse.pressed()) {
    print("Fkey");
    FkeyAud.play();
  }

  if (Gkey.mouse.pressed()) {
    print("Gkey");
    GkeyAud.play();
  }

  if (Akey.mouse.pressed()) {
    print("Akey");

  }

  if (Bkey.mouse.pressed()) {
    print("Bkey");
    
  }
}

/* FUNCTIONS */