/* VARIABLES */
let piano;
let Ckey, Dkey, Ekey, Fkey, Gkey, Akey, Bkey;
let CkeyAud, DkeyAud, EkeyAud, FkeyAud, GkeyAud, AkeyAud, BkeyAud;
let Ccir, Dcir, Ecir, Fcir, Gcir, Acir, Bcir;
let showNoteNames, hideNoteNames;
let showAgain = true;


function preload(){
  piano = loadImage("assets/piano.png");

  CkeyAud = loadSound("assets/Ckey.webm");
  DkeyAud = loadSound("assets/Dkey.webm");
  EkeyAud = loadSound("assets/Ekey.webm");
  FkeyAud = loadSound("assets/Fkey.webm");
  GkeyAud = loadSound("assets/Gkey.webm");
  AkeyAud = loadSound("assets/Akey.webm");
  BkeyAud = loadSound("assets/Bkey.webm");
}


function setup() {
  createCanvas(600,500);

  noStroke();
  //Keys
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


  //bubbles
  Ccir = new Sprite(-40, -250, "k");
  Ccir.diameter = 10;
  Ccir.color = "red";
  Ccir.visible = false;


  //noteName button
  showNoteNames = new Sprite(530, 30, 110, 20, "k");
  showNoteNames.text = "Show Note Names";
  showNoteNames.color = "white";

  hideNoteNames = new Sprite(530, 30, 110, 20, "k");
  hideNoteNames.text = "Hide Note Names";
  hideNoteNames.color = "white";
  hideNoteNames.visible = false;

}

function draw() {
  background("#555661");
  image(piano, 0, 250, 600, 250);
  
  //textFont(cursive);
  text("Play the piano and watch it make bubbles", 100, 100);

  if (Ckey.mouse.pressed()) {
    print("Ckey");
    CkeyAud.play();
    Ccir.pos = {x: 40, y: 250};
    Ccir.visible = true;
    Ccir.diameter = random(10, 50);
    Ccir.vel.y = random(-5, -1);
  }
  if (Ccir.y == 0) {
    Ccir.pos = {x: 40, y: 250};
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
    AkeyAud.play();
  }

  if (Bkey.mouse.pressed()) {
    print("Bkey");
    BkeyAud.play();
  }

  NoteNames();

}

/* FUNCTIONS */
function NoteNames() {
    if (showNoteNames.mouse.pressed()) {
    showNoteNames.visible = false;
    hideNoteNames.visible = true;
    showAgain = false;

    Ckey.text = "C";
    Dkey.text = "D";
    Ekey.text = "E";
    Fkey.text = "F";
    Gkey.text = "G";
    Akey.text = "A";
    Bkey.text = "B";
  } 
  if (hideNoteNames.mouse.pressed()) {
    showNoteNames.visible = true;
    hideNoteNames.visible = false;
    showAgain = true;

    Ckey.text = " ";
    Dkey.text = " ";
    Ekey.text = " ";
    Fkey.text = " ";
    Gkey.text = " ";
    Akey.text = " ";
    Bkey.text = " ";
  }
}